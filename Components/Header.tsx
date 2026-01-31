import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-15 flex justify-between items-center px-5">
      <div>
        <Link href={"/"}>
          <Image src={"/assets/Logo.png"} width={120} height={90} alt="logo" />
        </Link>
      </div>

      <ul className="w-105 h-5 flex items-center gap-5">
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
    </header>
  );
}
