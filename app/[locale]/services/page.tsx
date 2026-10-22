// "use client"

import Reveal from "@/app/features/about/components/Reveal";
import { SectionEyebrow } from "@/app/features/about/components/SectionEyebrow";
import PayrollOutsourcing from "@/app/features/services/components/PayrollOutsourcing";



export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-second/50 pt-32 pb-24 sm:pt-36 sm:pb-28">
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

          <Reveal delay={80} className="mt-6">
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
          </Reveal>
        </div>
      </header>

      <PayrollOutsourcing />

      {/* Paginations */}
      <section className="container mx-auto mt-20 px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className=" rounded-sm text-white flex gap-2 justify-center py-1">
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            1
          </button>
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            2
          </button>
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            3
          </button>
        </div>
      </section>
      {/* Closing Statement */}
      <section className="container mx-auto mt-20 px-4 sm:mt-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 border-t border-main/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-main">
                Built around your operational needs.
              </p>
              <p className="mt-2 text-sm leading-7 text-main/60">
                Our reporting can be adapted to fit your organizational
                structure and business requirements.
              </p>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-main/45">
              Dewan Consulting
            </span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
