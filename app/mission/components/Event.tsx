import React from "react";

interface EventProps {
  headline: string;
  body: string;
}

const Event = ({ headline, body }: EventProps) => {
  return (
    <div className="text-star">
      <p className="font-display text-7xl px-14 py-2">{headline}</p>
      <p className="font-body text-2xl w-2/5 px-14 pt-4 text-neutral-300">
        {body}
      </p>
    </div>
  );
};

export default Event;
