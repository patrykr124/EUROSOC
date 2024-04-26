import React from "react";
import { basicData } from "./Data";

interface BasicLayoutProps {
  id: number;
  title: string;
}

function BasicLayout() {
  return (
    <div className="flex  gap-4 flex-col">
      <h3 className="font-semibold">Podstawowe dane:</h3>
      <div className="left-box-content flex flex-col gap-2 ">
        {basicData.map((data) => (
          <div
            key={data.id}
            className="box flex flex-row gap-4 justify-between items-center "
          >
            <p>{data.title}</p>
            <input
              className="w-14 h-7 px-2 rounded-sm "
              type="number"
              min={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicLayout;
