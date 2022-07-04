import clsx from "clsx";
import React from "react";

export const NavItem = ({ name, emoji, isSelected = false }) => {
  return (
    <div
      className={clsx(
        "px-3 py-1 rounded-md font-inter text-xs flex-row-center gap-1 font-normal text-trivial-gray-5",
        isSelected ? "bg-trivial-yellow-2" : ""
      )}
    >
      <span>{emoji}</span>
      <p>{name}</p>
    </div>
  );
};
