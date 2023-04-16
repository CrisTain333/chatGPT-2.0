import React from "react";

const SideMenu = () => {
  return (
    <div>
      <div className="p-2">
        {/* button div  */}
        <div className="aside_button">
          <button className="w-full flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20">
            <span className="mr-3">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
