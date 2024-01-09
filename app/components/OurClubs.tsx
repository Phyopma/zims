"use client";
import React, { useState } from "react";
import Image from "next/image";
import ZITsrc from "../Images/ZIT.png";
import ACEsrc from "../Images/ACE.png";

export default function OurClubs() {
  // I am using DaisyUI for styling, make a glass series of buttons with labels (ZIT, ACE, UAVs, and PEVs), when one is pressed, the state is changed to the last button pressed.
  // based on the state, the respective button's background is changed to a different color, and the respective club's information is displayed.
  // the colors for each club are:ZIT: construction hat yellow (#FEC917)
  // ACE: blood red (#FD0000)
  // UAVs: lime green (#00FF00)
  // PEVs: MadMax orange (#FE6A31)

  // create a list of club descriptions for each club. I will give the text descriptions and you will make each bullet point into a string in the club description.
  /*ZIT
Imagine, design, build, and build s’more!
ZIT’s Makerspace Reserve - 3D print a 3D printer!
The project teams behind the makerspace!
Learn more (Hyperlink to ZIT’s main page)
Logo as main visual, supporting photos of ZIT projects
ACE
Design, build, destroy or be destroyed!
ACE’s Combotics Battalion - Build a Battlebot!
Defend and serve your campus!
Learn more (Hyperlink to ACE’s main page)
Logo as main visual, supporting photos of ACE projects
UAVs
Design, build, and fly!
UAVs’ RC Squadron - Take home your first UAV!
Take to the skies at our next weekly flight sesh!
Learn more (Hyperlink to UAVs’ main page)
Logo as main visual, supporting photos of UAVs projects
PEVs
Shred with your own electric cruiser!
PEVuci - Join our weekly group rides or racetrack sesh!
Safety first!
Learn more (Hyperlink to PEVs’ main page)
Logo as main visual, supporting photos of PEVs events
*/

  let zitClubDescription = [
    "Imagine, design, build, and build s’more!",
    "ZIT’s Makerspace Reserve - 3D print a 3D printer!",
    "The project teams behind the makerspace!",
    "Learn more (Hyperlink to ZIT’s main page)",
  ];
  let aceClubDescription = [
    "Design, build, destroy or be destroyed!",
    "ACE’s Combotics Battalion - Build a Battlebot!",
    "Defend and serve your campus!",
    "Learn more (Hyperlink to ACE’s main page)",
  ];
  let uavsClubDescription = [
    "Design, build, and fly!",
    "UAVs’ RC Squadron - Take home your first UAV!",
    "Take to the skies at our next weekly flight sesh!",
    "Learn more (Hyperlink to UAVs’ main page)",
  ];
  let pevsClubDescription = [
    "Shred with your own electric cruiser!",
    "PEVuci - Join our weekly group rides or racetrack sesh!",
    "Safety first!",
    "Learn more (Hyperlink to PEVs’ main page)",
  ];
  // use next js <Image> for an image from app/Images/ZIT.png
  let [club, setClub] = useState("ZIT");
  let clubDescription = eval(club.toLowerCase() + "ClubDescription");
  let zitClubBanner = (
    <Image
      key="zitBanner"
      className="absolute animate-fade-left animate-once animate-delay-150 animate-duration-300 animate-ease-in"
      draggable="false"
      src={ZITsrc}
      alt="ZIT"
      width={500}
      height={500}
    />
  );
  let aceClubBanner = (
    <Image
      key="aceBanner"
      src={ACEsrc}
      className="invert absolute animate-fade-left animate-once animate-delay-150 animate-duration-300 animate-ease-in"
      draggable="false"
      alt="ACE"
      width={500}
      height={500}
    />
  );
  let uavsClubBanner = (
    <Image
      key="uavsBanner"
      src={ZITsrc}
      alt="UAVs"
      className="absolute animate-fade-left animate-once animate-delay-150 animate-duration-300 animate-ease-in"
      width={500}
      height={500}
    />
  );
  let pevsClubBanner = (
    <Image
      key="pevsBanner"
      src={ZITsrc}
      alt="PEVs"
      className="absolute animate-fade-left animate-once animate-delay-150 animate-duration-300 animate-ease-in"
      width={500}
      height={500}
    />
  );

  let clubDescriptionElement = (
    <div
      key={club + "Desc"}
      className="flex flex-row items-center text-center justify-center text-xl font-body py-2"
    >
      <div className="grid h-20 w-1/5 card rounded-box place-items-center animate-fade-left animate-once animate-delay-200 animate-duration-300 animate-ease-in">
        {clubDescription[0]}
      </div>
      <div className="divider divider-horizontal animate-fade"></div>
      <div className="grid h-20 w-1/5 card rounded-box place-items-center animate-fade-left animate-once animate-delay-300 animate-duration-300 animate-ease-in">
        {clubDescription[1]}
      </div>
      <div className="divider divider-horizontal animate-fade"></div>
      <div className="grid h-20 w-1/5 card rounded-box place-items-center animate-fade-left animate-once animate-delay-300 animate-duration-300 animate-ease-in">
        <button className="btn font-normal bg-yellow text-xl text-neutral-800 hover:bg-yellow hover:bg-opacity-60">
          Learn More
        </button>
      </div>
      <div className=" absolute top-[82rem] left-[20rem] z-20 select-none rotate-12 w-full font-sans text-yellow animate-fade animate-once animate-delay-500 animate-duration-300 animate-ease-in pointer-events-none">
        {clubDescription[2]}
      </div>
    </div>
  );

  let clubBanner = eval(club.toLowerCase() + "ClubBanner");

  return (
    <div className="py-12 w-full bg-blue">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-display font-bold">
          Pick a club, any club
        </h1>
        <div className="join py-8 z-10">
          <button
            className={
              "btn btn-glass py-4 px-8 join-item rounded-lg shadow-lg" +
              (club == "ZIT"
                ? " bg-yellow-construction hover:bg-yellow-construction hover:opacity-75 text-neutral-100"
                : "")
            }
            onClick={() => {
              setClub("ZIT");
            }}
          >
            ZIT
          </button>
          <button
            className={
              "btn btn-glass py-4 px-8 join-item rounded-lg shadow-lg" + //make the hover have reduced opacity
              (club == "ACE"
                ? " bg-red hover:bg-red hover:opacity-75 text-neutral-100"
                : "")
            }
            onClick={() => {
              setClub("ACE");
            }}
          >
            ACE
          </button>
          <button
            className={
              "btn btn-glass py-4 px-8 join-item rounded-lg shadow-lg" +
              (club == "UAVs"
                ? " bg-green hover:bg-green hover:opacity-75 text-neutral-100"
                : "")
            }
            onClick={() => {
              setClub("UAVs");
            }}
          >
            UAVs
          </button>
          <button
            className={
              "btn btn-glass py-4 px-8 join-item rounded-lg shadow-lg" +
              (club == "PEVs"
                ? " bg-orange hover:bg-orange hover:opacity-75 text-neutral-100"
                : "")
            }
            onClick={() => {
              setClub("PEVs");
            }}
          >
            PEVs
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl pt-48 font-bold font-display"></h1>
        {clubBanner}
        {clubDescriptionElement}
      </div>
    </div>
  );
}
