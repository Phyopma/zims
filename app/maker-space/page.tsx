import React from "react";
import HDRDisplay from "./components/hdr-display";
import MakerSpaceHeader from "./components/makerspace-header";

export default function MakerSpacePage() {
  return (
    <div className="w-full bg-blue-dark">
      <MakerSpaceHeader />
      <div className="h-[700px] w-full">
        <HDRDisplay />
      </div>
    </div>
  );
}
