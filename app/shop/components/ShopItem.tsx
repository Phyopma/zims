interface ShopItemProps {
  onAddToCartHandler: (item: string) => void;
  itemName: string;
  openModalHandler: () => void;
  closeModalHandler: () => void;
}

export default function ShopItem({
  onAddToCartHandler,
  itemName,
  openModalHandler,
  closeModalHandler,
}: ShopItemProps) {
  return (
    <div
      className=" m-6 inline-block rounded-lg bg-blue p-4 transition-all hover:-translate-y-4 hover:shadow-lg"
      onClick={openModalHandler}
    >
      <div className=" mb-4 h-40 w-72 rounded-lg bg-neutral-200"></div>
      <div className="text-start font-display text-4xl">{itemName}</div>
      <div className="mb-6 font-body text-xl text-neutral-200/50">
        1st Makerspace Reserve
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="h-fit w-fit place-items-start  ">
          <div className=" font-display text-xl">Starting at</div>
          <div className=" font-display text-3xl">$100</div>
        </div>
        <div className="divider lg:divider-horizontal " />
        <div className=" h-fit w-fit flex-grow place-items-start ">
          <div className=" font-display text-xl">Full Buyout</div>
          <div className=" font-display text-3xl">$20</div>
        </div>
      </div>
      <button
        className="btn mt-4 
        bg-yellow text-xl font-normal text-neutral-800 shadow hover:bg-yellow hover:bg-opacity-60"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onAddToCartHandler(itemName);
        }}
      >
        I&apos;m Interested
      </button>
    </div>
  );
}
