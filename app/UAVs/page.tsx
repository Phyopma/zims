import Image from "next/image";
import UAVsrc from "../Images/ZIT.png";
import Slideshow from "./components/slideshow";

import { UAVsRow } from "../officers/page";
import ClubRow from "../officers/components/ClubRow";

export default function UAVPage() {
  UAVsRow.clubName = "";
  return (
    <>
      <div className="mt-20  bg-gradient-to-br from-[#101835] via-[#134790] to-[#134790] p-12">
        <div className="h-[70vh] w-full rounded-xl bg-blue p-12 drop-shadow-xl">
          <p className="m-6 text-center font-display text-8xl">UAVs</p>
          <Image
            key="UAVBanner"
            className="z-0 mx-auto animate-fade-left animate-delay-150 animate-duration-300 animate-once animate-ease-in"
            draggable="false"
            src={UAVsrc}
            alt="UAV"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-blue-dark px-12 py-12">
        <p className="font-display text-8xl font-bold">FPV</p>
        <p className="py-2 font-body text-2xl text-neutral-300">/ɛf·pi·vi/</p>
        <p className="py-2 font-body text-2xl text-neutral-300">Noun</p>
        <ul className="ml-6 w-[60%] list-disc font-body text-2xl text-neutral-300">
          <li className="py-2">
            3-letter acronym for a method of operating an unmanned aerial
            vehicle via both remote-control and an onboard camera that feeds
            video to virtual reality-style headset goggles or monitor for a
            “first-person view” of a pilot at the cockpit
          </li>
        </ul>
      </div>
      <div className="bg-blue-dark py-12">
        <p className="text-center font-display text-6xl font-bold">
          Take to the skies with your own remote-controlled plane / drone!
        </p>
        <p className="p-12 text-center font-body text-xl text-neutral-400">
          At UAVs@UCI, members have a chance to design and build their own
          aerial rig featuring both radio control and video-broadcasting
          immersion of FPV. Proudly partnering with UAV Forge at UCI, a senior
          design project team program specializing in competition autonomous
          drones, co-hosted project program are open for members of any
          RC-flying experience levels to build and fly their first UAV! 
        </p>
      </div>
      <div className="bg-blue-dark py-6">
        <p className="text-center font-display text-6xl font-bold">Why UAVs?</p>
      </div>
      <Slideshow />
      <div className="bg-blue-dark px-12">
        <p className="py-6 text-center font-display text-6xl font-bold">
          Officers
        </p>
        <ClubRow {...UAVsRow} />
      </div>
    </>
  );
}
