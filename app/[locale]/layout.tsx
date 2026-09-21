import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono, Inter } from "next/font/google";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ReactElement } from "react";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cairo",
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
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={cn(
          "h-full",
          "antialiased",
          locale === "ar" ? cairo.variable : inter.variable,
          locale === "en" && geistSans.variable,
          locale === "en" && geistMono.variable,
          locale === "ar" ? "font-cairo" : "font-sans",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
