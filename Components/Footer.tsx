import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full md:min-h-147 min-h-95.25  bg-[#FFF546] px-5 md:py-5 pt-10 pb-5 space-y-5">
      <div className="w-full md:h-6 h-28.5 flex md:justify-between md:flex-row flex-col md:items-center">
        <ul className="md:w-120 w-full h-full flex md:flex-nowrap flex-wrap justify-center md:gap-5 gap-4">
          <li className="w-17.5 h-5 footer-link">Product</li>
          <li className="w-17.5 h-5 footer-link">Journal</li>
          <li className="w-17.5 h-5 footer-link">About</li>
          <li className="w-17.5 h-5 footer-link">Careers</li>
          <li className="md:w-45 h-5 footer-link">Get Started</li>
        </ul>

        <h1 className="copyright">© 2025 · All rights reserved</h1>
      </div>

      <div className="w-full md:h-70 h-30 footer-bg"></div>

      <div className="w-full h-auto px-0 py-0">
        <Image src={"/assets/big-logo.png"} width={1000} height={208} className="w-full h-auto" alt="" />
      </div>
    </footer>
  );
}
