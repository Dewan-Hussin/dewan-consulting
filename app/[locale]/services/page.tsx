import Reveal from "@/app/features/about/components/Reveal";
import { SectionEyebrow } from "@/app/features/about/components/SectionEyebrow";
import React from "react";

export default function ServicesPage() {
  return (
    <main>
      {/* header */}
      <header className="relative min-h-svh w-full overflow-hidden bg-second/50 py-32 space-y-5">
        <Reveal className="text-main text-4xl text-center">
          <h2>Our Services</h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-main/70 sm:text-md text-center mx-auto">
            We deliver tailored technology solutions that streamline operations,
            drive digital transformation, and help businesses achieve
            sustainable growth.
          </p>
        </Reveal>
      </header>
    </main>
  );
}
