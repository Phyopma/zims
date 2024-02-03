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
      className="z-0 animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
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
      className="z-0 animate-fade-left invert animate-delay-150 animate-duration-300 animate-once animate-ease-in"
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
      className="z-0 animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
      width={500}
      height={500}
    />
  );
  let pevsClubBanner = (
    <Image
      key="pevsBanner"
      src={ZITsrc}
      alt="PEVs"
      className="z-0 animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
      width={500}
      height={500}
    />
  );

  let clubDescriptionElement = (
    <>
      <div
        key={club + "Desc"}
        className="flex flex-row items-center justify-center py-2 text-center font-body text-xl"
      >
        <div className="card grid h-20 w-1/4 animate-fade-left place-items-center rounded-box animate-delay-200 animate-duration-300 animate-once animate-ease-out">
          {clubDescription[0]}
        </div>
        <div className="divider divider-horizontal animate-fade"></div>
        <div className="card grid h-20 w-1/4 animate-fade-left place-items-center rounded-box animate-delay-300 animate-duration-300 animate-once animate-ease-out">
          {clubDescription[1]}
        </div>
        <div className="divider divider-horizontal animate-fade"></div>
        <div className="card grid h-20 w-1/4 animate-fade-left place-items-center rounded-box animate-delay-300 animate-duration-300 animate-once animate-ease-out">
          <button className="btn bg-yellow pt-1 text-xl text-neutral-800 hover:bg-yellow hover:bg-opacity-60">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-30 pointer-events-none z-30 ml-[54%] mt-[-26%] rotate-12 animate-fade select-none text-center font-sans text-yellow animate-delay-500 animate-duration-300 animate-once animate-ease-in">
        {clubDescription[2]}
      </div>
    </>
  );

  let clubBanner = (
    <div className="mt-[-5rem] flex min-h-[30rem] w-full select-none flex-col items-center justify-center">
      {eval(club.toLowerCase() + "ClubBanner")}
    </div>
  );

  return (
    // <div className="py-12 w-full bg-gradient-to-b to-blue from-[#838383]">
    <div className="min-h-[40rem] w-screen bg-blue py-12">
      <div className="relative z-10 flex flex-col items-center justify-center ">
        <h1 className="font-display text-5xl font-bold">
          Pick a club, any club
        </h1>
        <div className="join z-0 py-8">
          <button
            className={
              "btn-glass btn join-item rounded-lg px-8 py-4 shadow-lg" +
              (club == "ZIT"
                ? " bg-yellow-construction text-neutral-100 hover:bg-yellow-construction hover:opacity-75"
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
              "btn-glass btn join-item rounded-lg px-8 py-4 shadow-lg" + //make the hover have reduced opacity
              (club == "ACE"
                ? " bg-red text-neutral-100 hover:bg-red hover:opacity-75"
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
              "btn-glass btn join-item rounded-lg px-8 py-4 shadow-lg" +
              (club == "UAVs"
                ? " bg-green text-neutral-100 hover:bg-green hover:opacity-75"
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
              "btn-glass btn join-item rounded-lg px-8 py-4 shadow-lg" +
              (club == "PEVs"
                ? " bg-orange text-neutral-100 hover:bg-orange hover:opacity-75"
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
      {clubBanner}
      <div className="z-10 mt-[-7rem]">{clubDescriptionElement}</div>
    </div>
  );
}
