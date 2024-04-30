import { ShieldCheck } from "lucide-react";
import React from "react";
import "./Functionality.css";
interface FunctionalityGridTopProps {
  title: string;
  desc: string;
}
function FunctionalityGridTop({ title, desc }: FunctionalityGridTopProps) {
  return (
    <div className="box-functionality flex flex-col gap-4 p-6 border border-t-0">
      <div className="icon-box hover:shadow-xl  border-black border-2 border-primary bg-primary  rounded-3xl w-12 h-12 flex justify-center items-center ">
        <ShieldCheck className="icon" />
      </div>
      <h3 className="font-bold ">
        {title}
        <br></br>
        <span> {desc}</span>
      </h3>
    </div>
  );
}

export default FunctionalityGridTop;
