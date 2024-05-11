import React from "react";
import MenuItem from "./menuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-3 py-5">
        <div className="flex items-center gap-x-5">
          <MenuItem path="/" title="Home" Icon={AiFillHome} />
          <MenuItem path="/about" title="About" Icon={BsFillInfoCircleFill} />
        </div>

        <div className="flex items-center gap-x-4">
          <ThemeSwitch />{" "}
          <Link href={"/"} className="flex items-center gap-x-1">
            <h3 className=" bg-amber-500 text-2xl font-bold py-1 px-2 rounded-lg">
              IMDB
            </h3>
            <span className="text-xl font-bold ">basic</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
