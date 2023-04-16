import React from "react";

const InputField = ({ setInput, input, handleCallAi }: any) => {
  return (
    <div className="w-[85%] mx-auto p-10">
      <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-gray-900/50 text-white bg-[#42434f] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.10)]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="m-0 w-full resize-none border-[#42434f] bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0  pl-2 md:pl-0 outline-none "
        />
        <button
          onClick={handleCallAi}
          //   disabled=""
          className="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:text-gray-400 hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 mr-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputField;
