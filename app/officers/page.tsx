import ClubRow from "./components/ClubRow";
import { ZitRow, AceRow, UAVsRow, PEVsRow, MakerspaceRow } from "../constants";

export interface Officer {
  name: string;
  officerDesc: string;
}
export interface ClubRowProps {
  clubName: string;
  officers: Officer[];
}

export default function Officers() {
  return (
    <div className="bg-blue-dark px-12">
      <p className="pb-14 pt-32 text-center font-display text-8xl">Officers</p>
      <ClubRow {...ZitRow} />
      <ClubRow {...AceRow} />
      <ClubRow {...UAVsRow} />
      <ClubRow {...PEVsRow} />
      <ClubRow {...MakerspaceRow} />
    </div>
  );
}
