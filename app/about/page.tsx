import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <main className="w-full">
      {/* Intro Section */}
      <div className="w-full h-200 flex">
        <div className="w-[50vw] h-full relative">
          <Image
            src={"/assets/aboutIntro.png"}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-[50vw] h-full flex justify-center items-center">
          <div className="w-158 h-85.5 pl-16 pr-26.25 space-y-14">
            <div className="w-full space-y-4">
              <h1 className="secondary-font text-[20px] tracking-[-4%] leading-[100%] text-[#6C6C6C]">
                Our Mission
              </h1>
              <h1 className="text-[40px] primary-font custom-text font-medium">
                Climate action starts with better information. We help
                organizations turn complex data into measurable, meaningful
                change.
              </h1>
            </div>

            <div className="w-full">
              <button
                className="px-4 py-4 w-41 h-11.5 font-semibold bg-black text-white flex items-center gap-2"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Meet the team</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
