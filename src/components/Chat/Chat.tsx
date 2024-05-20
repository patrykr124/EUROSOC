"use client";
import { Bot, MessageCircleMore } from "lucide-react";
import { useState } from "react";

function Chat() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((prev) => !prev);
  }

  return (
    <div className="chat fixed bottom-10 right-10 z-50 cursor-pointer">
      {show && (
        <div className="boxMessage flex rounded-2xl flex-col mb-10 mr-12 bg-white">
          <div className="top p-5 bg-primary rounded-t-xl ">
            <h3>ChatBot</h3>
          </div>
          <div className="middle">
            <div className="chatMessage">
              <div className="message p-4 h-36">
                <div className="chatIconMessage">
                  <Bot />
                </div>
                <p>Witaj! Jak mogę Ci pomóc?</p>
              </div>
            </div>
          </div>
          <div className="bottom border-t ">
            <textarea
              className="w-full h-12 p-2  rounded-b-xl"
              placeholder="Napisz wiadomość..."
            ></textarea>
          </div>
        </div>
      )}
      <div
        onClick={handleShow}
        className="iconBox flex justify-end hover:scale-105 transition-all"
      >
        <div className="icon bg-primary p-4 rounded-full">
          <MessageCircleMore size={30} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
