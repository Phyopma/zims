import { ShopItemProduct } from "../page";
interface ShopItemProps {
  itemName: string;
  openModalHandler: (product: ShopItemProduct) => void;
  closeModalHandler: () => void;
  productInfo: ShopItemProduct;
  tags: string[];
}

export default function ShopItem({
  itemName,
  openModalHandler,
  closeModalHandler,
  productInfo,
  tags,
}: ShopItemProps) {
  return (
    <div
      className="card m-6 inline-block rounded-lg bg-blue p-5 shadow-sm transition-all hover:-translate-y-4 hover:cursor-pointer hover:shadow-lg"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("clicked");
        openModalHandler(productInfo);
      }}
    >
      <div className=" mb-4 h-40 w-72 rounded-lg bg-neutral-200"></div>
      <div className="text-start font-display text-4xl">{itemName}</div>
      <div className="mb-6 font-body text-xl text-neutral-200/50">
        1st Makerspace Reserve
      </div>
      {/* map chips from the tags */}
      <div className="flex flex-wrap gap-2">
        {tags.includes("ZIT") ? (
          <div className="badge badge-outline my-1 border-yellow pr-2 text-sm text-neutral-200/50 text-yellow">
            ZIT
          </div>
        ) : (
          <></>
        )}
        {tags.includes("ACE") ? (
          <div className="badge badge-outline my-1 border-red pr-2 text-sm text-neutral-200/50 text-red">
            ACE
          </div>
        ) : (
          <></>
        )}
        {tags.includes("UAV") ? (
          <div className="badge badge-outline my-1 border-green pr-2 text-sm text-green text-neutral-200/50">
            UAV
          </div>
        ) : (
          <></>
        )}
        {tags.includes("PEV") ? (
          <div className="badge badge-outline my-1 border-orange pr-2 text-sm text-neutral-200/50 text-orange">
            PEV
          </div>
        ) : (
          <></>
        )}
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
          window.open("https://www.google.com/forms/about/", "_blank");
          e.stopPropagation();
          // push this link https://www.google.com/forms/about/
        }}
      >
        I&apos;m Interested
      </button>
    </div>
  );
}
