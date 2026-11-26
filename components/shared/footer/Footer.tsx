"use client";
import { Link } from "@/i18n/navigation";
import { cn } from "cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Footer() {
  return (
    <footer
      className={cn(
        "footer relative w-full overflow-hidden font-sans",
        " py-20 md:py-24",
        "bg-white dark:bg-black ",
      )}
      aria-labelledby="footer"
    >
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-4",
          "sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8",
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/15">
            <Image
              src="/images/footer/logo-black.png"
              width={28}
              height={28}
              alt="Dewan Consulting"
              className="h-7 w-7 object-contain dark:hidden"
            />
            <Image
              src="/images/navbar/logo.png"
              width={28}
              height={28}
              alt="Dewan Consulting"
              className="h-7 w-7 object-contain hidden dark:block"
            />
          </div>

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight">
              Dewan Consulting
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-foreground/50">
              Consulting & Solutions
            </span>
          </div>
        </Link>

        <div className="details">Details</div>
      </div>
    </footer>
  );
}
