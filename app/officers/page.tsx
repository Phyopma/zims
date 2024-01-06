import ClubRow from "./components/ClubRow";

export interface Officer {
  name: string;
  officerDesc: string;
}
export interface ClubRowProps {
  clubName: string;
  officers: Officer[];
}
// Gialan Tonthat
// 4th Year | Music & Film/Media Studies
// Merger / President / Project Manager
// Owen Yee
// 4th Year | Mechanical Engineering
// Vice President | Project Lead
// Abrez Hussain
// 2nd Year | Electrical Engineering
// Treasurer
// Maxwell Berger
// 3rd Year | Mechanical Engineering
// Project Lead
// Kian Miremadi
// 2nd Year | Biomedical Engineering
// Project Lead
// Francis Ung
// UCI Alum ‘23
// Graduate Advisor

const ZitRow: ClubRowProps = {
  clubName: "ZIT",
  officers: [
    {
      name: "Gialan Tonthat",
      officerDesc: "Merger / President / Project Manager",
    },
    { name: "Owen Yee", officerDesc: "Vice President | Project Lead" },
    { name: "Abrez Hussain", officerDesc: "Treasurer" },
    { name: "Maxwell Berger", officerDesc: "Project Lead" },
    { name: "Kian Miremadi", officerDesc: "Project Lead" },
    { name: "Francis Ung", officerDesc: "Graduate Advisor" },
  ],
};

// Gialan Tonthat
// 4th Year | Music & Film/Media Studies
// Co-Founder | President | Project Manager
// Nam de Porceri
// 4th Year | Materials Science & Engineering
// Co-Founder | Vice President | Project Lead
// Nova McNaught
// 4th | Mechanical Engineering
// Treasurer
// Filiberto Alvarez
// 3rd Year | Computer Engineering
// Project Lead
// Kenzo Fraser
// 2nd Year | Aerospace Engineering
// Project Lead
// Jake Chutney
// UCI Machine Shop Manager
// Faculty Advisor

const AceRow: ClubRowProps = {
  clubName: "ACE",
  officers: [
    {
      name: "Gialan Tonthat",
      officerDesc: "Co-Founder | President | Project Manager",
    },
    {
      name: "Nam de Porceri",
      officerDesc: "Co-Founder | Vice President | Project Lead",
    },
    { name: "Nova McNaught", officerDesc: "Treasurer" },
    { name: "Filiberto Alvarez", officerDesc: "Project Lead" },
    { name: "Kenzo Fraser", officerDesc: "Project Lead" },
    { name: "Jake Chutney", officerDesc: "Faculty Advisor" },
  ],
};

// Oscar Zaragoza
// 4th Year | Computer Science
// Co-Merger | President
// Gialan Tonthat
// 4th Year | Music & Film/Media Studies
// Co-Merger | Vice President | Project Manager
// Jason Ho
// 3rd Year | Computer Science
// Treasurer
// Kian Miramedi
// 2nd Year | Biomedical Engineering
// Project Mentor
// Bogdan Kovtun
// 3rd Year | Mechanical Engineering
// Senior Design Liason
// Peter Burke
// Professor of Electric Engineering & Computer Science
// Faculty Advisor

const UAVsRow: ClubRowProps = {
  clubName: "UAVs",
  officers: [
    { name: "Oscar Zaragoza", officerDesc: "Co-Merger | President" },
    {
      name: "Gialan Tonthat",
      officerDesc: "Co-Merger | Vice President | Project Manager",
    },
    { name: "Jason Ho", officerDesc: "Treasurer" },
    { name: "Kian Miramedi", officerDesc: "Project Mentor" },
    { name: "Bogdan Kovtun", officerDesc: "Senior Design Liason" },
    { name: "Peter Burke", officerDesc: "Faculty Advisor" },
  ],
};

// PEVs
// Gialan Tonthat
// 4th year | Music & Film/Media Studies
// Founder | President | Group Ride Lead
// Maxwell Berger
// 3rd Year | Mechanical Engineering
// Vice President | Group Ride Lead
// Maximilian Chu
// 4th Year | Psychology
// Treasurer
// Aiden Doyen
// 2nd Year | Undeclared
// Group Ride Lead
// Calvin Nguyen
// 3rd Year | Computer Engineering
// Group Ride Lead
// Jim Jones
// Professor of Informatics
// Faculty Advisor

const PEVsRow: ClubRowProps = {
  clubName: "PEVs",
  officers: [
    {
      name: "Gialan Tonthat",
      officerDesc: "Founder | President | Group Ride Lead",
    },
    {
      name: "Maxwell Berger",
      officerDesc: "Vice President | Group Ride Lead",
    },
    { name: "Maximilian Chu", officerDesc: "Treasurer" },
    { name: "Aiden Doyen", officerDesc: "Group Ride Lead" },
    { name: "Calvin Nguyen", officerDesc: "Group Ride Lead" },
    { name: "Jim Jones", officerDesc: "Faculty Advisor" },
  ],
};

// ZOTBotics’ Makerspace
// Gialan Tonthat
// 4th Year | Music & Film/Media Studies
// Founder | Makerspace Manager
// Kian Miramedi
// 2nd Year | Biomedical Engineering
// Makerspace Staff
// Nam de Porceri
// 4th Year | Materials Science & Engineering
// Makerspace Staff
// Francis Ung
// UCI Alum ‘23
// Makerspace Advisor
// Moses Choi
// Lab Technician, FabWorks
// Facility Supervisor
// Derek Irwin
// Lab Technician, FabWorks
// Facility Supervisor
// Ben Dolan
// Director of FabWorks
// ICF Facility Manager
// Board Application
// So you think you got what it takes to lead? Apply if you dare!

const MakerspaceRow: ClubRowProps = {
  clubName: "Makerspace",
  officers: [
    {
      name: "Gialan Tonthat",
      officerDesc: "Founder | Makerspace Manager",
    },
    { name: "Kian Miramedi", officerDesc: "Makerspace Staff" },
    { name: "Nam de Porceri", officerDesc: "Makerspace Staff" },
    { name: "Francis Ung", officerDesc: "Makerspace Advisor" },
    { name: "Moses Choi", officerDesc: "Facility Supervisor" },
    { name: "Derek Irwin", officerDesc: "Facility Supervisor" },
    { name: "Ben Dolan", officerDesc: "ICF Facility Manager" },
  ],
};

export default function Officers() {
  return (
    <div className="bg-blue-dark px-12">
      <p className="font-display text-center text-8xl pt-32 pb-14">Officers</p>
      <ClubRow {...ZitRow} />
      <ClubRow {...AceRow} />
      <ClubRow {...UAVsRow} />
      <ClubRow {...PEVsRow} />
      <ClubRow {...MakerspaceRow} />
    </div>
  );
}
