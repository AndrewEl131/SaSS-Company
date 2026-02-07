import React from "react";
import Image from "next/image";

type journalProps = {
  image: string;
  title: string;
  insights: boolean;
  min: string;
  text: string;
};

export default function Journal({ title, insights, image, min, text }: journalProps) {
  return (
    <div className="min-w-153 max-w-[48.5%] h-123 space-y-5">
      <img src={image} alt="" className="w-full h-90" />
      <div className="w-full h-28.5 space-y-6">
        <div className="w-full h-10.5 space-y-2">
          <h1 className="text-[20px] primary-font tracking-[-3%]">
            How to Build a Climate-Ready Data Stack
          </h1>
          <h1 className="text-gray-500 text-[14px] flex items-center gap-2">
            {insights ? "insights" : "Strategy"}
            <div className="bg-gray-500 w-0.5 h-0.5"></div> {min} min
          </h1>
        </div>

        <div className="w-full">
            <p className="secondary-font text-[20px] leading-[120%] tracking-[-4%]">{text}</p>
        </div>
      </div>
    </div>
  );
}
