import React, { useState, useRef, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  const progressPercentage = (timeLeft / duration) * 100;
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  const progressTimeValue = `${minutes}:${seconds}`;

  // RENDER
  return (
    <>
      <div className="p-8">
        <h1>Project: {project}</h1>
        <div>
          <div>
            <CircularProgressbar
              value={progressPercentage}
              text={progressTimeValue}
              className="h-[300px] w-auto"
            />
          </div>
        </div>

        <div className="flex space-x-2 mb-4">
          {isRunning ? (
            <button onClick={() => setIsRunning(false)} className="border">
              Pause
            </button>
          ) : (
            <button onClick={() => setIsRunning(true)}>Start</button>
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
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsEditOpen(false)}
          >
            <div
              className="bg-white p-6 rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Edit Setting</h2>
              <label className="block mb-2">
                <input
                  type="number"
                  value={duration / 60}
                  onChange={(e) => {
                    const mins = parseInt(e.target.value) || 0;
                    setDuration(mins * 60);
                    setTimeLeft(mins * 60);
                  }}
                  className="ml-2 border px-1"
                />
              </label>
              <label className="block mb-4">
                Project name:
                <input
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="ml-2 border px-1"
                />
              </label>
              <button onClick={() => setIsEditOpen(false)}>
                {" "}
                Save and Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainTimer;
