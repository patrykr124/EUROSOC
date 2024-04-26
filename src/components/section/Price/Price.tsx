"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BasicLayout from "./BasicLayout";
import VariableLayout from "./VariableLayout";
import PopupCheck from "./PopupCheck/PopupCheck";

function Price() {
  const [toggle, setToggle] = useState<number>(1);
  const [priceCheck, setPriceCheck] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  const handleCloseCheck = () => {
    setPriceCheck(false);
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
            <BasicLayout />
            <div className="bottom-box mt-4 md:mt-0 flex flex-col gap-2 lg:gap-4 md:gap-4">
              <Button
                onClick={() => setPriceCheck((prev) => !prev)}
                variant="default"
              >
                Zobacz cenę
              </Button>
              {priceCheck && <PopupCheck onClose={handleCloseCheck} />}
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
          <div className="right order-1 md:order-1 lg:order-2 flex w-full bg-secondary rounded-xl p-6">
            <VariableLayout />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Price;
