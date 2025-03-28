// import { useRef } from "react";
// import { useIsVisible } from "./useIsVisible";

export default function About() {
  const aboutDesc: string[] = [
    "Hone fundamental robotics skills through true hands-on team projects",
    "Team up and connect with fellow Anteater makers",
    "Learn something fun, make something fun, and have fun!",
  ];

  const descMapping = aboutDesc.map((desc) => {
    return (
      <li className="py-2" key={desc}>
        <p className="text-xl text-neutral-400">{desc}</p>
      </li>
    );
  });

  //   const ref1 = useRef(); this is for scroll effects
  //   const ref2 = useRef();
  //   const ref3 = useRef();
  //   const ref4 = useRef();
  //   const isVisible1 = useIsVisible(ref1);
  //   const isVisible2 = useIsVisible(ref2);
  //   const isVisible3 = useIsVisible(ref3);
  //   const isVisible4 = useIsVisible(ref4);

  return (
    <div className="min-h-[70vh] min-w-full bg-blue-dark">
      <div className="mx-auto my-12 w-9/12 text-center">
        <h1 className="my-6 font-display text-5xl font-bold">
          The go-to robotics community at UCI. By Anteaters, for Anteaters.
        </h1>
      </div>
      <div className="mx-auto my-12 w-9/12 text-start">
        <h1 className="my-6 font-display text-3xl">
          Calling all aspiring makers inspired in the “fun engineering” world of
          robotics…
        </h1>
      </div>
      <div className="mx-auto my-12 w-9/12 text-center">
        <div className="flex  flex-row py-4">
          <div className="flex-1">
            <ul className="list-disc py-6 text-start font-body text-2xl text-yellow">
              {descMapping}
            </ul>
          </div>
          <div className="flex-1">
            <div className="mx-8 h-full w-full rounded-lg bg-yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
