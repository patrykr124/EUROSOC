import React from "react";
import BoxContent from "./BoxContent";

interface ContentTabsProps {
  className: string;
  title: string;
  data: Array<{ id: number; topic: string; topicDesc: string }>;
  desc: string;
}
function ContentTabs({ className, title, data, desc }: ContentTabsProps) {
  return (
    <div className="content-box flex justify-center ">
      <div className={className}>
        <div className="middle-side gap-10  flex flex-col ">
          <div className="title  px-4">
            <h3 className="text-3xl font-bold">{title}</h3>
            <h4>{desc}</h4>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-5  ">
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
