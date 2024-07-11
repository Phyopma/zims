import Image from "next/image";
import ZITsrc from "../Images/ZIT.png";
import Slideshow from "./components/slideshow";

import Officers, { ZitRow } from "../officers/page";
import ClubRow from "../officers/components/ClubRow";

export default function ZITPage() {
  ZitRow.clubName = "";
  return (
    <>
      <div className="mt-20  bg-gradient-to-br from-[#101835] via-[#134790] to-[#134790] p-12">
        <div className="h-[70vh] w-full rounded-xl bg-blue p-12 drop-shadow-xl">
          <p className="m-6 text-center font-display text-8xl">
            Zotbotics in Training
          </p>
          <Image
            key="zitBanner"
            className="z-0 mx-auto animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
            draggable="false"
            src={ZITsrc}
            alt="ZIT"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-blue-dark px-12 py-12">
        <p className="font-display text-8xl font-bold">ZIT</p>
        <p className="py-2 font-body text-2xl text-neutral-300">/zit/</p>
        <p className="py-2 font-body text-2xl text-neutral-300">Noun</p>
        <ul className="ml-6 w-[60%] list-disc font-body text-2xl text-neutral-300">
          <li className="py-2">a pimple on the skin</li>
          <li className="py-2">
            3-letter acronym for “ZOTBotics’ Introductory Training”, ZOTBotics’
            introductory hub for rookie roboticists
          </li>
        </ul>
      </div>
      <div className="bg-blue-dark py-12">
        <p className="text-center font-display text-6xl font-bold">
          Imagine, design, build, and build s’more!
        </p>
        <p className="p-12 text-center font-body text-xl text-neutral-400">
          As the name suggests, ZIT@UCI is the introductory hub for members of
          the more beginner level to sets their first steps into robotics. Basic
          engineering skills like computer-aided design, soldering, and 3D
          printing are presented through quarter-long project series where
          members can directly apply what they learned onto various practical
          applications: designing a coaster on Autodesk Fusion 360, soldering
          electronics to complete a drone’s avionics, 3D-printing fast solutions
          to repair or improve everyday items, etc. 
        </p>
      </div>
      <div className="bg-blue-dark py-6">
        <p className="text-center font-display text-6xl font-bold">Why ZIT?</p>
      </div>
      <Slideshow />
      <ClubRow {...ZitRow} />
    </>
  );
}
