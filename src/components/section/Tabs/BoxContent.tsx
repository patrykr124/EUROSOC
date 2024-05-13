import React from "react";
interface BoxContentProps {
  topic: string;
  topicDesc: string;
}
function BoxContent({ topic, topicDesc }: BoxContentProps) {
  return (
    <div className="box border-2 space-y-1 rounded-2xl p-3 shadow-lg z-10 bg-white">
      <h5 className="font-bold leading-tight">{topic}</h5>
      <p className="text-sm">{topicDesc}</p>
    </div>
  );
}

export default BoxContent;
