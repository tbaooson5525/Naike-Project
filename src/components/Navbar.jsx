import React, { useState } from "react";
import Drawer from "./Navbar/Drawer";
import DropdownHover from "./Navbar/DropdownHover";

export default function Navbar({}) {
  const [openPopUp, setOpenPopUp] = useState(false);
  function handleOpenPopUp() {
    setOpenPopUp(!openPopUp);
  }

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      <nav className="bg-white fixed w-full  top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  ">
          <a href="" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white pl-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mr-3"
                viewBox="135.5 361.38 1000 356.39"
              >
                <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
              </svg>
            </span>
          </a>
          <div className="flex min-[960px]:order-2 gap-10">
            <DropdownHover>New & Featured</DropdownHover>

          </div>
          <div className="flex min-[960px]:order-2 justify-items-start mr-14">
            {/* Search Button min-960px */}
            <button
              type="button"
              className="text-[#111111] hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center mr-3 min-[960px]:mr-0 "
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>

            {/* Bag Button min-960px */}
            <button
              type="button"
              className="text-[#111111] hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-3 text-center mr-3 min-[960px]:mr-0 "
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>

            {/* Drawer Button */}
            <div className="">
              <Drawer
                open={open}
                onOpen={handleOpen}
                openPopUp={openPopUp}
                onOpenPopUp={handleOpenPopUp}
              />
              <div
                onClick={() => {
                  setOpen(false);
                  setOpenPopUp(false);
                }}
                className={`${open ? "fixed" : "hidden"} 
        h-screen w-screen bg-black z-1040 top-0 left-0 opacity-75 `}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
