import { Button } from "@/components/ui/button";
import { sendContactForm } from "@/lib/contactApi";
import { X } from "lucide-react";
import React, { useState } from "react";

interface PopupCheckProps {
  onClose: () => void;
}

const initValue = { email: "" };
const initState = { values: initValue };

const PopupCheck: React.FC<PopupCheckProps> = ({ onClose }) => {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    await sendContactForm(values);
  };

  console.log(values.email);
  return (
    <div className="bg-black/30 shadow-2xl border-none flex z-20 justify-center items-center w-screen h-screen fixed top-0 left-0 right-0 bottom-0">
      <div className="box relative bg-white w-2/3 h-2/3 flex flex-col justify-center items-center rounded-xl">
        <div className="top flex h-1/3 flex-col justify-center items-center">
          <h3 className="text-4xl">Podaj adres Email aby otrzymać wycenę</h3>
          <p className="mt-4 text-center text-muted-foreground max-w-prose">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            officiis atque excepturi saepe earum repellat fuga voluptates
            dolorem quam iure?
          </p>
        </div>
        <div className="bottom flex ">
          <label className="flex flex-col gap-4">
            <input
              className="bg-black/10 rounded-sm px-8 py-2"
              value={values.email}
              type="email"
              placeholder="Twój adres email"
              name="email"
              required
              onChange={handleChange}
            />
            <Button
              disabled={!values.email}
              className="rounded-sm "
              variant="default"
              type="submit"
              onClick={onSubmit}
            >
              Wyślij
            </Button>
          </label>
        </div>
        <div className="absolute top-4 p-2 right-4 cursor-pointer  hover:bg-gray-200 rounded-3xl transition-0.4 duration-500 ease-in-out">
          <X onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default PopupCheck;
