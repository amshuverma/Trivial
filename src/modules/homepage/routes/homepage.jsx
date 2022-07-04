import React from "react";

import SidebarContainer from "../components/SidebarContainer";
import TriviaContainer from "../components/TriviaContainer";

const Homepage = () => {
  return (
    <main className="w-[48.750rem] overflow-hidden h-auto flex justify-start gap-[1.641rem] pt-[2.531rem]">
      <SidebarContainer />
      <div className="overflow-auto">
        <TriviaContainer />
      </div>
    </main>
  );
};

export default Homepage;
