import React from "react";

const Award = ({ emoji = "❌" }) => {
  return (
    <div className="w-[2.391rem] h-[2.391rem] text-trivial-emoji-sm flex-row-center">
      <div className="bg-trivial-gray-1 rounded-md px-[0.66rem] py-[0.469rem] flex-row-center">
        <p>{emoji}</p>
      </div>
    </div>
  );
};

export default Award;
