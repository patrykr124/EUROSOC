import { Button } from "@/components/ui/button";
import React from "react";



function ButtonLayout({ toggle, handleToggle }) {
  return (
    <div className=" bg-gradient-to-r from-secondary to-60% to-gray-200 justify-center flex gap-2 flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-6 p-2 rounded-xl">
      <Button
        className={
          toggle === 1
            ? "bg-black text-white hover:bg-black hover:text-white rounded-xl"
            : "rounded-xl"
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
            ? "bg-black text-white hover:bg-black hover:text-white rounded-xl"
            : "rounded-xl"
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
            ? "bg-black text-white hover:bg-black hover:text-white rounded-xl"
            : "rounded-xl"
        }
        onClick={() => handleToggle(3)}
        size="lg"
        variant="default"
      >
        36 miesięcy
      </Button>
    </div>
  );
}

export default ButtonLayout;
