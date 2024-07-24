import Slideshow from "./home/slideshow";
export default function Hero() {
  //     <div className="hero-content text-center">
  // return (
  //   <div
  //     className="bg-base-600 hero min-h-[70vh]"
  //     style={{
  //       backgroundImage:
  //         "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
  //     }}
  //   >
  //       <div className="max-w-md">
  //         <h1 className="font-display text-6xl font-bold">ZOTBotics</h1>
  //         <p className="py-6 font-body text-xl">
  //           The premier club network for all things robotics at the University
  //           of California, Irvine
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="mt-[5rem] min-h-[70vh]">
      <div className="">
        <Slideshow />
      </div>
    </div>
  );
}
