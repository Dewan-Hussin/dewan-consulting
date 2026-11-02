import ServicesHeader from "@/app/features/services/components/ServicesHeader";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function ServicesLayout({ children }: Props) {
  return (
    <>
      <main className="overflow-hidden bg-second/50 pt-32 pb-24 sm:pt-36 sm:pb-28 dark:bg-background">
        {/* Header */}
        <ServicesHeader />
        {children}
      </main>
    </>
  );
}
