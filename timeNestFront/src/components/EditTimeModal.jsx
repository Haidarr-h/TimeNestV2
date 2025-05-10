import React, { useState } from "react";
// this page is supposed to be show and hide our edit modal

const EditTimeModal = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <div className="relative p-8">
        {/* this is our DialogTrigger button, clicking this means open the modal*/}
        <button
          className="px-2 py-1 border rounded-md"
          onClick={() => setIsEditOpen(true)}
        ></button>

        {/* this is the dialog page (it renders when isEditOpen == True) */}
        {isEditOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded shadow-lg"
            >
              <h2>Edit Timer & Projects</h2>
              <button
                onClick={() => setIsEditOpen(false)}
                className="rounded-full bg-green-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditTimeModal;
