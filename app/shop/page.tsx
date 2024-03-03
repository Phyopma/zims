"use client";
import { useState } from "react";
import ShopItem from "./components/ShopItem";
import quote from "../Images/quote.png";
import Image from "next/image";
import { list } from "postcss";

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
  const [cart, setCart] = useState<Set<string>>(new Set());
  const [curProduct, setCurProduct] = useState<ShopItemProduct>(product1);

  const addToCartHandler = (item: string) => {
    setCart((cart) => new Set(cart).add(item));
    console.log("added iten to cart");
    console.log("new size of cart", cart.size);
  };

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
    <>
      <div className="mt-30 flex flex-wrap items-center justify-between bg-gradient-to-b from-[#AEAEAE] to-[#134790] px-[6rem] py-[10rem]">
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product1}
          itemName="ZIT Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product2}
          itemName="ACE Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product3}
          itemName="UAV Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          productInfo={product4}
          itemName="PEV Project"
        />
      </div>
      {cart.size > 0 && (
        <div
          className="btn fixed right-8 top-24 border-none bg-[#306EC6] px-4 text-xl font-normal  text-neutral-100 shadow hover:bg-[#306EC6] hover:bg-opacity-60"
          onClick={() => console.log(cart)}
        >
          <div className="inline ">Get a quote </div>
          <Image
            src={quote}
            className=" invert"
            alt="quote"
            width={24}
            height={24}
          />
        </div>
      )}
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
              <img src={curProduct.product1Image} alt="Product 1" />
              <img src={curProduct.product2Image} alt="Product 2" />
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
    </>
  );
}
