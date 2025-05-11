import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TimerDisplay = ({ timeLeft, duration }) => {
  const progressPercentage = (timeLeft / duration) * 100;
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  const progressTimeValue = `${minutes}:${seconds}`;

  return (
    <>
      <div>
        <CircularProgressbar
        strokeWidth={3}
          value={progressPercentage}
          text={progressTimeValue}
        />
      </div>
    </>
  );
};

export default TimerDisplay;
