"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import testImg from "@/public/images/about-us/ourTeam/boss.webp";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: number;
  title: string;
  subTitle?: string;
  firstName: string;
  lastName: string;
  description?: string;
  image?: string;
  contactDetails?: {
    phone?: string;
    email?: string;
  };
}

interface OurTeamCardProps {
  member: TeamMember;
  featured?: boolean;
}

const OurTeamCard = ({ member, featured = false }: OurTeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const fullName = `${member.subTitle ? `${member.subTitle} ` : ""}${member.firstName} ${member.lastName}`;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isTouch || reducedMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 3;
        const rotateX = (0.5 - y) * 3;

        card.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-3px)
        `;
      });
    };

    const handleMouseLeave = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      card.style.transform = "";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const phone = member.contactDetails?.phone;
  const email = member.contactDetails?.email;

  return (
    <Card
      ref={cardRef}
      className={`
        group relative mx-auto w-full overflow-hidden
        rounded-2xl border border-main/80
        bg-white p-0 shadow-sm
        transition-[transform,box-shadow,border-color]
        duration-300 ease-out
        hover:border-main/25
        hover:shadow-xl hover:shadow-slate-900/10
        motion-reduce:transition-none
        h-full
        ${featured ? "max-w-md py-3" : "max-w-full"}
      `}
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-main" />

      <CardContent
        className={`
          flex items-center gap-4 p-4 pl-5
          sm:gap-6 sm:p-5 sm:pl-6
          ${featured ? "sm:gap-8 sm:p-6 sm:pl-7 flex-col text-center" : ""}

        `}
      >
        {/* Member Image */}
        <div
          className={`
            relative shrink-0 overflow-hidden rounded-xl
            bg-slate-100
            ${featured ? "w-full h-80" : "size-24 sm:size-28"}
          `}
        >
          <img
            src={member.image || testImg.src}
            alt={fullName}
            loading="lazy"
            className="
              size-full object-cover object-center
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Member Information */}
        <div className="min-w-0 flex-1">
          {/* Role */}
          <div
            className={cn(
              "mb-2 flex flex-wrap items-center gap-2",
              featured ? "justify-center" : "",
            )}
          >
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-main">
              <BriefcaseBusiness size={14} />
              {member.title}
            </span>

            {featured && (
              <span className="rounded-full bg-main/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-main">
                Leadership
              </span>
            )}
          </div>

          {/* Name */}
          <h3
            className={`
              font-bold tracking-tight text-slate-900
              ${featured ? "text-lg sm:text-2xl" : "text-base sm:text-lg"}
            `}
          >
            {fullName}
          </h3>

          {/* Description */}
          {member.description && (
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
              {member.description}
            </p>
          )}

          {/* Contact Details */}
          {(phone || email) && (
            <div
              className={cn(
                "mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3",
                featured ? "justify-center" : "",
              )}
            >
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group/contact inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-main"
                >
                  <Phone size={13} />
                  <span>{phone}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover/contact:opacity-100"
                  />
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group/contact inline-flex min-w-0 items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-main"
                >
                  <Mail size={13} className="shrink-0" />
                  <span className="truncate">{email}</span>
                  <ArrowUpRight
                    size={12}
                    className="shrink-0 opacity-0 transition-opacity group-hover/contact:opacity-100"
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OurTeamCard;
