import React, { useState, useRef, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EditTimeModal from "./EditTimeModal";
import TimerDisplay from "./TimerDisplay";

const MainTimer = () => {
  // total seconds:
  const [duration, setDuration] = useState(25 * 60);
  // countdown:
  const [timeLeft, setTimeLeft] = useState(duration);
  // running flag:
  const [isRunning, setIsRunning] = useState(false);
  // chosen project. default is no project
  const [project, setProject] = useState("No Project");
  // show or hide modal
  const [isEditOpen, setIsEditOpen] = useState(false);

  // function for countdown when isRunning == True
  useEffect(() => {
    // do nothing if it paused (isRunning == false)
    if (!isRunning) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      // TODO: saveSession({project, duration}) (later)
      return;
    }
    // pengurangan 1 detik setiap 1 detik
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    // clean up on pause / unmount
    return () => clearInterval(timerId);
  });

  // RENDER
  return (
    <section className="bg-black h-screen">
      <div className="container-main text-center py-[60px]">
        <div className="space-y-8">
          <div className="w-1/3 mx-auto">
            <TimerDisplay
              className="h-[300px] w-auto mx-auto"
              timeLeft={timeLeft}
              duration={duration}
            ></TimerDisplay>
          </div>

          <h1 className="font-semibold text-2xl uppercase">Selected Project: {project}</h1>

          <div className="flex space-x-2 mb-4 items-center justify-center text-lg font-medium uppercase buttons">
            {isRunning ? (
              <button onClick={() => setIsRunning(false)} className="border uppercase">
                Pause
              </button>
            ) : (
              <button  onClick={() => setIsRunning(true)}>Start</button>
            )}
            <button
              onClick={() => {
                setIsRunning(false);
                setTimeLeft(duration);
              }}
            >
              Reset
            </button>
            <button onClick={() => setIsEditOpen(true)}>Edit</button>
          </div>

          {/* edit dialog */}
          {isEditOpen && (
            <EditTimeModal
              duration={duration}
              setDuration={(val) => {
                setDuration(val);
                setTimeLeft(val);
              }}
              project={project}
              setProject={setProject}
              onClose={() => setIsEditOpen(false)}
            ></EditTimeModal>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainTimer;
