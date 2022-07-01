import clsx from "clsx";
import React from "react";

export const NavItem = ({ name, isSelected = false }) => {
  return (
    <div
      className={clsx(
        "px-3 py-1 rounded-md font-inter text-xs font-medium text-trivial-gray-4",
        isSelected ? "bg-trivial-yellow-2" : ""
      )}
    >
      {name}
    </div>
  );
};
