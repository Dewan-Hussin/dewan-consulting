"use client";
import { Product } from "@/app/api/products/productsRoute";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden",
        "border border-main/10 dark:border-white/10 bg-card p-0 shadow-sm",
        "transition-shadow duration-300 hover:shadow-lg",
      )}
    >
      {/* Product Image */}
      <CardContent className="relative aspect-video w-full overflow-hidden p-0">
        <Image
          loading="eager"
          src={product.imgUrl}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 dark:from-black/20 to-transparent opacity-80" />
      </CardContent>

      {/* Product Information */}
      <CardHeader className="flex-1 space-y-3 px-5 pt-5">
        <CardTitle className="line-clamp-1 text-lg font-bold text-main dark:text-white">
          {product.title}
        </CardTitle>

        <CardDescription className="line-clamp-3 min-h-18 text-sm leading-7">
          {product.description}
        </CardDescription>
      </CardHeader>

      {/* Actions */}
      <CardFooter className="flex items-center justify-center gap-3 px-5 pb-5 pt-2">
        {/* <Button className=""> */}
        <Link
          className={cn(
            buttonVariants({}),
            "flex items-center justify-center gap-2",
            "bg-main dark:bg-white hover:bg-main/80 dark:hover:bg-white/80  transition-colors duration-150 gap-2",
          )}
          href={`/our-products/${product.id}`}
        >
          Explore Product
          <ArrowRight
            className="transform group-hover:translate-x-1 transition-transform duration-300 "
            size={16}
          />
        </Link>
        {/* </Button> */}

        {product.pdfUrl && (
          <a
            href={product.pdfUrl}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex items-center justify-center gap-2",
              "gap-2 border-main/20 dark:border-white/20 text-main dark:text-white hover:bg-main dark:hover:bg-white hover:text-white dark:hover:text-main",
            )}
            download
          >
            <Download className="group-hover:animate-bounce" size={16} />
            Download Doc
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

export default memo(ProductCard);
