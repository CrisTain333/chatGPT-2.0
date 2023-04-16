import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Image from "next/image";
import ChatMessage from "../ChatMessage/ChatMessage";

const MainContent = () => {
  const [input, setInput] = useState<any>("");
  const [chatLog, setChatLog] = useState<any>([
    { user: "gpt", message: "how can i Help You" },
  ]);

  const handleCallAi = async () => {
    console.log(input);
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
  };

  return (
    <div className="">
      <div className="">
        <div className="Chat_box">
          <div className="chat_log ">
            {chatLog?.map((e: any, i: any) => {
              return <ChatMessage key={i} message={e} />;
            })}
          </div>
          <div className="absolute bottom-0 right-0 left-0">
            <InputField
              input={input}
              setInput={setInput}
              handleCallAi={handleCallAi}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
