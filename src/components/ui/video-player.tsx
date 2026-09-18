"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function clock(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Self-hosted demo player with handwritten controls.
 *
 * Autoplay only ever starts muted, because every browser blocks sound without a
 * gesture, and it is tied to an IntersectionObserver so a seven megabyte file
 * is never fetched or decoded until the card is actually on screen. Sound is
 * one click away and the state is shown in words rather than a speaker glyph.
 *
 * Reduced-motion users get the poster and a play button instead of motion they
 * did not ask for.
 */
export function VideoPlayer({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  // Play while visible, pause while not. Also the point at which the file is
  // first requested, hence preload="none" on the element.
  useEffect(() => {
    const video = ref.current;
    if (!video || reduce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can still be refused; the poster and controls remain.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduce]);

  const togglePlay = useCallback(() => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }, []);

  const toggleMute = useCallback(() => {
    const video = ref.current;
    if (!video) return;

    const wasPlaying = !video.paused;
    video.muted = !video.muted;
    setMuted(video.muted);

    // Turning sound on can trip the browser's autoplay policy and pause the
    // clip. The toggle is a user gesture, so resuming here is permitted and
    // keeps "unmute" from reading as "stop".
    if (wasPlaying && video.paused) video.play().catch(() => {});
  }, []);

  const seek = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const video = ref.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = (Number(event.target.value) / 100) * video.duration;
  }, []);

  const fullscreen = useCallback(() => {
    ref.current?.requestFullscreen?.().catch(() => {});
  }, []);

  return (
    // z-20 keeps the controls above the card's stretched title link, whose
    // ::after covers the whole card. Without it every click on play, mute or
    // the scrubber navigated to the project instead.
    <figure className={`group/vid relative z-20 ${className}`}>
      <div className="relative w-full overflow-hidden rounded-lg bg-surface">
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            setCurrent(v.currentTime);
            if (v.duration) setProgress((v.currentTime / v.duration) * 100);
          }}
          className="block w-full cursor-pointer"
        />
      </div>

      {/* Controls. Words rather than glyphs, so each one says what the next
          click will do. */}
      <figcaption className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          onClick={togglePlay}
          className="w-[3.4rem] text-left text-[14px] font-medium text-muted transition-colors hover:text-ink"
        >
          {playing ? "Pause" : "Play"}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-pressed={!muted}
          className={`w-[4.6rem] text-left text-[14px] font-medium transition-colors ${
            muted ? "text-faint" : "text-accent"
          }`}
        >
          {muted ? "Unmute" : "Sound on"}
        </button>

        <label className="flex flex-1 items-center gap-2">
          <span className="sr-only">Seek through {label}</span>
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={seek}
            className="h-1 w-full min-w-[6rem] cursor-pointer appearance-none rounded-full bg-line accent-accent"
          />
        </label>

        <span className="tabular font-mono text-[11px] text-faint">
          {clock(current)} / {clock(duration)}
        </span>

        <button
          type="button"
          onClick={fullscreen}
          className="text-[14px] font-medium text-muted transition-colors hover:text-ink"
        >
          Full screen
        </button>
      </figcaption>
    </figure>
  );
}
