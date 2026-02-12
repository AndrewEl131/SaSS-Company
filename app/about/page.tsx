import React from "react";
import Image from "next/image";
import ValueContainer from "../HomeComponents/ValueContainer";

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
                className="px-4 py-4 w-41 h-11.5 font-semibold bg-black text-white flex items-center gap-2 button-animate"
                style={{ wordSpacing: "6px" }}
              >
                <div className="w-1 h-1 bg-white"></div>
                <h1>Meet the team</h1>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full h-151.5 flex flex-col gap-10 px-5 pt-30 pb-40">
        <h1 className="text-[40px] text-center custom-text primary-font">Our Values</h1>

        <div className="w-full h-61.5 flex flex-row gap-4">
          <ValueContainer
            icon="/icons/Value.png"
            title="Clarity drives action"
            text="We believe better decisions start with better data—measured, visible, and trusted."
            bg={true}
          />
          <ValueContainer
            icon="/icons/Value2.png"
            title="Sustainability is a systems problem"
            text="We build tools that help teams connect the dots between operations, impact, and accountability."
            bg={true}
          />
          <ValueContainer
            icon="/icons/Value3.png"
            title="Progress over perfection"
            text="We support real-world momentum—helping organizations move from ambition to measurable change."
            bg={true}
          />
        </div>
      </div>
      {/* Founder story */}
      <div className="w-full h-205 flex flex-row gap-4 px-5 pt-0 pb-30">
        <div className="w-[50vw] h-full border relative">
          <Image src={"/assets/about-img.png"} fill alt="img" style={{objectFit: "cover"}}  />
        </div>
      </div>
    </main>
  );
}
