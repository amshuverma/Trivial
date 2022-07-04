import React from "react";

import SidebarContainer from "../components/SidebarContainer";
import TriviaContainer from "../components/TriviaContainer";

const Homepage = () => {
  return (
    <div className="min-w-[44.672rem] flex justify-start gap-2">
      <SidebarContainer />
      <TriviaContainer />
    </div>
  );
};

export default Homepage;
