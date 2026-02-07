"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full h-15 flex justify-between items-center px-5">
      <div>
        <Link href={"/"}>
          <Image src={"/assets/Logo.png"} width={120} height={90} alt="logo" />
        </Link>
      </div>

      <ul className="md:w-105 w-full h-5 md:flex items-center gap-5 hidden">
        <li className="w-14.5 h-5 default-text">Product</li>
        <li className="w-14.5 h-5 default-text">Journal</li>
        <li className="w-14.5 h-5 default-text">About</li>
        <li className="w-14.5 h-5 default-text">Careers</li>
        <li className="w-30 h-5 flex gap-1 default-text">
          <span>Get Started</span>
          <Image
            src={"/icons/Arrow.png"}
            width={14}
            height={5}
            alt="arr"
            className="mt-1.5 hover:ml-1 duration-300"
          />
        </li>
      </ul>

      <div
        className="w-16 h-full lg:hidden flex justify-end items-center"
        onClick={() => setIsMenuOpen(true)}
      >
        <Image src={"/icons/plus.svg"} width={30} height={30} alt="plus" />
      </div>

      {isMenuOpen && (
        <div className="w-full h-90 absolute left-0 top-0 bg-white z-50 lg:hidden flex flex-col gap-3 px-3">
          <div className="w-full flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/assets/Logo.png"}
                width={120}
                height={90}
                alt="logo"
              />
            </Link>

            <div className="text-2xl" onClick={() => setIsMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 24 24"
              >
                <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
              </svg>
            </div>
          </div>
          <ul className="w-full">
            <li className="w-full h-5 text-[22px] primary-font pb-12 border-b border-gray-300">
              Product
            </li>
            <li className="w-full h-5 text-[22px] primary-font pb-12 border-b border-gray-300">
              Journal
            </li>
            <li className="w-full h-5 text-[22px] primary-font pb-12 border-b border-gray-300">
              About
            </li>
            <li className="w-full h-5 text-[22px] primary-font pb-12 border-b border-gray-300">
              Careers
            </li>
            <li className="w-full h-5 text-[22px] primary-font pb-12 border-b border-gray-300">
              Get Started
            </li>
          </ul>
          <button className=" w-full h-11.5 font-semibold bg-black text-white">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
