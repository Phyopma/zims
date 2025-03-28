"use client";
import React, { useEffect, useState } from "react";

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date("2024-12-31T00:00:00") - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const UpcomingEvents: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-screen flex-col items-center justify-center bg-blue-dark p-12 font-display">
      <div className="m-4  text-8xl">Upcoming Events</div>
      <div className="mb-4 mt-2 text-5xl">ZotBall Battle Royale</div>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="font-mono countdown text-5xl">
            <span
              style={{ "--value": timeLeft.days } as React.CSSProperties}
            ></span>
          </span>
          days
        </div>
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="font-mono countdown text-5xl">
            <span
              style={{ "--value": timeLeft.hours } as React.CSSProperties}
            ></span>
          </span>
          hours
        </div>
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="font-mono countdown text-5xl">
            <span
              style={{ "--value": timeLeft.minutes } as React.CSSProperties}
            ></span>
          </span>
          minutes
        </div>
        <div className="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
          <span className="font-mono countdown text-5xl">
            <span
              style={{ "--value": timeLeft.seconds } as React.CSSProperties}
            ></span>
          </span>
          seconds
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
