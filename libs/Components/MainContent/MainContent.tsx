import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Image from "next/image";
import ChatMessage from "../ChatMessage/ChatMessage";
import { BACKEND_BASE_URL } from "@/libs/config/const";

const MainContent = ({ chatLog, setChatLog }: any) => {
  const [input, setInput] = useState<any>("");
  const [chatHistory, setChatHistory] = useState<any>([]);

  function Loader({ element }: any) {
    const [loadingText, setLoadingText] = useState("");

    const loadInterval = setInterval(() => {
      // Update the text content of the loading indicator
      setLoadingText((loadingText) => {
        const newLoadingText = loadingText + ".";
        return newLoadingText.length > 3 ? "" : newLoadingText;
      });
    }, 300);

    return <span>{loadingText}</span>;
  }
  function TypingText({ element, text }: any) {
    const [index, setIndex] = useState(0);

    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return null;
  }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  const typeText = (element: any, text: any) => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  const handleCallAi = async () => {
    console.log(input);
    let newChatLog = [...chatLog, { user: "me", message: `${input}` }];
    setInput("");
    setChatLog(newChatLog);

    const response = await fetch(`${BACKEND_BASE_URL}/ai/ask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: newChatLog.map((message: any) => message?.message).join("\n"),
      }),
    });

    const data = await response.json();
    await setChatLog([
      ...newChatLog,
      { user: "gpt", message: `${data?.data}` },
    ]);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const newChatHistory = [
      ...chatHistory,
      {
        isAi: false,
        value: data.get("prompt"),
        uniqueId: generateUniqueId(),
      },
    ];

    setChatHistory(newChatHistory);

    e.target.reset();

    const response = await fetch(`${BACKEND_BASE_URL}/ai/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.get("prompt"),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'

      const newChatHistory = [
        ...chatHistory,
        {
          isAi: true,
          value: parsedData,
          uniqueId: generateUniqueId(),
        },
      ];

      setChatHistory(newChatHistory);
    } else {
      const err = await response.text();
      alert(err);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="Chat_box">
          <div className="chat_log h-3/4 overflow-y-scroll">
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
