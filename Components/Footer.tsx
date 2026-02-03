import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full min-h-147  bg-[#FFF546] px-5 py-5 space-y-5">
      <div className="w-full h-6 flex justify-between items-center">
        <ul className="w-120 h-full flex gap-5">
          <li className="w-17.5 h-5 footer-link">Product</li>
          <li className="w-17.5 h-5 footer-link">Journal</li>
          <li className="w-17.5 h-5 footer-link">About</li>
          <li className="w-17.5 h-5 footer-link">Careers</li>
          <li className="w-45 h-5 footer-link">Get Started</li>
        </ul>

        <h1 className="copyright">© 2025 · All rights reserved</h1>
      </div>

      <div className="w-full h-70 footer-bg"></div>

      <div className="w-full h-auto px-0 py-0">
        <Image src={"/assets/big-logo.png"} width={1000} height={208} className="w-full h-auto" alt="" />
      </div>
    </footer>
  );
}
