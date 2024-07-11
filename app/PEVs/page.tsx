import Image from "next/image";
import PEVsrc from "../Images/ZIT.png";
import Slideshow from "./components/slideshow";

import { PEVsRow } from "../officers/page";
import ClubRow from "../officers/components/ClubRow";

export default function PEVPage() {
  PEVsRow.clubName = "";
  return (
    <>
      <div className="mt-20  bg-gradient-to-br from-[#101835] via-[#134790] to-[#134790] p-12">
        <div className="h-[70vh] w-full rounded-xl bg-blue p-12 drop-shadow-xl">
          <p className="m-6 text-center font-display text-8xl">PEVs</p>
          <Image
            key="PEVBanner"
            className="z-0 mx-auto animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
            draggable="false"
            src={PEVsrc}
            alt="PEV"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-blue-dark px-12 py-12">
        <p className="font-display text-8xl font-bold">PEVs</p>
        <p className="py-2 font-body text-2xl text-neutral-300">/ɛf·pi·vi/</p>
        <p className="py-2 font-body text-2xl text-neutral-300">Noun</p>
        <ul className="ml-6 w-[60%] list-disc font-body text-2xl text-neutral-300">
          <li className="py-2">
            Acronym for “personal electric vehicles,” a class of compact,
            electric motorized micromobility vehicle for transporting an
            individual at speeds exceeding 25 km/h (16 mph). They include
            electric skateboards, kick scooters, bikes, self-balancing unicycles
            and Onewheels
          </li>
        </ul>
      </div>
      <div className="bg-blue-dark py-12">
        <p className="text-center font-display text-6xl font-bold">
          Shred your own electric cruiser!
        </p>
        <p className="p-12 text-center font-body text-xl text-neutral-400">
          PEVs at UCI is home to the massively growing community hub of UCI
          students inspired to rethink the way they move: faster, longer,
          cleaner, smaller. Founded on the thriving prospect of promoting the
          “movement”, PEVUCI welcomes all fellow Anteater to fun social events
          like group rides and race track sessions to celebrate the thrill of
          personal electric vehicles.
        </p>
      </div>
      <div className="bg-blue-dark py-6">
        <p className="text-center font-display text-6xl font-bold">Why PEVs?</p>
      </div>
      <Slideshow />
      <div className="bg-blue-dark px-12">
        <p className="py-6 text-center font-display text-6xl font-bold">
          Officers
        </p>
        <ClubRow {...PEVsRow} />
      </div>
    </>
  );
}
