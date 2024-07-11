import Image from "next/image";
import ACEsrc from "../Images/ACE.png";
import Slideshow from "./components/slideshow";

import { AceRow } from "../officers/page";
import ClubRow from "../officers/components/ClubRow";

export default function ZITPage() {
  AceRow.clubName = "";
  return (
    <>
      <div className="mt-20  bg-gradient-to-br from-[#101835] via-[#134790] to-[#134790] p-12">
        <div className="h-[70vh] w-full rounded-xl bg-blue p-12 drop-shadow-xl">
          <p className="mt-6 text-center font-display text-8xl">
            Anteater Combotics Engineering
          </p>
          <Image
            key="aceBanner"
            className="z-0 mx-auto animate-fade-left invert animate-delay-150 animate-duration-300 animate-once animate-ease-in"
            draggable="false"
            src={ACEsrc}
            alt="ACE"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-blue-dark px-12 py-12">
        <p className="font-display text-8xl font-bold">Com·bo·tics</p>
        <p className="py-2 font-body text-2xl text-neutral-300">/kəmˈbädiks/</p>
        <p className="py-2 font-body text-2xl text-neutral-300">Noun</p>
        <ul className="ml-6 w-[60%] list-disc font-body text-2xl text-neutral-300">
          <li className="py-2">
            A type of robot competition in which remote-controlled, custom-built
            machines fight using various methods to incapacitate each other.
          </li>
        </ul>
      </div>
      <div className="bg-blue-dark py-12">
        <p className="text-center font-display text-6xl font-bold">
          Design, build, destroy or be destroyed
        </p>
        <p className="p-12 text-center font-body text-xl text-neutral-400">
          Anteater Combotics Engineering (ACE) at UCI represents the pinnacle
          robotics team project of all ZOTBotics by pitting members and
          respective engineering skills through an exhilarating competition
          gameplay of radio-controlled robots armed with offense and defensive
          melee measures.
        </p>
      </div>
      <div className="bg-blue-dark py-6">
        <p className="text-center font-display text-6xl font-bold">Why ACE?</p>
      </div>
      <Slideshow />
      <div className="bg-blue-dark px-12">
        <p className="py-6 text-center font-display text-6xl font-bold">
          Officers
        </p>
        <ClubRow {...AceRow} />
      </div>
    </>
  );
}
