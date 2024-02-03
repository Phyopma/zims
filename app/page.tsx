import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import OurClubs from "./components/OurClubs";
import MakerspaceDescription from "./components/MakerspaceDescription";
// turn off scroll x

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100%] overflow-x-hidden flex-col items-center justify-between">
      <Hero />
      <About />
      <OurClubs />
      <MakerspaceDescription />
    </main>
  );
}
