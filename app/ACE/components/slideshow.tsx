"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Event from "@/app/components/UI/Event";

const Slideshow: React.FC = ({}) => {
  const [curItem, setCurItem] = useState("item1");
  const [scrollX, setScrollX] = useState(0);
  const slideshowRef = useRef<null | HTMLDivElement>(null);
  const numberOfItems = 2;

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
            headline="ACE’s Combotics Battalion"
            body="ACE members are introduced to the more advanced aspects of materials science and engineering as the demands of combat robotics deem necessary: metal fabrication, enhanced plastics to 3D-print, mechanical stresses via melee impacts. The presence of competition ranging from local to international scales necessitate greater standards of computer-aided design, including simulations for stress-testing. 

            "
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Event
            headline="Defend and serve your campus!"
            body="Like real-life combat sports, combotics are divided into various weight class divisions incoming ACE project members with a 1-lb ‘antweight’ to design, fabricate, test, and prepare for in-house tournaments with neighboring teams. to other universities or local events. Subsequent completions of the antweight grants promotion to larger weight classes: 3-lb ‘beetleweight’ , 12-lb ‘hobbyweight’, and the pinnacle 250-lb ‘heavyweight’ to span from local events, college derbies, or to international, television show-running tournaments like Battlebots. "
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
