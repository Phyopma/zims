"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Event from "@/app/components/UI/Event";

const Slideshow: React.FC = ({}) => {
  const [curItem, setCurItem] = useState("item1");
  const [scrollX, setScrollX] = useState(0);
  const slideshowRef = useRef<null | HTMLDivElement>(null);
  const numberOfItems = 3;

  const handleScrollX = () => {
    // Update the scrollX position whenever a scroll event occurs
    setScrollX(slideshowRef.current?.scrollLeft || 0);
    if (scrollX >= (7 * window.innerWidth) / 2) {
      setCurItem("item5");
    } else if (scrollX >= (5 * window.innerWidth) / 2) {
      setCurItem("item4");
    } else if (scrollX >= (3 * window.innerWidth) / 2) {
      setCurItem("item3");
    } else if (scrollX >= window.innerWidth / 2) {
      setCurItem("item2");
    } else {
      setCurItem("item1");
    }
  };

  return (
    <div className="h-full w-full bg-neutral-900">
      <div className="flex w-full justify-center gap-12 py-6">
        {Array.from({ length: numberOfItems }, (_, index) => (
          <a
            key={`item${index + 1}`}
            href={`#item${index + 1}`}
            className={`h-5 w-5 rounded-full ${
              curItem === `item${index + 1}` ? "bg-yellow" : "bg-neutral-600"
            }`}
          ></a>
        ))}
      </div>
      <div
        ref={slideshowRef}
        onScroll={handleScrollX}
        className="carousel min-h-[70vh] w-full overflow-y-clip"
      >
        <div id="item1" className="carousel-item w-full">
          <Event
            headline="UAVs’ RC Squadron"
            body="UAVs@UCI is proud to partner up with UAV Forge, a senior design project team program specializing in competition autonomous drones to co-host a drone project program open for members of any RC-flying experience levels to build and fly their first UAV! 
            "
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Event
            headline="Budget-Friendly Plans"
            body="Open discussions for financial plans allow members to find their sweet spot in a budget-friendly entrance into the hobby of RC flying!"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Event
            headline="UAV Flight Sesh"
            body="UAV at UCI looks to host more in-depth inquiries on the electrical and computer engineering skill sets required to assemble, maintain, and service the delicate machinery necessary to properly operate an long-range, autonomous drone capable of performing advanced maneuvers such as GPS-tracking, obstacle-avoiding, and target recognition. Members of the sub-program will receive recommendations and advancements to join the UAV Forge team."
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
