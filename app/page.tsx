import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import OurClubs from "./components/OurClubs";
import MakerspaceDescription from "./components/MakerspaceDescription";
import FAQs from "./components/FAQs";
import UpcomingEvents from "./components/UpcomingEvents";
import HistoryOfZotBotics from "./components/HistoryOfZotBotics";
// turn off scroll x

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100%] flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <UpcomingEvents />
      <About />
      <OurClubs />
      <MakerspaceDescription />
      <HistoryOfZotBotics />
      <FAQs />
    </main>
  );
}
