"use client";
import React from "react";
import MakerSpaceHeader from "./makerspace-header";
import HDRDisplay from "./hdr-display";
import useWindowWidth from "../hooks/useWindowWidth";
import { Alert } from "react-daisyui";

export default function MainScreen() {
  const windowWidth = useWindowWidth();
  const mobileWidthThreshold = 768; // Define mobile width threshold, e.g., 768px

  return (
    <div className="relative inset-0 h-[750px] w-full overflow-hidden bg-blue-dark scrollbar-none">
      {windowWidth < mobileWidthThreshold && (
        <Alert className="absolute z-10 mt-20 w-full rounded-none bg-primary p-2 text-primary-content">
          <span className="text-center font-semibold text-red">
            Warning: This page is not working properly on mobile devices!
          </span>
        </Alert>
      )}
      <MakerSpaceHeader />
      <HDRDisplay />
    </div>
  );
}
