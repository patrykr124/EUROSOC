import Image from "next/image";
import React from "react";

interface ContentTabsProps {
  className: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}
function ContentTabs({
  className,
  title,
  desc,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
}: ContentTabsProps) {
  return (
    <div className="content-box flex justify-center ">
      <div className={className}>
        <div className="left-side bg-white -ml-14 border-2 rounded-xl flex items-center shadow-xl">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
        <div className="middle-side w-4/5  flex justify-center items-center ">
          <div className=" flex flex-col gap-4 p-4">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="text">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTabs;
