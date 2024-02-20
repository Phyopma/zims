import React from "react";
import Link from "next/link";
import Image from "next/image";
import Mascot from "../Images/Mascot.png";

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50 bg-blue bg-opacity-100 px-8 py-2 shadow-md">
      <div className="navbar-start">
        <a className="align-bottom font-display text-5xl" href="/">
          {/* ZOTBotics */}
          <Image
            className="invert hover:opacity-75"
            alt="ZOTBotics"
            src={Mascot}
            width={100}
            height={50}
          />
        </a>
      </div>
      <div className="navbar-center flex flex-grow justify-around leading-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="btn btn-ghost text-xl">About</summary>
              <ul className="p-2 ">
                <li>
                  <a className="text-xl" href="/mission">
                    Mission
                  </a>
                </li>
                <li>
                  <a className="text-xl" href="/officers">
                    Officers
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <a href="/ZIT" className="btn btn-ghost text-xl">
          ZIT
        </a>
        <a className="btn btn-ghost text-xl">ACE</a>
        <a className="btn btn-ghost text-xl">UAVs</a>
        <a className="btn btn-ghost text-xl">PEVs</a>
        <a href="./shop" className="btn btn-ghost text-xl">
          Shop
        </a>
        <a className="btn btn-ghost text-xl">Makerspace</a>
      </div>
      <div className="navbar-end">
        <a
          href="/join-us"
          className="btn bg-yellow px-5 align-bottom text-xl leading-none text-neutral-800 hover:bg-yellow hover:bg-opacity-60"
        >
          Join Us <p className=" font-sans">→</p>
        </a>
      </div>
    </div>
  );
}
