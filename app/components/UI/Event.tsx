import React from "react";

interface EventProps {
  headline: string;
  body: string;
}

const Event = ({ headline, body }: EventProps) => {
  return (
    <div className="text-star">
      <p className="px-14 py-2 font-display text-7xl">{headline}</p>
      <p className="px-14 pt-4 font-body text-2xl text-neutral-300 sm:w-full md:w-2/5">
        {body}
      </p>
    </div>
  );
};

export default Event;
