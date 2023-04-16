import MainContent from "@/libs/Components/MainContent/MainContent";
import SideMenu from "@/libs/Components/Sidemenu/Sidemenu";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Main Div  */}
      <div className="grid grid-cols-12 h-screen">
        {/* aside bar  */}
        <div className="aside_bar col-span-2   bg-[#202123]">
          <SideMenu />
        </div>
        {/* main_content */}
        <div className="main_content col-span-10  bg-[#343541] relative">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
