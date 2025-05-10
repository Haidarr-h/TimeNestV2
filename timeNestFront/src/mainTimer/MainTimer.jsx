import React, { useState, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MainTimer = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div className="container-main">
          <CircularProgressbar
            value={count}
            text={count}
            className="h-[300px] w-auto"
          />
          <button onClick={() => setCount(count + 1)}>increament</button>
          <br />
          <button onClick={() => setCount(count - 1)}>decresease</button>
        </div>
      </section>
    </>
  );
};

export default MainTimer;
