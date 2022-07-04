import React from "react";

import { PlayIcon } from "@/assets/icons";

const Trivia = ({
  emoji = "🏀",
  title = "Sports",
  description = "Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit Lorem ipsum dolor sit amet adipicing elit",
  link,
}) => {
  return (
    <div className="ml-20 mt-20 bg-gradient-to-b from-trivial-yellow-1 to-white relative w-[31.734375rem] h-[5.906rem] rounded-[7.5px]">
      <div className="flex items-center pt-2">
        <div className="flex flex-row pl-[1.453rem] pr-[1.688rem]">
          <p className=" text-trivial-emoji-lg">{emoji}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="clash-wide font-medium text-trivial-lg">{title}</h2>
          <p className="line-clamp-2 mt-[2px] inter-tight max-w-[16.219rem] text-trivial-md text-trivial-gray-3">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-[0.9rem] right-[0.9rem]">
        <PlayIcon />
      </div>
    </div>
  );
};

export default Trivia;
