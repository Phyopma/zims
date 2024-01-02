// import { useRef } from "react";
// import { useIsVisible } from "./useIsVisible";

export default function About() {
  const aboutDesc: string[] = [
    "Hone fundamental robotics skills through true hands-on team projects",
    "Team up and connect with fellow Anteater makers",
    "Learn something fun, make something fun, and have fun!",
  ];

  let descMapping = aboutDesc.map((desc) => {
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
      <div className="text-center w-9/12 mx-auto my-12">
        <h1 className="text-5xl font-display font-bold my-6">
          The go-to robotics community at UCI. By Anteaters, for Anteaters.
        </h1>
      </div>
      <div className="text-start w-9/12 mx-auto my-12">
        <h1 className="text-3xl font-display my-6">
          Calling all aspiring makers inspired in the “fun engineering” world of
          robotics…
        </h1>
      </div>
      <div className="text-center w-9/12 mx-auto my-12">
        <div className="flex  py-4 flex-row">
          <div className="flex-1">
            <ul className="font-body text-2xl list-disc text-yellow py-6 text-start">
              {descMapping}
            </ul>
          </div>
          <div className="flex-1">
            <div className="w-full h-full bg-yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
