import React from "react";

import { SearchIcon } from "@/assets/icons";

const SearchBar = () => {
  return (
    <div className="w-[32.391rem] h-[3.422rem] flex relative rounded-trivial-default bg-trivial-white-2 border border-trivial-yellow-2">
      <span className="absolute -mr-[10rem] z-10 top-[0.95rem] left-[1.4rem]">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="rounded-trivial-default w-full pl-14 pb-0.5 focus:outline-none placeholder:text-sm placeholder:mb-2 placeholder:text-trivial-gray-3"
        placeholder="Search for trivia. Eg: American History"
      />
    </div>
  );
};

export default SearchBar;
