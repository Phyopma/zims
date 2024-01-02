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
  let zitClubBanner = <Image src={ZITsrc} alt="ZIT" width={500} height={500} />;
  let aceClubBanner = (
    <Image src={ACEsrc} className="invert" alt="ACE" width={500} height={500} />
  );
  let uavsClubBanner = (
    <Image src={ZITsrc} alt="UAVs" width={500} height={500} />
  );
  let pevsClubBanner = (
    <Image src={ZITsrc} alt="PEVs" width={500} height={500} />
  );

  let [club, setClub] = useState("ZIT");
  let clubDescription = eval(club.toLowerCase() + "ClubDescription");
  let clubBanner = eval(club.toLowerCase() + "ClubBanner");

  let clubDescriptionElement = clubDescription.map((desc: any) => {
    return (
      <li className="py-2" key={desc}>
        <p className="text-xl text-neutral-400">{desc}</p>
      </li>
    );
  });

  return (
    <div className="py-12">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-display font-bold">
          Pick a club, any club
        </h1>
        <div className="join py-8">
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
        <h1 className="text-6xl pt-6 font-bold font-display">{club}</h1>
        <ul className="font-body text-2xl list-disc text-yellow py-6 text-start">
          {clubDescriptionElement}
        </ul>
        {clubBanner}
      </div>
    </div>
  );
}
