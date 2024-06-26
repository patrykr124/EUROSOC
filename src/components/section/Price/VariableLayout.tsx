import React from "react";
import { variableData } from "./Data";
import { Info } from "lucide-react";
import PopupInfo from "./PopupInfo";

interface VariableLayoutProps {
  quantities: { [key: string]: number };
  handleQuantityChange: (variable: string, value: number) => void;
  hover: number | null;
  setHover: (hoverId: number | null) => void;
}

const VariableLayout: React.FC<VariableLayoutProps> = ({
  quantities,
  handleQuantityChange,
  hover,
  setHover,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="title">
        <h3>Warianty usług:</h3>
      </div>
      .variable
      {variableData.map((product) => (
        <label key={product.id} className="flex gap-4 mt-2">
          <div className="box flex gap-4 justify-center items-center">
            <input
              className="w-16 h-7 px-2 rounded-sm font-normal"
              type="number"
              placeholder={`Quantity of ${product.variable}`}
              min="0"
              value={quantities[product.variable]}
              onChange={(e) =>
                handleQuantityChange(product.variable, parseInt(e.target.value))
              }
            />
            <div className="icon relative">
              <Info
                onMouseEnter={() => setHover(product.id)}
                onMouseLeave={() => setHover(null)}
                size={20}
                strokeWidth={1.5}
                className="cursor-pointer"
              />
              {hover === product.id && <PopupInfo desc={product.desc} />}
            </div>
            <div className="product">{product.variable}</div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default VariableLayout;
