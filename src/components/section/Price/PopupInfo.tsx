import React from "react";

function PopupInfo({ desc }: { desc: string }) {
  return (
    <div className="absolute z-10  md:bottom-0 md:left-6 left-8 md:min-w-96 min-w-56 rounded-2xl bg-white p-6 shadow-lg">
      <p>{desc}</p>
    </div>
  );
}

export default PopupInfo;
