import React from "react";

export default function ItemDropdown({ onHoverOff }) {
  return (
    <div  className="fixed top-0  left-0 translate-y-14 ">
      <div
        onMouseLeave={onHoverOff}
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
  );
}
