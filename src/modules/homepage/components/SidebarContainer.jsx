import React from "react";

import Profile from "./Profile";
import AwardWrapper from "./AwardWrapper";

const SidebarContainer = () => {
  return (
    <div className="flex flex-col gap-[2.203rem]">
      <Profile />
      <AwardWrapper />
    </div>
  );
};

export default SidebarContainer;
