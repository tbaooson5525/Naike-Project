import React from "react";

export default function DaisyDropdown() {
  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className="text-[#111111] justify-between inline-block p-4  border-b-2 border-transparent hover:text-gray-600 hover:border-[#111111] transition-none delay-150 m-1"
      >
        Hover
      </label>
      <ul
        tabIndex={0}
        className=" top-0  translate-y-16   dropdown-content menu p-2  w-screen bg-white"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
