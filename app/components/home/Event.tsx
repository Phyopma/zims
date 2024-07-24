import React, { ReactNode } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface EventProps {
  headline: string;
  body: ReactNode;
  img?: string | StaticImageData;
}

const Event = ({ headline, body, img }: EventProps) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {img && (
        <div className="absolute inset-0 z-0 flex justify-center">
          <Image
            src={img}
            alt={img}
            objectFit="contain"
            height={1900}
            className="opacity-30"
          />
        </div>
      )}
      <div className="relative z-10 text-center">
        <p className="relative mx-auto w-[70%] px-14 pt-2 font-display text-9xl">
          {headline}
        </p>
        {body}
      </div>
    </div>
  );
};

export default Event;
