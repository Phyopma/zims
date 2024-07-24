import React from "react";
import Card from "./components/card";
import ACEImage from "../Images/ACE.png";
import Slideshow from "./components/slideshow";
import { HeroParallaxDemo } from "./components/HeroParralax";

const OurMissionPage: React.FC = () => {
  return (
    <>
      <HeroParallaxDemo />
      <div className="mt-[74px] flex min-h-[50vh] min-w-full items-center justify-center bg-blue-light">
        {/* make a large heading using font display that says Our Mission */}
        <div className="text-center">
          <h1 className="font-display text-8xl font-bold">Our Mission</h1>
        </div>
      </div>
      <div className="min-w-full bg-blue-dark px-12 pt-12 text-center">
        <p className="pb-6 font-display text-6xl">
          4 clubs, 1 makerspace, 1 network
        </p>
        <p className="p-2 font-body text-2xl">
          ZOTBotics’ Network at UCI represents an association of 4 distinct
          engineering student organizations working hand in hand to promote
          hands-on project experience and foster creative, self-spirited
          engineering passions in students of all majors and experience.
           Operating out of our humble, abandoned trailer building, we
          specialize in hands-on project experience and personalized guidance
          for passionate students to find the most accessible route towards
          engineers of their own making.
        </p>
        <p className="pb-8 pt-16 font-display text-5xl">
          Our Foundational Values
        </p>
        {/* create a horizantal flex box where the items are centered and spread among the center */}
        <div className="flex flex-row items-center justify-around">
          <Card
            heading="Projects"
            description="If you’re going to learn how to work a 3D printer or build a remote-controlled combat robot or drone, you best believe ZOTBotics will give you the chance to learn them first-hand! Nothing like honing new skills in engineering by actually playing with the toys instead of watching them on a screen."
            image={ACEImage}
          />
          <Card
            heading="Community"
            description="We’re 4 clubs conjoined under one roof for an accumulated member count of over 600- who’s there to not meet and connect with? As one big, supporting family, there is never a boring day’s worth of friends, classmates, or teammates to network with. "
            image={ACEImage}
          />
          <Card
            heading="Fun Engineering"
            description="3D printers, combat robots, drones, and electric unicycles out of a student-built robotics workshop- -what more could you ask for out of the college experience? If nothing else, we’re just a group of robotics fanatics fixated on the next great robotics challenge in building wild toys to enjoy with others."
            image={ACEImage}
          />
        </div>
        <p className="p-4 pt-16 text-center font-display text-6xl">
          Club Events
        </p>
      </div>
      <Slideshow />
    </>
  );
};

export default OurMissionPage;
