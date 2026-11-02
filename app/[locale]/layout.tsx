import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";

import Navbar from "@/components/shared/navbar/Navbar";
import PalettePanel from "@/components/shared/palette/PalettePanel";
import { ThemeScript } from "@/components/shared/palette/ThemeScript";

const geist = localFont({
  src: [
    {
      path: "../../public/fonts/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Geist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-geist-local",
});

const cairo = localFont({
  src: [
    {
      path: "../../public/fonts/Cairo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cairo-local",
});

export const metadata: Metadata = {
  title: "Dewan Consulting",
  description:
    "Dewan consulting is a leading software company that is specialized in tailored software systems and outsourcing services for basic business functions such as payroll outsourcing services, project management services & implementation project audit, etc…",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geist.variable} ${cairo.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body
        className={cn(
          "h-full antialiased",
          locale === "ar" ? "font-cairo" : "font-sans",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <PalettePanel />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
