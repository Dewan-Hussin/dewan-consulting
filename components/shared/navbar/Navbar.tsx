"use client";

import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
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
    children: [
      {
        href: "/services/payroll-outsourcing",
        label: "Payroll Outsourcing",
      },
      {
        href: "/services/project-management",
        label: "Project Management",
      },
      {
        href: "/services/implementation-project-audit",
        label: "Implementation Project Audit",
      },
      {
        href: "/services/tailored-project-development",
        label: "Tailored Project Development",
      },
    ],
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesActive = isActive("/services");

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-main/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-white/15">
                <Image
                  src="/images/navbar/logo.png"
                  width={28}
                  height={28}
                  alt="Dewan Consulting"
                  className="h-7 w-7 object-contain"
                />
              </div>

              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight text-white">
                  Dewan Consulting
                </span>

                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Consulting & Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 rounded-2xl bg-white/4 p-1 ring-1 ring-white/6">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                          className={cn(
                            "relative h-10 gap-1.5 rounded-xl px-4",
                            "text-sm font-medium text-white/75",
                            "hover:bg-white/[0.07] hover:text-white",
                            "transition-all duration-200",
                            servicesActive && "bg-white/9 text-white",
                          )}
                        >
                          {link.label}

                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-200",
                              isServicesOpen && "rotate-180",
                            )}
                          />

                          {servicesActive && (
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-second" />
                          )}
                        </Button>

                        {/* Dropdown */}
                        <div
                          className={cn(
                            "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3",
                            "transition-all duration-200",
                            isServicesOpen
                              ? "visible translate-y-0 opacity-100"
                              : "invisible -translate-y-2 opacity-0 pointer-events-none",
                          )}
                        >
                          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-[#1e1e1e]">
                            <div className="px-3 pb-2 pt-1">
                              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-white/40">
                                Our Services
                              </p>
                            </div>

                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsServicesOpen(false)}
                                className={cn(
                                  "group/item flex items-center justify-between rounded-lg px-3 py-3",
                                  "text-sm font-medium",
                                  "transition-all duration-200",
                                  isActive(child.href)
                                    ? "bg-main/5 text-main dark:bg-white/8 dark:text-white"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-main dark:text-white/70 dark:hover:bg-white/8 dark:hover:text-white",
                                )}
                              >
                                <span>{child.label}</span>

                                <ChevronRight
                                  className={cn(
                                    "h-4 w-4 opacity-0 -translate-x-1",
                                    "transition-all duration-200",
                                    "group-hover/item:translate-x-0",
                                    "group-hover/item:opacity-100",
                                    isActive(child.href) &&
                                      "translate-x-0 opacity-100",
                                  )}
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative flex h-10 items-center rounded-xl px-4",
                        "text-sm font-medium",
                        "transition-all duration-200",
                        isActive(link.href)
                          ? "bg-white/9 text-white"
                          : "text-white/75 hover:bg-white/[0.07] hover:text-white",
                      )}
                    >
                      {link.label}

                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-second" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={isMenu ? "Close menu" : "Open menu"}
                aria-expanded={isMenu}
                onClick={() => setIsMenu((prev) => !prev)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl lg:hidden",
                  "text-white/80 ring-1 ring-white/10",
                  "transition-all duration-200",
                  "hover:bg-white/10 hover:text-white",
                )}
              >
                {isMenu ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "overflow-hidden lg:hidden",
              "transition-all duration-300 ease-out",
              isMenu ? "max-h-125 pb-4 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="border-t border-white/10 pt-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.href}>
                        <button
                          type="button"
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3",
                            "text-sm font-medium",
                            "transition-colors duration-200",
                            servicesActive
                              ? "bg-white/10 text-white"
                              : "text-white/75 hover:bg-white/5 hover:text-white",
                          )}
                        >
                          <span>{link.label}</span>

                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isServicesOpen && "rotate-180",
                            )}
                          />
                        </button>

                        <div
                          className={cn(
                            "overflow-hidden pl-3",
                            "transition-all duration-200",
                            isServicesOpen
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0",
                          )}
                        >
                          <div className="mt-1 border-l border-white/10 pl-3">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => {
                                  setIsMenu(false);
                                  setIsServicesOpen(false);
                                }}
                                className={cn(
                                  "block rounded-lg px-3 py-2.5 text-sm",
                                  "transition-colors duration-200",
                                  isActive(child.href)
                                    ? "bg-white/10 font-medium text-white"
                                    : "text-white/60 hover:bg-white/5 hover:text-white",
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenu(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium",
                        "transition-colors duration-200",
                        isActive(link.href)
                          ? "bg-white/10 text-white"
                          : "text-white/75 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
