import { ShieldCheck } from "lucide-react";
import React, { ReactNode } from "react";
import "./Functionality.css";
interface FunctionalityGridTopProps {
  title: string;
  desc: string;
  desc2: string;
  className?: string;
  icon: ReactNode;
}
function FunctionalityGridTop({
  title,
  desc,
  desc2,
  className,
  icon,
}: FunctionalityGridTopProps) {
  return (
    <div
      className={`box-functionality flex flex-col gap-4 p-6 border-2 border-t-0 xl:border-l-0 items-center md:items-start  ${className}`}
    >
      <div className="icon-box hover:shadow-xl   border-black border-2 border-primary bg-primary  rounded-3xl w-12 h-12 flex justify-center items-center ">
        {icon}
      </div>
      <div className="text flex flex-col items-center md:items-start">
        <h3 className="font-bold  ">{title}</h3>
        <p className="font-light text-base whitespace-break-spaces flex text-center md:text-start">
          {desc}
        </p>
        <p className="font-light text-base whitespace-break-spaces flex text-center md:text-start">
          {desc2}
        </p>
      </div>
    </div>
  );
}

export default FunctionalityGridTop;
