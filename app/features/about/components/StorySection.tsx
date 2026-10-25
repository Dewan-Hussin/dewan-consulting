import Image from "next/image";
import Reveal from "../../../../components/shared/Reveal";
import { SectionEyebrow } from "../../../../components/shared/SectionEyebrow";

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-second/50 text-main">
      <div className="mx-auto max-w-7xl px-4 py-20 pb-28 sm:px-6 md:py-28 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-12">
          {/* copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionEyebrow index="002" label="Our story" className="text-main" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A short history,{" "}
                <span className="text-main/80">typed in-house.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-main/70 sm:text-lg">
                <p>
                  Dewan Consulting started in 2000 with one payroll project
                  that everyone else had quietly stopped answering. We finished
                  it on time, then kept improving it long after the contract
                  ended — because payroll does not forgive.
                </p>
                <p className="text-main">
                  That habit became the company. Today we design, implement and
                  audit the systems companies run on every working day:
                  FreightAccount for shipping and logistics, time & attendance,
                  withholding tax, HR, project management and a full general
                  ledger.
                </p>
                <p>
                  We are deliberately small enough to keep names, not ticket
                  numbers, and deliberately senior enough that the person who
                  scopes the work is the one who builds it.
                </p>
              </div>
            </Reveal>
          </div>

          {/* visual collage */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="relative mb-14 sm:mb-16">
                <div className="overflow-hidden rounded-2xl shadow-lg shadow-main/50">
                  <Image
                    src="/images/about-us/about-us.jpg"
                    alt="The Dewan Consulting team reviewing a delivery on site"
                    width={640}
                    height={480}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>

                <figure className="absolute -bottom-14 inset-s-6 w-36 rotate-[-4deg] rounded-lg bg-main p-2 pb-4 shadow-xl shadow-main/50">
                  <div className="overflow-hidden rounded">
                    <Image
                      src="/images/about-us/aboutus.jpg"
                      alt="Field note: an early FreightAccount deployment"
                      width={480}
                      height={360}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <figcaption className="pt-2 text-center text-xs italic text-white/80">
                    Field note, 2012
                  </figcaption>
                </figure>

                <blockquote className="absolute -top-8 inset-e-0 max-w-[16rem] -rotate-2 rounded-lg bg-second p-5 text-main shadow-xl shadow-main ">
                  <p className="text-sm font-medium leading-relaxed">
                    “Any system that has to run on Monday at 8:02 is a Monday
                    system. We build those.”
                  </p>
                  <footer className="mt-3 text-xs text-main/70">
                    — the engineering team
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}