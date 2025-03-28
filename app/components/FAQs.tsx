import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

const hardcodedFAQs: FAQ[] = [
  {
    question: "When was ZotBotics founded?",
    answer:
      "ZotBotics was founded in 2017 by a group of UCI students who wanted to create a community for students interested in robotics and engineering.",
  },
  {
    question: "What is the goal of ZotBotics?",
    answer:
      "ZotBotics aims to provide students with the resources and support they need to explore their interests in robotics and engineering. We offer workshops, projects, and events to help students learn new skills and connect with others who share their interests.",
  },
  {
    question: "How can I get involved with ZotBotics?",
    answer:
      "ZotBotics is open to all UCI students, regardless of major or experience level. You can join our club, attend our events, or participate in our projects to get involved with ZotBotics.",
  },
];

const FAQs: React.FC = () => {
  return (
    <div className="flex w-screen flex-col items-center bg-blue py-12">
      <div className="m-4 font-display text-6xl"> FAQs </div>
      <div className="w-[40rem]">
        {hardcodedFAQs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow m-2 bg-base-200">
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
