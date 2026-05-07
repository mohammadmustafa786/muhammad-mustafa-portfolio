import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Experience } from "@/components/Experience";
import { AuditCTA } from "@/components/AuditCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Experience />
      <Skills />
      <Tools />
      <Process />
      <Services />
      <CaseStudies />
      <Testimonials />
      <AuditCTA />
      <Contact />
      <Footer />
    </main>
  );
}
