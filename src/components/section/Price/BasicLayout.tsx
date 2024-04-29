import React from "react";
import { basicData } from "./Data";
<<<<<<< Updated upstream

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

=======
interface BasicLayoutProps {
  basicQuantities: { [key: string]: number };
  handleBasicQuantityChange: (title: string, value: number) => void;
}
function BasicLayout({
  basicQuantities,
  handleBasicQuantityChange,
}: BasicLayoutProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="title">
        <h3>Dane podstawowe:</h3>
      </div>
      <div className="basicProduct">
        {basicData.map((data) => (
          <label
            key={data.id}
            className="box flex flex-row gap-4 justify-between items-center"
          >
            <p>{data.title}</p>
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

>>>>>>> Stashed changes
export default BasicLayout;
