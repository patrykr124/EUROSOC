import React from "react";
import BoxContent from "./BoxContent";

interface ContentTabsProps {
  className: string;
  title: string;
  data: Array<{ id: number; topic: string; topicDesc: string }>;
}
function ContentTabs({ className, title, data }: ContentTabsProps) {
  return (
    <div className="content-boxflex justify-center ">
      <div className={className}>
        <div className="middle-side  flex flex-col justify-center  ">
          <div className="title p-4">
            <h3 className="text-3xl font-bold">{title}</h3>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-5 p-2  ">
            {data.map((item) => (
              <BoxContent
                key={item.id}
                topic={item.topic}
                topicDesc={item.topicDesc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTabs;
