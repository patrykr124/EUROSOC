import { Button } from "@/components/ui/button";
import React from "react";

function ButtonLayout({ toggle, handleToggle }) {
  return (
    <div className=" bg-secondary justify-center flex gap-2 flex-col lg:flex-row md:flex-row md:gap-6 lg:gap-6 rounded-xl p-2">
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
  );
}

export default ButtonLayout;
