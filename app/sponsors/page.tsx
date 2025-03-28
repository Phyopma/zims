"use client";

import React from "react";
import Image from "next/image"
import Autodesk from "../Images/Autodesk.png";
import AxiomMaterials from "../Images/AxiomMaterials.png";
import HAAS from "../Images/HAAS (Icon).png";
import IndustrialPlasticSupply from "../Images/IndustrialPlasticSupply.png";
import NHRL from "../Images/NHRL.png";
import SendCutSend from "../Images/SendCutSend.png";
import { url } from "inspector";


const Sponsors: React.FC = () => {
  return (
    <>
      <div className="bg-blue-dark px-12 pt-12 text-center">
        <h1 className="pb-14 pt-32 text-center font-display text-8xl">Sponsors</h1>
        <div>
          <p className="p-2 font-body text-2xl padding-70 leading-loose">
            For all that has, is, or will happen for the Network, 
            it goes without saying none of it all would be possible 
            without our sponsors. On behalf of the ZOTBotics community, 
            we thank our current and prospective sponsors for believing 
            and supporting our passion and efforts.
          </p>
          <p className="p-2 font-body text-2xl leading-loose">
            Click on any of the sponsors to learn about what they do and how we&apos;ve worked together!
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between '}}>
          <div className="outer-container flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative"}}>
              <Image src={IndustrialPlasticSupply} alt="IndustrialPlasticSupply" layout="fill" className="rounded-xl"/>
              <div className="inner-container absolute inset-0 rounded-xl justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,.5)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex:10 }}
              >
              </div>
              </button>
            </div>
            <div className="outer-container flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative"}}>
              <Image src={SendCutSend} alt="SendCutSend" layout="fill" className="rounded-xl"/>
              <div className="inner-container absolute inset-0 rounded-xl justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,.5)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex:10 }}
              >
              </div>
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between '}}>
            <div className="flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative" }}>
              <Image src={Autodesk} alt="Autodesk" layout="fill" className="rounded-xl"/>
              <div className="inset-0 justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,1)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ position: "absolute" }}
              >
              </div>
              </button>
            </div>
            <div className="outer-container flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative"}}>
              <Image src={AxiomMaterials} alt="AxionMaterials" layout="fill" className="rounded-xl"/>
              <div className="inner-container absolute inset-0 rounded-xl justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,.5)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex:10 }}
              >
              </div>
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between '}}>
            <div className="flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative" }}>
              <Image src={HAAS} alt="Autodesk" layout="fill" className="rounded-xl"/>
              <div className="inset-0 justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,.5)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ position: "absolute" }}
              >
              </div>
              </button>
            </div>
            <div className="outer-container flex justify-center items-center py-8 w-full h-[300px] max-w-6xl my-8">
              <button className="w-full h-full shadow-lg transform transition-all duration-150 active:shadow-inner active:translate-y-1 relative max-w-md overflow-hidden rounded-xl bg-zinc-950 px-8 py-16 shadow-2xl"
              style={{ position: "relative"}}>
              <Image src={NHRL} alt="AxionMaterials" layout="fill" className="rounded-xl"/>
              <div className="inner-container absolute inset-0 rounded-xl justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,.5)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative max-w-md overflow-hidden rounded-xl bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat px-8 py-16 shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]"
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex:10 }}
              >
              </div>
              </button>
            </div>
          </div>
          </div>
        </div>
    </>
  );
};

export default Sponsors;



