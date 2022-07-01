import React from "react";

import { convertStringToTitleCase } from "../utils";

import Neutral from "@/assets/images/Neutral.png";
import Male from "@/assets/images/Male.png";
import Female from "@/assets/images/Female.png";

const mapGenderToProfilePicture = {
  neutral: Neutral,
  male: Male,
  female: Female,
};

const { flag } = require("country-emoji");

const Profile = ({
  name = "Jack Sparrow",
  country = "Netherlands",
  age = "18",
  gender = "Male",
}) => {
  gender = gender.toLowerCase();

  return (
    <div className="w-[11.31rem] h-[13.69rem] mt-20 flex flex-col items-center bg-gradient-to-b from-trivial-yellow-1 to-white text-sm rounded-[0.62rem]">
      {/* Profile picture */}
      <div className="mt-[-2.3rem] rotate-[-4deg]">
        <img
          className="w-[7.69rem] h-[7.69rem]"
          src={mapGenderToProfilePicture[gender]}
          alt="Profile"
        />
      </div>

      {/* Name */}
      <p className="w-full mb-4 -mt-1 text-normal flex-row-center font-medium tracking-wide font-clash">
        {name}
      </p>

      {/* Details */}
      <div className="flex flex-col items-start">
        <p className="flex-row-center gap-2">
          <span className="text-[1.313rem]">{flag(country)}</span>
          <span className="text-[0.703rem]">{country}</span>
        </p>
        <p className="flex-row-center gap-2 mt-2">
          <span className="text-[1.313rem]">📆</span>
          <span className="text-[0.703rem]">{age} years old</span>
        </p>
      </div>

      <div className="text-[0.75rem] font-semibold mt-4 text-blue-500">
        <p>Update</p>
      </div>
    </div>
  );
};

export default Profile;
