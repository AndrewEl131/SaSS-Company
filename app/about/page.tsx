import React from "react";
import Image from "next/image";
import ValueContainer from "../HomeComponents/ValueContainer";
import { founders } from "@/FounderDummyData";

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
        <h1 className="text-[40px] text-center custom-text primary-font">
          Our Values
        </h1>

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
      <div className="w-full h-205 flex justify-center items-center gap-4 px-5 pt-0 pb-30">
        <div className="w-185 h-190 relative">
          <Image
            src={"/assets/about-img.png"}
            fill
            alt="img"
            className="object-cover"
          />
        </div>

        <div className="w-153 flex flex-col gap-10 px-10">
          <div className="space-y-2">
            <h1 className="secondary-font text-gray-400 text-[20px]">
              Founder's Story
            </h1>
            <h1 className="primary-font text-[56px] font-medium">Eunji Park</h1>
          </div>

          <p className="w-100.5 h-42 text-left secondary-font font-normal text-[20px] leading-[120%] tracking-[-4%]">
            Eunji founded Aetherfield with one goal: to help companies take
            climate action without waiting for a perfect plan. With a background
            in environmental systems and software design, she’s spent the past
            decade building tools that turn impact goals into real-world
            outcomes. She still insists on biking to every investor meeting.
          </p>
        </div>
      </div>
      {/* Team Section */}
      <div className="w-full h-261 flex flex-col gap-16 min-[2460px]:px-[20vmin] px-15 py-30 bg-[#F6F8FB]">
        <h1 className="primary-font font-medium custom-font text-[56px]">
          Meet the team
        </h1>

        <div className="w-full h-171 flex flex-col gap-2.5">
        <div className="w-full flex flex-row items-center secondary-font text-[14px] leading-[100%] tracking-[0%] font-normal">
          <div className="w-full flex flex-row gap-110">
            <h1>Name</h1>
            <h1>Title</h1>
          </div>

          <h1 className="ml-auto">Contact</h1>
        </div>
        {founders.map((founder) => (
          <div className="w-full flex text-[20px] py-2 border-b border-gray-200">
            <div className="w-120">
              <h1 className="font-bold text-black">{founder.name}</h1>
            </div>

            <div className="flex-1">
              <h1 className="secondary-font font-normal leading-[115%] tracking-[-4%]">{founder.title}</h1>
            </div>

            <div className="ml-auto">
              <h1 className="text-right secondary-font underline font-normal leading-[115%] tracking-[-4%]">{founder.Contact}</h1>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="w-full h-90 px-5 py-30 flex flex-col items-center justify-center gap-8 bg-[#F6F8FB]">
        <h1 className="text-[40px] primary-font custom-text">
          We’re hiring! Want to join the team?
        </h1>

        <button
          className="px-4 py-4 w-43 h-11.5 font-semibold bg-black text-white flex items-center gap-2.5"
          style={{ wordSpacing: "4px" }}
        >
          <div className="w-1 h-1 bg-white"></div>
          <h1>View open roles</h1>
        </button>
      </div>
    </main>
  );
}
