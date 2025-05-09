import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PomodoroTimerCircle = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto">
      <CircularProgressbar value={count} text={count} className="h-[300px] w-auto" />
      <button onClick={() => setCount(count + 1)}>increament</button>
      <br />
      <button onClick={() => setCount(count - 1)}>decresease</button>
    </div>
  );
};

export default PomodoroTimerCircle;
