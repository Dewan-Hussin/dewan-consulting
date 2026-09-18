import OurCompany from "@/app/features/home/components/OurCompany";
import HeroSection from "@/app/features/home/components/HeroSection";
import { getTranslations } from "next-intl/server";
import AboutUs from "@/app/features/home/components/AboutUs";

export default async function HomePage() {
  // const t = await getTranslations("HomePage");

  return (
    <>
      <main className={""}>
        <HeroSection />
        <OurCompany />
        <AboutUs />
      </main>
    </>
  );
}
