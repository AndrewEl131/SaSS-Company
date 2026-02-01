import React from "react";

type MenuListProps = {
    title: string;
    number: string;
    paragraph: string
}

export default function FeaturesMenu({title, number, paragraph}: MenuListProps) {
  return (
    <div className="w-full h-27 flex flex-col gap-2 py-5 border-b border-gray-300">
      <div className="w-full flex justify-between">
        <h1 className="text-[20px] font-semibold">{title}</h1>
        <h1 className="text-[#6C6C6C] secondary-font">{number}</h1>
      </div>
      <h1 className="text-[20px] secondary-font">
        {paragraph}
      </h1>
    </div>
  );
}
