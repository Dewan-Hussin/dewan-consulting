import Reveal from "@/components/shared/Reveal";
import PayrollOutsourcing from "@/app/features/services/components/service01/PayrollOutsourcing";

export default function PayrollOutsourcingPage() {
  return (
    <>
      {/* Service #01 */}
      <PayrollOutsourcing />

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
    </>
  );
}
