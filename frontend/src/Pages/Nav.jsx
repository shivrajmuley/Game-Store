import React from "react";
import { GiGamepadCross } from "react-icons/gi";
import { GrNotification } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
const Nav = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center w-max gap-48">
        <GiGamepadCross className="text-5xl flex-0 " />
        <div className="flex items-center">
          <input
            placeholder="Search Games"
            type="search"
            className="bg-stone-300 w-[600px] py-2 px-4 rounded-lg"
          />
          <IoSearch className="text-lg relative right-9 opacity-50" />
        </div>
      </div>
      <div className="flex items-center gap-6 ">
        <GrNotification className="text-xl " />
        <GoDotFill className="relative right-[39px] bottom-1 text-xl" />
        <img
          src="images/profile.png"
          alt="avatar"
          className="h-14 w-14 object-cover rounded-full "
        />
        <GoDotFill className="relative right-[44px] top-5 text-green-600 text-2xl" />
      </div>
    </div>
  );
};

export default Nav;
