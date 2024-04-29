import React from "react";
import { variableData } from "./Data";
import { Info } from "lucide-react";
import PopupInfo from "./PopupInfo";

function VariableLayout({
  quantities,
  handleQuantityChange,
  setHover,
  hover,
}: VariableLayoutProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="title">
        <h3>Warianty usług:</h3>
      </div>
      <div className="variantProducts">
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
                  handleQuantityChange(
                    product.variable,
                    parseInt(e.target.value)
                  )
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
    </div>
  );
}

export default VariableLayout;
