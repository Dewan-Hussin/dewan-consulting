import React from "react";

export default function ServicesPagination() {
  return (
    <>
      {/* Paginations */}
      <section className="container mx-auto mt-20 px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className=" rounded-sm text-white flex gap-2 justify-center py-1">
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            1
          </button>
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            2
          </button>
          <button className="cursor-pointer rounded-md px-4 py-2 bg-main text-xs">
            3
          </button>
        </div>
      </section>
    </>
  );
}
