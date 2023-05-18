import React, { useState } from "react";

export default function DropdownHover({ children }) {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(!hover);
  }
  function handleHoverOff() {
    setHover(!hover);
  }

  return (
    <div className="flex flex-col items-center ">
      <button
        onClick={handleHover}
        onMouseEnter={handleHover}
        className="text-[#111111] justify-between inline-block p-4  border-b-2 border-transparent hover:text-gray-600 hover:border-[#111111] transition-none delay-150 "
      >
        {children}
      </button>
      {hover && (
        <div className="fixed top-0  left-0 translate-y-16 ">
          <div
            onMouseLeave={handleHoverOff}
            className=" bg-white  flex justify-center gap-10   transition-none delay-150 pt-8 pb-10 "
          >
            <div>
              <a href="">
                <h4 className="  items-center text-center ">Featured</h4>
              </a>
              <ul>
                <li>
                  <a href="">asda</a>
                </li>
                <li>
                  <a href="">asda</a>
                </li>
                <li>
                  <a href="">asdas</a>
                </li>
                <li>
                  <a href="">asda</a>
                </li>
                <li>
                  <a href="">asda</a>
                </li>
                <li>
                  <a href="">asdas</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" items-center text-center ">Shop Icons</h4>
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="  items-center text-center ">Best Read</h4>
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-screen w-[110vw] bg-black z-50 opacity-75"></div>
        </div>
      )}
    </div>
  );
}
