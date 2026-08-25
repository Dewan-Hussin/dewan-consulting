import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <section className={"py-10"}>
        {t("title")}
        {/* HeroSection */}
      </section>
    </>
  );
}
