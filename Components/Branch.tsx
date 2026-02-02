"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import Image from "next/image";

export default function Badge() {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="cursor-grab active:cursor-grabbing absolute transform -translate-x-[100%]  "
      >
        <Image
          src="/icons/Sticker.png"
          width={300}
          height={300}
          alt="branch"
        />
      </div>
    </Draggable>
  );
}
