"use client";

import { memo, useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SectionCard = () => {
  //   useEffect(() => {
  //     const all = document.querySelectorAll(".spotlight-card");

  //     const handleMouseMove = (ev: MouseEvent) => {
  //       all.forEach((e) => {
  //         const blob = e.querySelector(".blob") as HTMLElement;
  //         const fblob = e.querySelector(".fake-blob") as HTMLElement;

  //         if (!blob || !fblob) return;

  //         const rec = fblob.getBoundingClientRect();

  //         blob.style.opacity = "1";

  //         blob.animate(
  //           [
  //             {
  //               transform: `translate(${
  //                 ev.clientX - rec.left - rec.width / 2
  //               }px, ${ev.clientY - rec.top - rec.height / 2}px)`,
  //             },
  //           ],
  //           {
  //             duration: 300,
  //             fill: "forwards",
  //           },
  //         );
  //       });
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <div className="h-max w-max mx-auto">
      <div className="spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out">
        <Card
          className={cn(
            "text-center text-main bg-second/10 max-w-80 ring-0 transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px]",
            "group-hover:scale-[105%]",
          )}
        >
          <div
            className={cn(
              "absolute left-0 top-0 bg-second h-full duration-300",
              "w-1/2 transform -translate-x-100",
              "group-hover:translate-x-0",
            )}
          ></div>
          <div
            className={cn(
              "absolute right-0 top-0 bg-second h-full duration-300",
              "w-1/2 transform translate-x-100",
              "group-hover:translate-x-0",
            )}
          ></div>
          <CardHeader className="z-10">
            <CardTitle className="">Payroll Outsourcing</CardTitle>
          </CardHeader>
          <CardContent className="z-10">
            Tired of doing all the tiring, time consuming salary calculations
            every month! Through our Outsourcing service we will remove this
            burden off your shoulders.
          </CardContent>
          <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch z-10 bg-second/10 border-none">
            <Button className="cursor-pointer bg-main text-xs hover:bg-main/90 ">Explore More</Button>
          </CardFooter>
        </Card>
        {/* <div className="blob absolute top-0 left-0 size-20 rounded-full  bg-green-600/60 opacity-0 blur-2xl transition-all duration-300 ease-in-out " /> */}
        {/* <div className="fake-blob absolute top-0 left-0 size-20 rounded-full" /> */}
      </div>
    </div>
  );
};

export default memo(SectionCard);
