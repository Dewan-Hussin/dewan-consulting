import { productsCard } from "@/app/api/products/productsRoute";
import Reveal from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Download,
  FileText,
} from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = productsCard.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-second px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-main">Product not found</h1>
          <p className="mt-3 text-sm text-gray-500">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/our-products"
            className={cn(
              buttonVariants(),
              "mt-6 bg-main text-white hover:bg-main/90",
            )}
          >
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const pdfUrl = product.pdfUrl;
  const hasPdf = Boolean(
    pdfUrl && (pdfUrl.startsWith("/") || /^https?:\/\//i.test(pdfUrl)),
  );

  return (
    <main className="min-h-screen bg-second dark:bg-[#1e1e1e] ">
      <div className="container mx-auto px-4 py-25 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/our-products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-main"
          >
            <ArrowLeft className="size-4" />
            Our Products
          </Link>
        </Reveal>

        {/* Product Hero */}
        <section className="mt-7 grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
          {/* Image */}
          <Reveal>
            <div className="group relative min-h-65 overflow-hidden rounded-xl border border-main/10 bg-white shadow-sm sm:min-h-85 lg:min-h-97.5">
              <Image
                src={product.imgUrl}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          {/* Intro */}
          <div className="flex flex-col justify-center py-2 lg:py-6">
            <Reveal delay={80}>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-main/60 dark:text-white/60">
                Our Products
              </span>

              <h1 className="mt-4 text-3xl font-bold leading-tight text-main dark:text-white sm:text-4xl lg:text-5xl">
                {product.title}
              </h1>

              <div className="mt-5 h-1 w-14 rounded-full bg-main/70 dark:bg-white/70" />

              <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
                {product.description}
              </p>
              {hasPdf && pdfUrl && (
                <div className="mt-6 flex gap-1">
                  <a
                    href={pdfUrl}
                    download
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "flex-1 border bg-main/90 border-main/10 text-white/90 hover:bg-main hover:text-white sm:flex-none",
                    )}
                  >
                    <Download className="mr-2 size-4" />
                    Download Doc
                  </a>
                  <a
                    href={product.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "flex-1 border border-main/80 dark:border-white/80 text-main dark:text-white hover:bg-main/5 dark:hover:bg-white/5 sm:flex-none",
                    )}
                  >
                    <FileText className="mr-2 size-4" />
                    View Doc
                  </a>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Sticky Actions */}
        <div className="sticky top-20 z-30 mt-8">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-main/10 bg-white/95 p-3 shadow-sm backdrop-blur-md sm:px-5">
            <p className="hidden text-sm font-semibold text-main sm:block">
              Explore our product
            </p>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
              <Link
                href="/our-products"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex-1 border-main/20 dark:border-main/80 bg-white dark:bg-transparent text-main hover:bg-main/5 dark:hover:text-main/80 sm:flex-none",
                )}
              >
                <ArrowLeft className="mr-2 size-4" />
                All Products
              </Link>

              <Link
                href="/contact-us"
                className={cn(
                  buttonVariants(),
                  "flex-1 bg-main text-white hover:bg-main/90 sm:flex-none",
                )}
              >
                Contact Us
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Product Overview */}
        {product.longDescription && (
          <Reveal delay={100}>
            <section className="mt-10 rounded-xl border border-main/10 dark:border-white/10  bg-white p-6 sm:p-8">
              <div className="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-main/50">
                    Introduction
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-main">Overview</h2>
                </div>

                <p className="text-sm leading-8 text-gray-600 sm:text-base">
                  {product.longDescription}
                </p>
              </div>
            </section>
          </Reveal>
        )}

        {/* Features */}
        {product.list && product.list.length > 0 && (
          <section className="mt-10 pb-12">
            <Reveal>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-main/50 dark:text-white/50">
                    Product Details
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-main dark:text-white/50">
                    {product.listTitle || "Key Features"}
                  </h2>
                </div>

                <span className="text-xs font-medium text-gray-500">
                  {product.list.length} items
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.list.map((item, index) => (
                <Reveal
                  key={`${product.id}-${index}`}
                  delay={Math.min(index * 30, 180)}
                >
                  <div className="flex h-full items-start gap-3 rounded-lg border border-main/10 bg-white p-4 transition-colors hover:border-main/25">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-main/5 text-xs font-semibold tabular-nums text-main">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-7 text-gray-600">
                      {item.trim()}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
