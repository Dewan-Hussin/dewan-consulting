import * as rootParams from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Static for now, we'll change this later
  //   const store = await cookies();
  //   const locale = store.get("locale")?.value || "en";
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
