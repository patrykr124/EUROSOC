import React from "react";
interface CountLayoutProps {
  Icon: any;
  count: string | number;
  title: string;
  add?: string;
}
function CountLayout({ Icon, count, title, add }: CountLayoutProps) {
  return (
    <div className="box flex flex-col md:flex-row gap-2 justify-center items-center md:items-start ">
      <div className="left">
        <div className="icon">
          <Icon className="text-primary" size={50} strokeWidth={1.2} />
        </div>
      </div>
      <div className="right flex flex-col gap-2 items-center md:items-start">
        <div className="number">
          <span className="text-3xl font-medium">
            {count} <span className="text-primary">{add}</span>
          </span>
        </div>
        <div className="title text-muted-foreground text-center md:text-start">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CountLayout;
