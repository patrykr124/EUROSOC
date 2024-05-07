import { ShieldCheck } from "lucide-react";
import React, { ReactNode } from "react";
import "./Functionality.css";
interface FunctionalityGridTopProps {
  title: string;
  desc: string;
  className?: string;
  icon: ReactNode;
}
function FunctionalityGridBottom({
  title,
  desc,
  className,
  icon,
}: FunctionalityGridTopProps) {
  return (
    <div
      className={`box-functionality flex flex-col gap-4 p-6 border-2 border-b-0 border-t-0 border-l-0 ${className}`}
    >
      <div className="icon-box hover:shadow-xl  border-black border-2 border-primary bg-primary  rounded-3xl w-12 h-12 flex justify-center items-center ">
        {icon}
      </div>
      <h3>
        {title}
        <br></br>
        <p className="max-w-xl font-light"> {desc}</p>
      </h3>
    </div>
  );
}

export default FunctionalityGridBottom;
