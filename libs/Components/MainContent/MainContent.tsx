import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Image from "next/image";
import ChatMessage from "../ChatMessage/ChatMessage";
import { BACKEND_BASE_URL } from "@/libs/config/const";

const MainContent = () => {
  const [input, setInput] = useState<any>("");
  const [chatLog, setChatLog] = useState<any>([
    { user: "gpt", message: "hy Cristain How can i help you" },
    { user: "me", message: "i want to use chatGPT-2.0" },
  ]);

  const handleCallAi = async () => {
    console.log(input);
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");

    const response = await fetch(`${BACKEND_BASE_URL}/api/v1/ai/ask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: chatLog.map((message: any) => message?.message).join(""),
      }),
    });

    const data = await response.json();
    console.log(data);
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
