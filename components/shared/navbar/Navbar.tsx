"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <nav
          className={cn(
            " backdrop-blur-xs shadow-sm",
            " bg-navy-900 ",
            // "fixed"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo / Brand */}
              <div className="shrink-0 flex items-center gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-2  hover:opacity-80 transition-opacity"
                >
                  <div className=" p-2 rounded-lg">
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src="/images/navbar/logo.png"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />

                    {/* <FolderArchive className="h-6 w-6 text-[#223757]" /> */}
                  </div>
                  <span className="font-bold text-md hidden sm:block text-white tracking-tight ">
                    {"Dewan Consulting"}
                    {/* <span className="text-[#223757] font-medium">S</span> */}
                  </span>
                </Link>
              </div>
              {/* Navigation Links - Centered */}
              <div className="hidden lg:flex items-center justify-center flex-1 mx-8 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-white text-sm font-medium transition-all duration-200",
                      //   isActive(link.href)
                      //     ? "bg-slate-100 text-slate-900"
                      //     : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMenu(!isMenu)}
                  className="block lg:hidden"
                >
                  {!isMenu && <Menu color="white" />}
                  {isMenu && <X color="white" />}
                </button>

                {/* <LanguageSwitcher /> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
