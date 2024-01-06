// 1 heading with club-name and 2 rows of officer cards
import { Officer, ClubRowProps } from "../page";
import Card from "./Card";

export default function ClubRow(props: ClubRowProps) {
  const { clubName, officers } = props;

  return (
    <div>
      <p className="font-display text-7xl pt-2 text-start">{clubName}</p>
      <div className="flex flex-wrap text-center">
        {officers.map((officer, index) => (
          <Card key={index} {...officer} />
        ))}
      </div>
    </div>
  );
}
