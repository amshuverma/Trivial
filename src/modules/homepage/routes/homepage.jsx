import React from "react";

import SidebarContainer from "../components/SidebarContainer";
import TriviaContainer from "../components/TriviaContainer";

const Homepage = () => {
  return (
    <main className="w-[48.750rem] h-auto overflow-scroll flex justify-start gap-[1.641rem]">
      <SidebarContainer />
      <TriviaContainer />
    </main>
  );
};

export default Homepage;
