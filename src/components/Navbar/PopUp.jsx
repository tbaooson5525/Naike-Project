export default function PopUp({ children, open, onOpenPopUp }) {
  return (
    <div className="">
      <button
        onClick={onOpenPopUp}
        className="text-black   focus:ring-2 focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none dark:focus:ring-blue-800"
        type="button"
      >
        <div className="flex justify-center">
          <span>Click</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div
        className={`
          ${open ? "fixed" : "hidden"} 
          top-0 right-0 !z-40 h-screen p-4  bg-white w-80 `}
      >
        {children}

        {/*  */}
        <button onClick={onOpenPopUp} className="flex justify-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
  );
}
