import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Contributions } from "@/components/sections/Contributions";
import { LeetCodeStats } from "@/components/sections/LeetCodeStats";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className='w-full overflow-hidden'>
      <ModeToggle />
      <Hero />
      <Work />
      <Contributions />
      <LeetCodeStats />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}
