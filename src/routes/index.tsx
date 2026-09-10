import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { Financing } from "@/components/home/financing";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Services } from "@/components/home/services";
import { Socials } from "@/components/home/socials";
import { Visit } from "@/components/home/visit";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <GalleryPreview />
      <Financing />
      <Socials />
      <Faq />
      <Visit />
    </>
  );
}
