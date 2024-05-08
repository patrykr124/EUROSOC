import React from "react";
import { basicData } from "./Data";

function BasicLayout({ handleBasicQuantityChange, basicQuantities }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="title">
        <h3>Podstawowe dane:</h3>
      </div>
      <div className="basicProducts">
        {basicData.map((data) => (
          <label
            key={data.id}
            className="box flex flex-row gap-4 py-1 justify-between items-center"
          >
            <p>{data.title}:</p>
            <input
              className="w-14 h-7 px-2 rounded-sm"
              type="number"
              min={0}
              value={basicQuantities[data.title]}
              onChange={(e) =>
                handleBasicQuantityChange(data.title, parseInt(e.target.value))
              }
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default BasicLayout;
