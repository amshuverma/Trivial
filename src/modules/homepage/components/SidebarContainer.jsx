import React from "react";

import Profile from "./Profile";
import AwardWrapper from "./AwardWrapper";

const SidebarContainer = () => {
  return (
    <div className="flex flex-col">
      <Profile />
      <AwardWrapper />
    </div>
  );
};

export default SidebarContainer;
