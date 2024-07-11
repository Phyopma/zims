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
            headline="UCI student chaper of SoCal’s public PEV community"
            body="PEVs at UCI is home to the massively growing community hub of UCI students inspired to rethink the way they move: faster, longer, cleaner, smaller. Founded on the thriving prospect of promoting the “movement”, PEVUCI welcomes all fellow Anteater to fun social events like group rides and race track sessions to celebrate the thrill of personal electric vehicles."
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Event
            headline="Group rides, Intro2Speed, and more!"
            body="From the beautiful landscapes that sculpt our hometown Irvine to even greater unexplored territories of off-campus events hosted by public communities of Southern California. "
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Event
            headline="PEVs’ Marketplace"
            body="In affiliating with ZOTBotics’ Network and by extension co-owning UCI’s first student-led makerspace, PEVUCI offers a ‘dealership’ and ‘mechanics shop’ for clients to offer their interest in a new electric vehicle to own for cheap and service for an electric vehicle to be inspected or repaired, respectively. 
"
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
