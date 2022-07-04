import React from "react";

import Award from "./Award";

const AwardWrapper = ({ awardList = ["⭐️", "👋", "🦧"] }) => {
  return (
    <div className="rounded-trivial-default w-[10.641rem] h-[8.625rem] flex-col-center trivial-gradient">
      <div className="w-full font-clash flex-row-center font-medium text-trivial-lg tracking-wide gap-1">
        <span>🎖</span>
        <p>Awards</p>
      </div>
      <div className="mt-4 flex justify-between gap-2">
        {awardList.map((award) => {
          return <Award emoji={award} />;
        })}
      </div>
      <div className="text-trivial-md font-semibold font-inter mt-4 text-blue-500">
        <p>Update</p>
      </div>
    </div>
  );
};

export default AwardWrapper;
