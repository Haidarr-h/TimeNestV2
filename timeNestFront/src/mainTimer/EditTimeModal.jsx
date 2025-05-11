import React, { useState } from "react";
// this page is supposed to be show and hide our edit modal

const EditTimeModal = ({
  duration,
  setDuration,
  project,
  setProject,
  onClose,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black"
        onClick={onClose}
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
          <button onClick={onClose}> Save and Close</button>
        </div>
      </div>
    </>
  );
};

export default EditTimeModal;
