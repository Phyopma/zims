import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar px-8 py-2 shadow-md bg-blue fixed top-0 z-50 bg-opacity-100">
      <div className="navbar-start">
        <a className="text-5xl align-bottom font-display" href="/">
          ZOTBotics
        </a>
      </div>
      <div className="flex flex-grow leading-none justify-around navbar-center">
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
        <a className="btn btn-ghost text-xl">ZIT</a>
        <a className="btn btn-ghost text-xl">ACE</a>
        <a className="btn btn-ghost text-xl">UAVs</a>
        <a className="btn btn-ghost text-xl">PEVs</a>
        <a className="btn btn-ghost text-xl">Shop</a>
        <a className="btn btn-ghost text-xl">Makerspace</a>
      </div>
      <div className="navbar-end">
        <button className="btn px-5 align-bottom bg-yellow text-xl leading-none text-neutral-800 hover:bg-yellow hover:bg-opacity-60">
          Join Us <p className=" font-sans">→</p>
        </button>
      </div>
    </div>
  );
}
