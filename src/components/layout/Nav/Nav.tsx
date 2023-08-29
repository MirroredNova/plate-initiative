"use client";

import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Mission", path: "/mission" },
  { name: "PLATE", path: "/plate" },
  { name: "Programs", path: "/programs" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [navOpened, setNavOpened] = React.useState(false);

  return (
    <nav className="font-sofia bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-12">
        <div className="flex items-center text-accent_primary text-4xl font-bold">
          <Link href="/">The Plate Initiative</Link>
        </div>
        <div className="text-accent_primary lg:hidden flex">
          <button onClick={() => setNavOpened((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="lg:flex flex-wrap items-center justify-between hidden">
          <ul className="flex flex-wrap text-secondary_mid hover:text-secondary_light transition ease-in-out duration-200">
            {navItems.map((item) => (
              <li
                className="mr-4 hover:text-secondary_mid transition ease-in-out duration-200"
                key={item.name}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://www.flipcause.com/secure/cause_pdetails/MTQ1MzAz"
            className="text-accent_primary border-2 border-accent_primary rounded-full px-5 py-2 ml-2"
          >
            Donate
          </Link>
        </div>
      </div>
      {navOpened && <div>Nav Opened</div>}
    </nav>
  );
};

export default Nav;
