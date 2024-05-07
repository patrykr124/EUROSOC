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
      className="tabs pb-24 "
      style={{
        background: "url('/assets/images/backgroundtop.png')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      data-aos="fade-up"
    >
      <div className="title flex flex-col items-center justify-center py-24">
        <h2>
          Poznaj pełną
          <span className="text-primary"> moc ochrony</span>
        </h2>
        <p className="text-center max-w-4xl text-muted-foreground ">
          Odkryj zaawansowane technologie stojące za naszą ochroną
        </p>
      </div>
      <MaxWidthWrapper>
        <div className="box rounded-2xl  flex  p-4 gap-12 justify-center items-end">
          <div className="left flex flex-col gap-4">
            <div className="searchBar border-2 rounded-xl flex flex-row ">
              <SearchIcon size={18} className="m-1.5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="outline-none"
              />
            </div>
            <div className="left-tab p-2 flex flex-col justify-center gap-2 max-h-96 scrollable-tabs border-2 rounded-xl">
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(1)}
                >
                  CyberOut
                </Button>
              </div>
              <div className="tab ">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(2)}
                >
                  CyberMonitor
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(3)}
                >
                  CyberLog
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(4)}
                >
                  CyberLeakProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(5)}
                >
                  CyberSOC
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(6)}
                >
                  CyberAut
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(7)}
                >
                  CyberMobileProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(8)}
                >
                  CyberMailProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(9)}
                >
                  CyberNetProtect
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(10)}
                >
                  CyberCritProtect Mini
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(11)}
                >
                  CyberCritProtect Standard
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(12)}
                >
                  CyberCritProtect Premium
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(13)}
                >
                  CyberWebVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(14)}
                >
                  CyberInVul
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(15)}
                >
                  CyberPhish
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(16)}
                >
                  CyberinPentest
                </Button>
              </div>
              <div className="tab">
                <Button
                  className="rounded-xl normal-case"
                  onClick={() => handleActiveTab(17)}
                >
                  CyberAppPentest
                </Button>
              </div>
            </div>
          </div>

          <div className="right flex flex-1 ">
            <ContentTabs
              className={activeTab === 1 ? "active-content " : "content"}
              title="CyberOut"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 2 ? "active-content " : "content"}
              title="CyberMonitor"
              data={CyberMonitorData}
            />
            <ContentTabs
              className={activeTab === 3 ? "active-content " : "content"}
              title="CyberLog"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 4 ? "active-content " : "content"}
              title="CyberLeakProtect"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 5 ? "active-content " : "content"}
              title="CyberSOC"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 6 ? "active-content " : "content"}
              title="CyberAut"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 7 ? "active-content " : "content"}
              title="CyberMobileProtect"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 8 ? "active-content " : "content"}
              title="CyberMailProtect"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 9 ? "active-content " : "content"}
              title="CyberNetProtect"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 10 ? "active-content " : "content"}
              title="CyberCritProtect Mini"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 11 ? "active-content " : "content"}
              title="CyberCritProtect Standard"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 12 ? "active-content " : "content"}
              title="CyberCritProtect Premium"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 13 ? "active-content " : "content"}
              title="CyberWebVul"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 14 ? "active-content " : "content"}
              title="CyberInVul"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 15 ? "active-content " : "content"}
              title="CyberPhish"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 16 ? "active-content " : "content"}
              title="CyberinPentest"
              data={CyberOutData}
            />
            <ContentTabs
              className={activeTab === 17 ? "active-content " : "content"}
              title="CyberAppPentest"
              data={CyberOutData}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Tabs;
