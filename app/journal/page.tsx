import React from "react";
import Journal from "./journal-components/Journal";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full min-h-720 h-auto pt-15">
      <div className="w-full h-140 pl-12 pr-12">
        <img src="/assets/ticket.png" alt="" className="w-full" />
      </div>
      <div className="min-h-487.5 space-y-10 px-5 pt-20 pb-10">
        <h1 className="custom-text text-[40px] text-center">Latest articles</h1>

        <div className="h-437.5 space-x-4 space-y-10 pb-30 flex flex-wrap justify-center">
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog1.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog2.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog2.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog2.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
          <Journal
            title="How to Build a Climate-Ready Data Stack"
            image="/assets/blog2.png"
            insights={true}
            min="4"
            text="A practical guide for sustainability teams on integrating emissions, waste, and energy data into modern workflows."
          />
        </div>
      </div>

      <div className="w-full h-90 px-5 py-30 flex flex-col items-center justify-center gap-8 bg-[#F6F8FB]">
        <h1 className="text-[40px] primary-font custom-text">
          Subscribe to Aetherfield Journal
        </h1>

        <button
          className="px-4 py-4 w-53.5 h-11.5 font-semibold bg-black text-white flex items-center gap-2.5"
          style={{ wordSpacing: "4px" }}
        >
          <div className="w-1 h-1 bg-white"></div>
          <h1>Sign up to newsletter</h1>
        </button>
      </div>
    </main>
  );
}
