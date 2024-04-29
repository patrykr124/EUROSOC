"use client";
import React, { useEffect, useState } from "react";
import { variableData } from "./Data";
import { Info } from "lucide-react";
import PopupInfo from "./PopupInfo";

interface variableLayoutProps {
  id: number;
  variable: string;
  desc: string;
}

function VariableLayout({ updateFormData }) {
  const [Hover, setHover] = useState<number | null>(null);
  const [values, setValues] = useState({});

  const handleChange = (id, value) => {
    const productInfo = variableData.find((item) => item.id === id);
    if (!productInfo) return; // dodatkowe zabezpieczenie, gdyby data była niekompletna

    setValues((prev) => ({
      ...prev,
      [productInfo.variable]: value, // zmiana z id na nazwę produktu
    }));
  };

  useEffect(() => {
    updateFormData({ products: values }); // przekazujemy obiekt produktów
  }, [values, updateFormData]);

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
              value={values[data.id] || 0}
              onChange={(e) => handleChange(data.id, parseInt(e.target.value))}
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
