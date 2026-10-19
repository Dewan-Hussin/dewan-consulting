import OurCompany from "@/app/features/home/components/OurCompany";
import HeroSection from "@/app/features/home/components/HeroSection";
import { getTranslations } from "next-intl/server";
import AboutUs from "@/app/features/home/components/AboutUs";
import ServicesSection from "@/app/features/home/components/ServicesSection";

export default async function HomePage() {
  // const t = await getTranslations("HomePage");

  return (
    <>
      <main className={""}>
        <HeroSection />
        <OurCompany />
        <AboutUs />
        <ServicesSection />
      </main>
    </>
  );
}
