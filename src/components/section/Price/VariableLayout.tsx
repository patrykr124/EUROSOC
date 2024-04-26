"use client";
import React, { useState } from "react";
import { variableData } from "./Data";
import { Info } from "lucide-react";
import PopupInfo from "./PopupInfo";

interface variableLayoutProps {
  id: number;
  variable: string;
  desc: string;
}

function VariableLayout() {
  const [Hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold ">Warianty:</h3>
      <div className="right-box-content  flex flex-col gap-2">
        {variableData.map((data) => (
          <div key={data.id} className="box  items-center flex flex-row gap-4 ">
            <input
              className="w-16 h-7 px-2 rounded-sm font-normal"
              type="number"
              min={0}
            />
            <div className="icon relative ">
              <Info
                className="cursor-pointer"
                onMouseEnter={() => setHover(data.id)}
                onMouseLeave={() => setHover(null)}
                size={20}
                strokeWidth={1.5}
              />

              {Hover === data.id && <PopupInfo desc={data.desc} />}
            </div>

            <p>{data.variable}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VariableLayout;
