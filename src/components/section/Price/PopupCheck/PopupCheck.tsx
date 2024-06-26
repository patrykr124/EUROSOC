"use client";
import { Button } from "@/components/ui/button";
import { sendContactForm } from "@/lib/contactApi";
import React, { useState } from "react";
import { basicData, variableData } from "../Data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import VariableLayout from "../VariableLayout";
import BasicLayout from "../BasicLayout";
import ButtonLayount from "../ButtonLayount";

interface Quantities {
  [key: string]: number;
}

interface BasicQuantities {
  [key: string]: number;
}

const PopupCheck = () => {
  const [email, setEmail] = useState<string>("");
  const [quantities, setQuantities] = useState<Quantities>(
    variableData.reduce((acc: Quantities, product) => {
      acc[product.variable] = 0;
      return acc;
    }, {})
  );
  const [basicQuantities, setBasicQuantities] = useState<BasicQuantities>(
    basicData.reduce((acc: BasicQuantities, data) => {
      acc[data.title] = 0; // Inicjalizacja ilości na 0
      return acc;
    }, {})
  );
  const [toggle, setToggle] = useState<number>(1);
  const [hover, setHover] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleQuantityChange = (productName: string, value: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productName]: value,
    }));
  };

  const handleBasicQuantityChange = (title: string, value: number) => {
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
      <div className="top mx-auto py-16 text-center flex justify-center">
        <h2 className="text-5xl font-bold tracking-tighter">
          Okres trwania umowy
        </h2>
      </div>
      <div className="bottom flex flex-col gap-4">
        <div className="top">
          <ButtonLayount toggle={toggle} handleToggle={handleToggle} />
        </div>
        <div className="box flex flex-col gap-6 lg:flex-row">
          <div className="left order-2 md:order-2 lg:order-1 bg-secondary rounded-xl p-6 flex flex-col justify-between ">
            <div className="left-box-content flex flex-col gap-2 ">
              <BasicLayout
                basicQuantities={basicQuantities}
                handleBasicQuantityChange={handleBasicQuantityChange}
              />
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
            <VariableLayout
              quantities={quantities}
              handleQuantityChange={handleQuantityChange}
              hover={hover}
              setHover={setHover}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PopupCheck;
