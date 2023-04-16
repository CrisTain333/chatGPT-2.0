import React from "react";

const Home = () => {
  return (
    <div>
      {/* Main Div  */}
      <div className="grid grid-cols-12 ">
        {/* aside bar  */}
        <div className="aside_bar col-span-2 border border-black">Left</div>
        {/* main_content */}
        <div className="main_content col-span-10 border border-black">Main</div>
      </div>
    </div>
  );
};

export default Home;
