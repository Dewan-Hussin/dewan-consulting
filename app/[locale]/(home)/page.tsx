import OurCompany from "@/app/features/home/components/OurCompany";
import HeroSection from "@/app/features/home/components/HeroSection";
import { getTranslations } from "next-intl/server";
import AboutUs from "@/app/features/home/components/AboutUs";
import ServicesSection from "@/app/features/home/components/ServicesSection";
import ContactUs from "@/app/features/home/components/ContactUs";
import ProductsSection from "@/app/features/home/components/ProductsSection";

export default async function HomePage() {
  // const t = await getTranslations("HomePage");

  return (
    <>
      <main className={""}>
        <HeroSection />
        <OurCompany />
        <AboutUs />
        <ServicesSection />
        <ProductsSection />
        {/* <ContactUs /> */}
      </main>
    </>
  );
}
