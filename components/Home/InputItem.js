import Image from "next/image";
import React from "react";

function InputItem({ type }) {
  return (
    <div className="bg-slate-200 p-3 rounded-mt-3 flex items-center gap-4">
      <Image
        src={type == "source" ? "/source.png" : "/destination.png"}
        width={15}
        height={15}
        alt={type == "source" ? "source" : "destination"}
      />
      <input
        className="bg-transparent w-full outline-none"
        type="text"
        placeholder={`${type == "source" ? "Pickup" : "Drop"} Location`}
      />
    </div>
  );
}

export default InputItem;
