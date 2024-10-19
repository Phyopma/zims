"use client";
import React from "react";
import { ContainerScroll } from "../../components/UI/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-white py-20 text-center font-display text-[100px] font-normal leading-[97px]">
              <p>ZOTBotics’ Makerspace</p>
              <span className="text-white text-center font-display text-4xl font-normal leading-[39px]">
                By Anteaters. For Anteaters
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/makerspace/makerspace.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
