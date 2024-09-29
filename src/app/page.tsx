import { Internships, Hero, Projects, ContactForm, Skills } from "@/components";

export default function Home() {
  return (
    <div className="caret-primary">
      <Hero />
      <Internships />
      <Projects />
      <Skills />
    </div>
  );
}
