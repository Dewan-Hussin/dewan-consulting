import OurTeamCard, {
  type TeamMember,
} from "@/app/features/about/components/OurTeamCard";
import Reveal from "@/components/shared/Reveal";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const ourTeamMembers: TeamMember[] = [
  {
    id: 1,
    title: "General Manager",
    subTitle: "Eng.",
    firstName: "Hany",
    lastName: "El-Tarhony",
    description:
      "Leading the company with strategic vision and professional expertise.",
    image: undefined,
    contactDetails: {
      phone: "0123456789",
      email: "hany@dewan-eg.com",
    },
  },

  // Other Team Members
  {
    id: 2,
    title: "Office Manager",
    subTitle: "Mr.",
    firstName: "Salah",
    lastName: "Nour",
    description: "Oversees daily business operations",
    contactDetails: {
      phone: "0123456789",
      email: "salah@dewan-eg.com",
    },
  },
  {
    id: 3,
    title: "Project Manager",
    subTitle: "Eng.",
    firstName: "Ahmed",
    lastName: "ElBadawy",
    description: "Responsible for managing projects and operations.",
    contactDetails: {
      phone: "0123456789",
      email: "ahmed@dewan-eg.com",
    },
  },
  {
    id: 4,
    title: "HR Manager",
    subTitle: "Mr.",
    firstName: "Karim",
    lastName: "Khaled",
    description: "Managing human resources and organizational development.",
    contactDetails: {
      phone: "0123456789",
      email: "karim@dewan-eg.com",
    },
  },
  {
    id: 5,
    title: "Backend Developer",
    subTitle: "Eng.",
    firstName: "Hussien",
    lastName: "Khaled",
    description: "Backend Developer",
    contactDetails: {
      phone: "0123456789",
      email: "hussien@dewan-eg.com",
    },
  },
  {
    id: 6,
    title: "Frontend Developer",
    subTitle: "Eng.",
    firstName: "Yehia",
    lastName: "Zakaria",
    description: "Frontend Developer",
    contactDetails: {
      phone: "01206962954",
      email: "yehia@dewan-eg.com",
    },
  },
];

export default function OurTeamPage() {
  const manager = ourTeamMembers[0];
  const teamMembers = ourTeamMembers.slice(1);

  return (
    <main className="bg-second">
      <section className="relative  py-25 min-h-svh w-full overflow-hidden bg-second/50 text-main/50 dark:bg-background dark:text-white/50">
        <div className="relative mx-auto flex max-w-7xl flex-col space-y-16 px-4 pb-10 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="flex flex-col gap-7">
            <Reveal>
              <SectionEyebrow index="" label="Our Team" />
            </Reveal>

            <Reveal delay={90}>
              <h1 className="max-w-xl text-balance text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
                Meet the{" "}
                <span className="text-main dark:text-white">Dewan Team</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Meet the professionals behind Dewan Consulting. Our team brings
                together expertise, dedication, and a shared commitment to
                delivering excellence.
              </p>
            </Reveal>
          </header>

          {/* Team Members */}
          <section className="space-y-12 rounded-3xl border border-main/10 bg-white/40 p-5 sm:p-8 lg:p-10">
            {/* Leadership */}
            {manager && (
              <Reveal delay={170}>
                <div className="space-y-5">
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-main dark:text-white">
                      Leadership
                    </p>

                    <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-main/50 dark:bg-white" />
                  </div>

                  <OurTeamCard member={manager} featured />
                </div>
              </Reveal>
            )}

            {/* Team Grid */}
            {teamMembers.length > 0 && (
              <div className="space-y-6">
                <Reveal delay={220}>
                  <div className="flex items-center gap-4">
                    <h2 className="shrink-0 text-lg font-bold text-main dark:text-white sm:text-xl">
                      Our Professionals
                    </h2>

                    <div className="h-px flex-1 bg-main/15" />

                    <span className="text-xs font-medium text-main/80 dark:dark:text-white/80 ">
                      {teamMembers.length} Members
                    </span>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  items-stretch">
                  {teamMembers.map((member, index) => (
                    <Reveal key={member.id} delay={250 + index * 80}>
                      <OurTeamCard member={member} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
