"use client";
import { useState } from "react";
import ShopItem from "./components/ShopItem";
import quote from "../Images/quote.png";
import Image from "next/image";

export interface ShopItemProduct {
  product1: string;
  product1Image: string;
  product1description: string[];
  product1buy: string;
  product2?: string;
  product2Image?: string;
  product2description?: string[];
  product2buy?: string;
}

const product1: ShopItemProduct = {
  product1: "Base Zit",
  product1Image: "Zit.jpg",
  product1description: ["build your own 3d printer", "print your own parts"],
  product1buy: "Buy Zit",
  product2: "Add starter Zit",
  product2Image: "ZitFull.jpg",
  product2description: ["Fully assembled 3d printer", "Bring it home"],
  product2buy: "Add full buyout zit",
};

const product2: ShopItemProduct = {
  product1: "Base Ace",
  product1Image: "Ace.jpg",
  product1description: ["build a battlebot", "fight in the arena"],
  product1buy: "Buy Ace",
  product2: "Add starter Ace",
  product2Image: "AceFull.jpg",
  product2description: ["Fully assembled battlebot", "Bring it home"],
  product2buy: "Add full buyout Ace",
};

const product3: ShopItemProduct = {
  product1: "Base UAV",
  product1Image: "UAV.jpg",
  product1description: ["build a drone", "fly it"],
  product1buy: "Buy UAV",
  product2: "Add starter UAV",
  product2Image: "UAVFull.jpg",
  product2description: ["Fully assembled drone", "Bring it home"],
  product2buy: "Add full buyout UAV",
};

const product4: ShopItemProduct = {
  product1: "Base PEV",
  product1Image: "PEV.jpg",
  product1description: ["build a personal electric vehicle", "ride it"],
  product1buy: "Buy PEV",
  product2: "Add starter PEV",
  product2Image: "PEVFull.jpg",
  product2description: ["Fully assembled PEV", "Bring it home"],
  product2buy: "Add full buyout PEV",
};

export default function Shop() {
  const [curProduct, setCurProduct] = useState<ShopItemProduct>(product1);

  // Modal state variable
  const [showModal, setShowModal] = useState<Boolean>(false);

  // Modal handlers
  const openModalHandler = (product: ShopItemProduct) => {
    setCurProduct(product);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  console.log("rebuilt");

  return (
    <div className="mt-[5rem] bg-gradient-to-b from-[#AEAEAE] to-[#134790] px-[6rem] py-[2rem] pb-[10rem]">
      <label className=" form-control m-6 w-full max-w-xs ">
        <div className="label">
          <span className="label-text text-blue-dark">
            Filter Items by Club
          </span>
        </div>
        <select className=" select select-bordered text-neutral-100/85">
          <option disabled>Pick one</option>
          <option>All</option>
          <option>ZITs</option>
          <option>ACEs</option>
          <option>UAVs</option>
          <option>PEVs</option>
        </select>
      </label>
      <div className=" flex flex-wrap items-center justify-between  ">
        <ShopItem
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product1}
          tags={["ZIT"]}
          itemName="ZIT Project"
        />
        <ShopItem
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product2}
          tags={["ACE"]}
          itemName="ACE Project"
        />
        <ShopItem
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product3}
          tags={["UAV"]}
          itemName="UAV Project"
        />
        <ShopItem
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product4}
          tags={["PEV"]}
          itemName="PEV Project"
        />
      </div>

      {showModal && (
        <div
          className="fixed top-0 z-10 h-screen w-screen bg-blue/60 opacity-100 transition-all "
          onClick={closeModalHandler}
        >
          <div
            className=" fixed right-[15%] top-[15%] h-[70%] w-[70%] rounded-lg bg-neutral-300 p-12 text-neutral-900 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="">
              <h2>{curProduct.product1}</h2>
              <h3>{curProduct.product2}</h3>
              <div className="relative h-48 w-full">
                <Image
                  src={curProduct.product1Image}
                  alt="Product 1"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-48 w-full">
                <Image
                  src={curProduct.product2Image || ''}
                  alt="Product 2"
                  fill
                  className="object-contain"
                />
              </div>
              <ul>
                {curProduct.product1description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <ul>
                {curProduct.product2description &&
                  curProduct.product2description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
              </ul>
              <button>{curProduct.product1buy}</button>
              <button>{curProduct.product2buy}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
