import { Officer } from "../page";

export default function Card(props: Officer) {
  const officer = props;
  return (
    <div className="w-1/3 py-8 px-6">
      <div className="min-h-[14rem] bg-neutral-300 mb-3" />
      {/* <img
        className="bg-neutral-500"
        src={officer.image}
        alt="Card Image"
        width={320}
        height={200}
      /> */}
      <p className="font-body text-2xl">{officer.name}</p>
      <p className="font-body">{officer.officerDesc}</p>
    </div>
  );
}
