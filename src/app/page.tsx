import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Certifications } from "@/components/sections/Certifications";
import { Faq } from "@/components/sections/Faq";
import { Github } from "@/components/sections/Github";
import { Hackathons } from "@/components/sections/Hackathons";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Proof } from "@/components/sections/Proof";
import { Spotlight } from "@/components/sections/Spotlight";
import { Stack } from "@/components/sections/Stack";
import { Tiers } from "@/components/sections/Tiers";
import { Work } from "@/components/sections/Work";

/**
 * Open on the claim, prove it small, show the work, go deep on one case, then
 * the evidence, then the ask.
 *
 * Backgrounds run as one day passing: the hero's blue sky, alternating pale
 * washes that walk the hue through cyan and violet to peach, and the footer's
 * dusk. Sections between washes stay white so the page breathes.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
        <Work />
        <Spotlight />
        <Hackathons />
        <Journey />
        <Stack />
        <Certifications />
        <Github />
        <Tiers />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
