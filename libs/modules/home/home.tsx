import MainContent from "@/libs/Components/MainContent/MainContent";
import SideMenu from "@/libs/Components/Sidemenu/Sidemenu";
import React, { useState } from "react";

const Home = () => {
  const [chatLog, setChatLog] = useState<any>([
    { user: "gpt", message: "hy Cristain How can i help you" },
    { user: "me", message: "i want to use chatGPT-2.0" },
  ]);
  return (
    <div>
      {/* Main Div  */}
      <div className="grid grid-cols-12 h-screen">
        {/* aside bar  */}
        <div className="aside_bar col-span-2   bg-[#202123]">
          <SideMenu chatLog={chatLog} setChatLog={setChatLog} />
        </div>
        {/* main_content */}
        <div className="main_content col-span-10  bg-[#343541] relative text-white">
          <MainContent chatLog={chatLog} setChatLog={setChatLog} />
        </div>
      </div>
    </div>
  );
};

export default Home;
