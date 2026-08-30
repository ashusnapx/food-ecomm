import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Certifications } from "@/components/sections/Certifications";
import { Github } from "@/components/sections/Github";
import { Hackathons } from "@/components/sections/Hackathons";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Notes } from "@/components/sections/Notes";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Writing } from "@/components/sections/Writing";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Notes />
        <Work />
        <Hackathons />
        <Certifications />
        <Stack />
        <Journey />
        <Github />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
