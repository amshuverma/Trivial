import React from "react";

import { NavItem } from ".";
import { MenuIcon } from "@/assets/icons";

const navData = ["💡Trivia", "📜Charts", "🧩About"];

export const NavBar = ({ selected }) => {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-sm font-clash tracking-wide font-medium">
        Trivial.io
      </div>
      <div className="flex gap-8">
        {navData.map((data) => (
          <NavItem name={data} />
        ))}
      </div>
      <div>
        <MenuIcon />
      </div>
    </nav>
  );
};
