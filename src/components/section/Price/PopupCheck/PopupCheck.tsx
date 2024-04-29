"use client";
import { Button } from "@/components/ui/button";
import { sendContactForm } from "@/lib/contactApi";
import { X } from "lucide-react";
import React, { useState } from "react";
import { basicData, variableData } from "../Data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface PopupCheckProps {
  onClose: () => void;
}

const PopupCheck: React.FC<PopupCheckProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [quantities, setQuantities] = useState(
    variableData.reduce((acc, product) => {
      acc[product.variable] = 0;
      return acc;
    }, {})
  );
  const [basicQuantities, setBasicQuantities] = useState(
    basicData.reduce((acc, data) => {
      acc[data.title] = 0; // Inicjalizacja ilości na 0
      return acc;
    }, {})
  );
  const [toggle, setToggle] = useState<number>(1);
  const [priceCheck, setPriceCheck] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  const handleCloseCheck = () => {
    setPriceCheck(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQuantityChange = (productName, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: value,
    }));
  };

  const handleBasicQuantityChange = (title, value) => {
    setBasicQuantities((prevBasicQuantities) => ({
      ...prevBasicQuantities,
      [title]: value,
    }));
  };

  const onSubmit = async () => {
    const dataToSubmit = {
      email: email,
      quantities: quantities,
      basicQuantities: basicQuantities, // Dodaj to
      duration: toggle, // Okres trwania umowy
    };
    await sendContactForm(dataToSubmit);
  };

  return (
    <MaxWidthWrapper className="price">
      <div className="top mx-auto py-20 text-center flex justify-center">
        <h2 className="text-4xl uppercase tracking-tighter">
          Okres trwania umowy
        </h2>
      </div>
      <div className="bottom flex flex-col gap-4">
        <div className="top  bg-secondary justify-center flex gap-2 flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-6 rounded-xl p-2">
          <Button
            className={
              toggle === 1
                ? "bg-black text-white hover:bg-black hover:text-white"
                : ""
            }
            onClick={() => handleToggle(1)}
            size="lg"
            variant="default"
          >
            12 miesięcy
          </Button>
          <Button
            className={
              toggle === 2
                ? "bg-black text-white hover:bg-black hover:text-white"
                : ""
            }
            onClick={() => handleToggle(2)}
            size="lg"
            variant="default"
          >
            24 miesięcy
          </Button>
          <Button
            className={
              toggle === 3
                ? "bg-black text-white hover:bg-black hover:text-white"
                : ""
            }
            onClick={() => handleToggle(3)}
            size="lg"
            variant="default"
          >
            36 miesięcy
          </Button>
        </div>
        <div className="box flex flex-col gap-6 lg:flex-row">
          <div className="left order-2 md:order-2 lg:order-1 bg-secondary rounded-xl p-6 flex flex-col justify-between ">
            <div className="left-box-content flex flex-col gap-2 ">
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
                      handleBasicQuantityChange(
                        data.title,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </label>
              ))}
            </div>
            <div className="bottom-box mt-4 md:mt-0 flex flex-col gap-2 lg:gap-4 md:gap-4">
              <label className="flex flex-col gap-4">
                <input
                  className="p-2 rounded-md"
                  type="email"
                  placeholder="Twój adres email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>

              <Button
                className="rounded-sm "
                variant="default"
                type="submit"
                onClick={onSubmit}
              >
                Wyślij
              </Button>
              <Button variant="secondary">
                Skontaktuj się telefonicznie &rarr;
              </Button>
              <div className="info">
                <label>
                  <input type="checkbox" />
                  <span className="ml-2">
                    Akcpetuje polityke prywatności...
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="right order-1 md:order-1 lg:order-2 flex flex-col w-full bg-secondary rounded-xl p-6">
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
                  {product.variable}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PopupCheck;
