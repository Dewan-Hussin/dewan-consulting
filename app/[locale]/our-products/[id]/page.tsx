import { productsCard } from "@/app/api/products/productsRoute";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = productsCard.find((product) => product.id === id);

  return (
    <main className=" mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-second">
      <div>
        <p>{id}</p>
        <h3>{product?.title}</h3>
      </div>
    </main>
  );
}
