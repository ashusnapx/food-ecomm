export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="ruled grid min-h-[100dvh] place-items-center">
      <p className="hand text-3xl text-ink-faint">
        writing<span className="animate-caret">_</span>
      </p>
    </div>
  );
}
