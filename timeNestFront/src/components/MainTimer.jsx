import React, { useState, useRef } from "react";
import PomodoroTimerCircle from "./PomodoroTimerCircle";

const MainTimer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const start = () => {
    intervalRef.current = setInterval(() => {
      console.log("this is console");
    }, 1000);
  };

  const stop = () => {
    console.log("this is stop");
    clearInterval(intervalRef.current);
  };

  return (
    <div className="">
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <br />
      <button onClick={() => setCount(count - 1)}>decresease</button>
      <hr />

      <br />
      <hr />
      <PomodoroTimerCircle></PomodoroTimerCircle>      

    </div>
  );
};

export default MainTimer;
