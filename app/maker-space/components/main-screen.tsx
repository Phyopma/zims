"use client";
import React from "react";
import MakerSpaceHeader from "./makerspace-header";
import HDRDisplay from "./hdr-display";
import useWindowWidth from "../hooks/useWindowWidth";
import { redirect } from "next/navigation";

export default function MainScreen() {
  const windowWidth = useWindowWidth();
  const mobileWidthThreshold = 768; // Define mobile width threshold, e.g., 768px

  if (windowWidth < mobileWidthThreshold) {
    // Display an alert and do not render the component if on mobile
    alert("This page is not available on mobile devices.");
    redirect("/"); // Redirect to the home page
  }
  return (
    <div className="scrollbar-none relative inset-0 h-[730px] w-full overflow-y-hidden bg-blue-dark">
      <MakerSpaceHeader />
      <HDRDisplay />
    </div>
  );
}
