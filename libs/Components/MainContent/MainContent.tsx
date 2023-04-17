import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Image from "next/image";
import ChatMessage from "../ChatMessage/ChatMessage";
import { BACKEND_BASE_URL } from "@/libs/config/const";
import Link from "next/link";

const MainContent = ({ chatLog, setChatLog }: any) => {
  const [input, setInput] = useState<any>("");

  const handleCallAi = async () => {
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

  return (
    <div className="">
      <div className="">
        {chatLog.length === 0 ? (
          <>
            {" "}
            <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
              <div className="flex-1 overflow-hidden">
                <div className="react-scroll-to-bottom--css-nvoqx-79elbk h-full dark:bg-gray-800">
                  <div className="react-scroll-to-bottom--css-nvoqx-1n7m0yu">
                    <div className="flex flex-col items-center text-sm dark:bg-gray-800">
                      <div className="w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 text-gray-100">
                        <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
                          ChatGPT-2.0{" "}
                          <span className="text-sm">
                            (By{" "}
                            <Link
                              target="_blank"
                              href="https://github.com/CrisTain333"
                              className="underline"
                            >
                              Cristain
                            </Link>
                            )
                          </span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          <>
            <div className="Chat_box">
              <div className="chat_log max-h-[82vh] overflow-y-scroll scrollbar-hidden">
                {chatLog?.map((e: any, i: any) => {
                  return <ChatMessage key={i} message={e} />;
                })}
              </div>
            </div>
          </>
        )}
        <div className="absolute bottom-0 right-0 left-0">
          <InputField
            input={input}
            setInput={setInput}
            handleCallAi={handleCallAi}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
