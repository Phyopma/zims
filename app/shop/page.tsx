"use client";
import { useState } from "react";
import ShopItem from "./components/ShopItem";
import quote from "../Images/quote.png";
import Image from "next/image";

export default function Shop() {
  const [cart, setCart] = useState<Set<string>>(new Set());

  const addToCartHandler = (item: string) => {
    setCart((cart) => new Set(cart).add(item));
    console.log("added iten to cart");
    console.log("new size of cart", cart.size);
  };

  // Modal state variable
  const [showModal, setShowModal] = useState<Boolean>(false);

  // Modal handlers
  const openModalHandler = () => {
    setShowModal(true);
    console.log("open modal");
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="mt-30 flex flex-wrap items-center justify-between bg-gradient-to-b from-[#AEAEAE] via-[#134790] to-[#134790] px-[6rem] py-[10rem]">
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          itemName="ZIT Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          itemName="ACE Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          itemName="UAV Project"
        />
        <ShopItem
          onAddToCartHandler={addToCartHandler}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
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
        <div className="modal fixed left-0 top-0 z-50 h-full w-full bg-blue bg-opacity-50">
          <div className="modal-box m-auto h-1/2 w-1/2 bg-neutral-100 p-8">
            <div className="font-display text-4xl">ZIT Project</div>
            <div className="font-body text-xl">
              The ZOTBotics Innovation Team (ZIT) is a group of students who
              work on projects that are not directly related to the competition
              robots. These projects can range from developing a new piece of
              software to creating a new piece of hardware. The ZIT team is
              responsible for developing the ZOTBotics website, the ZOTBotics
              app, and the ZOTBotics store. The ZIT team is also responsible for
              developing the ZOTBotics social media presence and the ZOTBotics
              brand. The ZIT team is also responsible for developing the
              ZOTBotics website, the ZOTBotics app, and the ZOTBotics store. The
              ZIT team is also responsible for developing the ZOTBotics social
              media presence and the ZOTBotics brand.
            </div>
            <button
              className="btn mt-4 bg-yellow text-xl font-normal text-neutral-800 shadow hover:bg-yellow hover:bg-opacity-60"
              onClick={closeModalHandler}
            >
              I'm Interested
            </button>
          </div>
        </div>
      )}
    </>
  );
}
