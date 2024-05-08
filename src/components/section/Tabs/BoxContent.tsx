import React from "react";
interface BoxContentProps {
  topic: string;
  topicDesc: string;
}
function BoxContent({ topic, topicDesc }: BoxContentProps) {
  return (
    <div className="box border-2 space-y-1 rounded-2xl p-4 shadow-lg z-10 bg-white">
      <h3 className="font-bold">{topic}</h3>
      <p className="text-sm">{topicDesc}</p>
    </div>
  );
}

export default BoxContent;
