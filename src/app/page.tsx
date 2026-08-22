import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Approach } from "@/components/sections/Approach";
import { Certifications } from "@/components/sections/Certifications";
import { Faq } from "@/components/sections/Faq";
import { Featured } from "@/components/sections/Featured";
import { Github } from "@/components/sections/Github";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Recognition } from "@/components/sections/Recognition";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { Writing } from "@/components/sections/Writing";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Approach />
        <Work />
        <Recognition />
        <Certifications />
        <Stack />
        <Journey />
        <Github />
        <Writing />
        <Featured />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
