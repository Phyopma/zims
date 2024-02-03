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
    <div className="min-h-[70vh] w-full bg-neutral-900">
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
        className="carousel min-h-[60vh] w-full"
      >
        <div id="item1" className="carousel-item w-full">
          <Event
            headline="ZIT’s Makerspace Reserve"
            body="ZIT members will see to their hands-on project experience adequately aided by the Network-owned makerspace, ICFab and its abundance of tools and machinery. 
            ’
            "
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Event
            headline="Team Workshops"
            body="Recruited project members selected to their respective team and team mentor will see to a weekly meeting at ZOTBotics’ Makerspace where they work exclusively with the vast array of tools and equipment at their disposal for their assigned build challenge. 
            "
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Event
            headline="UAV Flight Sesh"
            body="Hosted on a biweekly basis at the green fields of the ARC, UAVs@UCI’s Flight Sesh welcomes hobbyists of the radio-controlled model aerial vehicles to take to the skies and enjoy with fellow pilots. Membership is not required, nor is possession or skill in an RC plane. All are welcome to sightsee or maybe try out one of our community planes or drones!
"
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
