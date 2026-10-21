"use client";

import { memo } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ServicesCard } from "../types/servicesSec.types";

type Props = {
  cardData: ServicesCard;
};

const SectionCard = ({ cardData }: Props) => {
  return (
    <div className="group w-full min-w-0 cursor-pointer">
      <div
        className={cn(
          "spotlight-card relative h-full overflow-hidden rounded-xl",
          " p-px",
          "transition-all duration-300 ease-in-out",
        )}
      >
        {/* Hover background */}
        <div className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-main transition-transform duration-300 group-hover:translate-x-0" />

        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-full bg-main transition-transform duration-300 group-hover:translate-x-0" />

        <Card
          className={cn(
            "relative z-10 flex h-full flex-col overflow-hidden",
            "border-0 bg-second/10 text-main shadow-none",
            "transition-all duration-300 ease-in-out",
            "group-hover:scale-[1.01]",
            "group-hover:backdrop-blur-[20px]",
            "",

          )}
        >
          <CardHeader className="shrink-0 px-5 pb-3 pt-6">
            <CardTitle className="text-lg font-bold leading-snug group-hover:text-white duration-300 transition-all text-center">
              {cardData.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="min-h-0 flex-1 overflow-y-auto px-5 pb-4 text-main/70 group-hover:text-white/70 duration-300 transition-all text-center">
            <p className="whitespace-pre-line wrap-break-word text-sm leading-7 ">
              {cardData.description}
            </p>
          </CardContent>
{/* 
          <CardFooter className="mt-auto shrink-0 border-t border-main/10 bg-second/10 p-4">
            <Button className="w-full cursor-pointer bg-main text-xs text-white hover:bg-main/90">
              Explore More
            </Button>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default memo(SectionCard);
