"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Event from "../../components/UI/Event";

const Slideshow: React.FC = ({}) => {
  const [curItem, setCurItem] = useState("item1");
  const [scrollX, setScrollX] = useState(0);
  const slideshowRef = useRef<null | HTMLDivElement>(null);

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
        <a
          href="#item1"
          className={
            "h-5 w-5 rounded-full" +
            (curItem === "item1" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item2"
          className={
            "h-5 w-5 rounded-full" +
            (curItem === "item2" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item3"
          className={
            "h-5 w-5 rounded-full" +
            (curItem === "item3" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item4"
          className={
            "h-5 w-5 rounded-full" +
            (curItem === "item4" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
        <a
          href="#item5"
          className={
            "h-5 w-5 rounded-full" +
            (curItem === "item5" ? " bg-yellow" : " bg-neutral-600")
          }
        ></a>
      </div>
      <div
        ref={slideshowRef}
        onScroll={handleScrollX}
        className="carousel min-h-[60vh] w-full"
      >
        <div id="item1" className="carousel-item w-full">
          <Event
            headline="General Meetings"
            body="ZIT, ACE, and UAVs all share 2 weekly general meetings presenting common topics on introductory robotics concepts like CAD, 3D printing, and basic electronics. Members will hear from veteran roboticists as they break down the best first steps into the hustle both on screen and on hand."
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
        <div id="item4" className="carousel-item w-full">
          <Event
            headline="PEVuci’s Group Rides"
            body="How about a shred down Irvine’s extravagant landscapes with several fellow PEV rides with PEVs@UCI’s biweekly group rides! Cruising speed and route rightly adaptable and flexible for all PEVs and all riders’ experience. Bring a friend, helmets on, and get ready to feel the wind in your face down the trails of beautiful Irvine!"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <Event
            headline="PEVuci’s “Intro2Speed” Track Sesh"
            body="Who are we to stop at group rides around Irvine when we can settle with race track!? Hosted adjacently biweekly with PEVuci’s group rides, join us at our varying locations of parking garages and lots as we take on PEV-riding one corner at a time around our preset race track! Never ridden a PEV and want your first laps of practice? Got a need for speed to beat the best lap record? PEVuci’s Intro2Speed is your event to go to!"
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
