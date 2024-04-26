import React from "react";

function PopupInfo({ desc }: { desc: string }) {
  return (
    <div className="absolute z-10  bottom-0 right-6 min-w-96 rounded-2xl bg-white p-6 shadow-lg">
      <p>{desc}</p>
    </div>
  );
}

export default PopupInfo;
