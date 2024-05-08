"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import "./tabs.css";
import ContentTabs from "./ContentTabs";
import { CyberMonitorData, CyberOutData } from "./Data";
import { SearchIcon } from "lucide-react";

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const handleActiveTab = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div
      id="jak"
      className="tabs pb-24 border-t-2 z-10 relative  "
      // style={{
      //   background: "url('/assets/images/backgroundtop.png')",
      //   backgroundPosition: "bottom",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div
        className="gradient absolute h-full w-full -z-10 "
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.20) 0%, rgba(221,221,221,0.25) 100%)",
        }}
      ></div>
      <MaxWidthWrapper>
        <div className="title flex flex-col items-center justify-center py-24 ">
          <h2>
            Poznaj pełną
            <span className="text-primary"> moc ochrony</span>
          </h2>
          <p className="text-center max-w-4xl text-muted-foreground ">
            Odkryj zaawansowane technologie stojące za naszą ochroną
          </p>
        </div>
        <div className="box min-h-[700px]  rounded-2xl  flex  p-4 gap-12 justify-center items-center">
          <div className="left flex flex-col gap-4">
            <div className="searchBar bg-white border-2 h-9 items-center rounded-xl flex flex-row ">
              <SearchIcon size={18} className="m-1.5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="outline-none"
              />
            </div>
            <div className="left-tab bg-white z-10 p-2 flex flex-col justify-center gap-2  scrollable-tabs border-2 rounded-xl">
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 1 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(1)}
                >
                  CyberOut
                </Button>
              </div>
              <div className="tab ">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 2 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(2)}
                >
                  CyberMonitor
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 3 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(3)}
                >
                  CyberLog
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 4 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(4)}
                >
                  CyberLeakProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 5 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(5)}
                >
                  CyberSOC
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 6 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(6)}
                >
                  CyberAut
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 7 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(7)}
                >
                  CyberMobileProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 8 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(8)}
                >
                  CyberMailProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 9 ? " bg-black hover:bg-black text-white" : ""
                  }`}
                  onClick={() => handleActiveTab(9)}
                >
                  CyberNetProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 10
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(10)}
                >
                  CyberCritProtect Mini
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 11
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(11)}
                >
                  CyberCritProtect Standard
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 12
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(12)}
                >
                  CyberCritProtect Premium
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 13
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(13)}
                >
                  CyberWebVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 14
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(14)}
                >
                  CyberInVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 15
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(15)}
                >
                  CyberPhish
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 16
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(16)}
                >
                  CyberinPentest
                </Button>
              </div>
              <div className="tab">
                <Button
                  className={`rounded-xl normal-case ${
                    activeTab === 17
                      ? " bg-black hover:bg-black text-white"
                      : ""
                  }`}
                  onClick={() => handleActiveTab(17)}
                >
                  CyberAppPentest
                </Button>
              </div>
            </div>
          </div>

          <div className="right h-[700px] flex flex-1 ">
            <ContentTabs
              className={activeTab === 1 ? "active-content " : "content"}
              title="CyberOut"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 2 ? "active-content " : "content"}
              title="CyberMonitor"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberMonitorData}
            />
            <ContentTabs
              className={activeTab === 3 ? "active-content " : "content"}
              title="CyberLog"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 4 ? "active-content " : "content"}
              title="CyberLeakProtect"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 5 ? "active-content " : "content"}
              title="CyberSOC"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 6 ? "active-content " : "content"}
              title="CyberAut"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 7 ? "active-content " : "content"}
              title="CyberMobileProtect"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 8 ? "active-content " : "content"}
              title="CyberMailProtect"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 9 ? "active-content " : "content"}
              title="CyberNetProtect"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 10 ? "active-content " : "content"}
              title="CyberCritProtect Mini"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 11 ? "active-content " : "content"}
              title="CyberCritProtect Standard"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 12 ? "active-content " : "content"}
              title="CyberCritProtect Premium"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 13 ? "active-content " : "content"}
              title="CyberWebVul"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 14 ? "active-content " : "content"}
              title="CyberInVul"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 15 ? "active-content " : "content"}
              title="CyberPhish"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 16 ? "active-content " : "content"}
              title="CyberinPentest"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 17 ? "active-content " : "content"}
              title="CyberAppPentest"
              desc="Ochrona przed złośliwym oprogramowaniem"
              data={CyberOutData}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Tabs;
