"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";

const Slideshow: React.FC = ({}) => {
  const [curItem, setCurItem] = useState("item1");
  const [scrollX, setScrollX] = useState(0);
  const slideshowRef = useRef<null | HTMLDivElement>(null);

  const handleScrollX = () => {
    // Update the scrollX position whenever a scroll event occurs
    setScrollX(slideshowRef.current?.scrollLeft || 0);
    if (scrollX >= (5 * window.innerWidth) / 2) {
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
    <div className="bg-neutral-900 w-full min-h-[80vh]">
      <div className="flex justify-center w-full py-6 gap-16">
        <a
          href="#item1"
          className={
            "rounded-full w-8 h-8" +
            (curItem === "item1" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item2"
          className={
            "rounded-full w-8 h-8" +
            (curItem === "item2" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item3"
          className={
            "rounded-full w-8 h-8" +
            (curItem === "item3" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item4"
          className={
            "rounded-full w-8 h-8" +
            (curItem === "item4" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
      </div>
      <div
        ref={slideshowRef}
        onScroll={handleScrollX}
        className="carousel w-full bg-blue-dark"
      >
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
