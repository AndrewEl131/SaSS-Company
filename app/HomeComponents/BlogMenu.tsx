import React from "react";
import Image from "next/image";

type BlogProps = {
  image: string;
  title: string;
  insights: boolean;
  min: string;
  borders: boolean;
};

export default function BlogMenu({ image, title, insights, min, borders }: BlogProps) {
  return (
    <div className={`w-full md:h-37 h-76.75 flex md:flex-row flex-col gap-4 md:py-5 lg:hover:ml-5 hover:text-gray-600 transition-colors duration-700 ${borders ? "border-t border-b border-gray-300" : ""}`}>
      <Image
        src={image}
        width={165}
        height={100}
        className="md:w-41.25 w-full md:h-25 h-50.75"
        alt="img"
        
      />
      <div className="md:w-109.75 w-full">
        <h1 className="text-[20px]">{title}</h1>
        <h1 className="text-gray-500 text-[14px] flex items-center gap-2">
          {insights ? "insights" : "Strategy"}{" "}
          <div className="bg-gray-500 w-0.5 h-0.5"></div> {min} min
        </h1>
      </div>
    </div>
  );
}
