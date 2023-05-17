import React, { useState } from "react";
import PopUp from "./PopUp";

export default function DrawerBuild({ open, onOpen, openPopUp, onOpenPopUp }) {
  //   const [openPopUp, setOpenPopUp] = useState(false);
  //   function handleOpenPopUp() {
  //     setOpenPopUp(!openPopUp);
  //   }

  return (
    <div>
      <div
        className={`${
          !open ? "fixed" : "hidden"
        }    flex-col border-none outline-none transition duration-300 ease-in-out :transform-none min-[960px]:hidden`}
      >
        {/* Menu Button */}
        <button
          type="button"
          onClick={onOpen}
          className=" text-[#111111] hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center mr-3 min-[960px]:mr-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div>
        {/* drawer component */}
        <div
          className={`${
            open ? "fixed" : "hidden"
          }  right-0 top-0 h-screen z-[1045] flex w-80   flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out  :transform-none`}
        >
          <div className="m-1">
            <div className="flex justify-end">
              <button onClick={onOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <PopUp open={openPopUp} onOpenPopUp={onOpenPopUp} />
          </div>
        </div>
      </div>
    </div>
  );
}
