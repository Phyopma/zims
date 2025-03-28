import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  heading: string;
  image: StaticImageData;
  description: string;
}

const Card: React.FC<CardProps> = ({ heading, image, description }) => {
  return (
    <div className="card bg-blue-light rounded-lg max-w-[320px]">
      <div className="min-h-[10rem] bg-blue">
        <Image src={image} alt="Card Image" width={320} height={200} />
      </div>
      <div className="min-h-[250px] bg-neutral-500">
        <p className="font-display text-3xl pt-1">{heading}</p>
        <p className="font-body text-md p-2 px-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
