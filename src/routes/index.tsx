import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/noxa/Nav";
import { About } from "@/components/noxa/About";
import { Comparison } from "@/components/noxa/Comparison";
import { Hero } from "@/components/noxa/Hero";
import { Services } from "@/components/noxa/Services";
import { Portfolio } from "@/components/noxa/Portfolio";
import { WhyUs } from "@/components/noxa/WhyUs";
import { Testimonials } from "@/components/noxa/Testimonials";
import { Process } from "@/components/noxa/Process";
import { FAQ } from "@/components/noxa/FAQ";
import { Contact } from "@/components/noxa/Contact";
import { Footer } from "@/components/noxa/Footer";
import { Reveal } from "@/components/noxa/Reveal";

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
    <main className="relative overflow-x-clip">
      <Nav />
      <Hero />
      <Reveal><Services /></Reveal>
      <Reveal direction="up"><About /></Reveal>
      <Comparison />
      <Reveal direction="scale"><Portfolio /></Reveal>
      <Reveal><WhyUs /></Reveal>
      <Reveal direction="left"><Testimonials /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal direction="right"><FAQ /></Reveal>
      <Reveal direction="scale"><Contact /></Reveal>
      <Reveal><Footer /></Reveal>
    </main>
  );
}
