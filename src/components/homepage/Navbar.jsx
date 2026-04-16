import Link from "next/link";
import React from "react";
import MyLink from "./MyLink";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: `Home`,
      icon : <IoHomeOutline></IoHomeOutline>
    },
    {
      path: "/timeLinePage",
      text: "Timeline",
      icon: <RiTimeLine />
    },
    {
      path: "/stats",
      text: "Stats",
      icon:<ImStatsDots />

    },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item, ind) => (
              <MyLink href={item.path} key={ind} icon={item.icon}>
                {item.text}
              </MyLink>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl">Keen<span className=" text-green-900 ">Keeper</span></a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems.map((item, ind) => (
              <MyLink href={item.path} key={ind} icon={item.icon}>
                {item.text}
              </MyLink>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
