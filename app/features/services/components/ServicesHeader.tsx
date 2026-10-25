import React from "react";
import Reveal from "../../../../components/shared/Reveal";
import { SectionEyebrow } from "../../../../components/shared/SectionEyebrow";

export default function ServicesHeader() {
  return (
    <>
      {/* Page Header */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionEyebrow
              index="OUR EXPERTISE"
              label="Services"
              className="justify-center text-xs tracking-[0.2em]"
            />
          </Reveal>

          {/* <Reveal delay={80} className="mt-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-main sm:text-5xl lg:text-6xl">
              Solutions designed
              <span className="block text-main/55">around your business.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-6">
            <p className="mx-auto max-w-2xl text-base leading-8 text-main/65 sm:text-lg">
              We deliver tailored technology and business solutions that
              streamline operations, support digital transformation, and help
              organizations achieve sustainable growth.
            </p>
          </Reveal> */}
        </div>
      </header>
    </>
  );
}
