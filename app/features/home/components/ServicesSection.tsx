"use client";
import { cn } from "@/lib/utils";
import SectionCard from "./SectionCard";
import { fetchServicesCard } from "../api/fetchServicesCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ServicesCardS } from "../types/servicesSec.types";

export default function ServicesSection() {
  const [servicesCards, setServicesCards] = useState<ServicesCardS>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchServicesCard();

      console.log("Fetched services:", data);

      setServicesCards(data.servicesCards);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    }
  };

  fetchData();
}, []);

  return (
    <>
      <section
        id="services"
        className={cn(
          "services-sec",
          "relative w-full overflow-hidden font-sans ",
          " bg-white ",
          "py-16",
          "",
        )}
      >
        <div
          className={cn(
            "space-y-10 ",
            "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          )}
        >
          <div
            className={cn(
              "services-content  text-center",
              "space-y-4",
              "w-1/2 py-5 mx-auto",
            )}
          >
            <h2 id="services-title">
              <span
                className={cn(
                  `block text-xl md:text-2xl text-main lg:text-4xl font-bold tracking-tight animate-in slide-in-from-bottom-8 duration-700 fade-in delay-15`,
                  "text-shadow-background ",
                  "",
                )}
              >
                Our Services
              </span>
            </h2>
            <p>
              <span className="text-main/60 font-semibold text-xs md:text-sm lg:text-md leading-relaxed max-w-2xl">
                Our Services are composed of: payroll outsourcing services,
                project management and implementation project audit, and
                Tailored Project Implementation.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-md  px-4 py-6 sm:grid-cols-2 lg:grid-cols-2">
            {(
              servicesCards.map((servicesCard) => (
                <SectionCard cardData={servicesCard} key={servicesCard.id} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
