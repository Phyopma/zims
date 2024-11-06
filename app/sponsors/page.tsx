"use client";
//@ts-ignore

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LayoutGrid } from "@/components/ui/layout-grid";

const icons = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
];

const Skeleton = () => {
  return (
    <div className="">
      <p className="text-xl font-bold text-white md:text-4xl">
        Rivers are serene
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const sponsors = [
  "HAAS (Icon).png",
  "HAAS.png",
  "IMSIcon.jpeg",
  "Industrial Metal Supply.jpeg",
  "IndustrialPlasticSupply.png",
  "IPSIcon.png",
  "NHRL (Icon).png",
  "NHRL.png",
  "SendCutSend (Icon).png",
  "SendCutSend.png",
  "UROP (Icon).png",
  "UROP.jpg",
  // "ZTLTech (Icon).png",
  "ZTLTech.png",
]
  .filter((name) => name.endsWith(".png") && !name.includes("Icon"))
  .map((name, idx) => ({
    id: idx,
    content: <Skeleton />,
    className: `md:col-span-${Math.floor(Math.random() * 2) + 1}`,
    thumbnail: `/images/SponsorLogos/${name}`,
  }));

export default function Sponsors() {
  // const sponsorItems = sponsors.map((name, index) => ({
  //   header: (
  //     <motion.div
  //       className="h-full w-full"
  //       whileHover={{
  //         scale: 1.05,
  //         zIndex: 50, // Bring to front on hover
  //         transition: {
  //           type: "spring",
  //           stiffness: 400,
  //           damping: 25,
  //         },
  //       }}
  //       style={{
  //         zIndex: index % 2 === 0 ? 2 : 1,
  //       }}
  //     >
  //       <Image
  //         src={`/images/SponsorLogos/${name}`}
  //         alt={name}
  //         width={300}
  //         height={300}
  //         className="m-2 h-full w-full object-contain p-2"
  //         priority
  //       />
  //     </motion.div>
  //   ),
  //   className: cn(
  //     index % Math.floor(Math.random() * 3) === 0 ? "md:col-span-2" : "",
  //     "-ml-6 -mt-6", // Negative margins for overlap
  //     "relative hover:z-10", // Positioning context and hover z-index
  //   ),
  // }));

  return (
    <BackgroundLines className=" bg-custom-gradient-radial relative flex h-screen w-full items-center justify-center p-24 px-4">
      <LayoutGrid cards={sponsors} />
    </BackgroundLines>
  );
}
//   <BentoGrid className="mx-auto max-w-full gap-2">
//     {sponsorItems.map((item, i) => (
//       <BentoGridItem
//         key={i}
//         header={item.header}
//         className={cn(
//           "rounded-md  backdrop-blur-sm",
//           "transition-all duration-300",
//           item.className,
//         )}
//       />
//     ))}
//   </BentoGrid>
