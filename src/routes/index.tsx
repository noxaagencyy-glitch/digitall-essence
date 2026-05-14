import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/noxa/Nav";
import { Hero } from "@/components/noxa/Hero";
import { Services } from "@/components/noxa/Services";
import { Portfolio } from "@/components/noxa/Portfolio";
import { WhyUs } from "@/components/noxa/WhyUs";
import { Testimonials } from "@/components/noxa/Testimonials";
import { Process } from "@/components/noxa/Process";
import { FAQ } from "@/components/noxa/FAQ";
import { Contact } from "@/components/noxa/Contact";
import { Footer } from "@/components/noxa/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOXA Agency — Premium Web Design & Digital Experiences" },
      { name: "description", content: "Construim experiențe digitale moderne. Web design premium, branding, AI și platforme luxury pentru brand-urile ambițioase." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
