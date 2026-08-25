import HeroSection from "@/app/features/home/components/HeroSection";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <main className={"py-10"}>
        <HeroSection />
      </main>
    </>
  );
}
