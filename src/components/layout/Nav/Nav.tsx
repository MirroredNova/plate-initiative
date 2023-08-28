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

const Nav = () => (
  <nav className="font-sofia bg-white fixed w-full">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-12">
      <div className="flex items-center text-accent_primary text-4xl font-bold">
        <Link href="/">The Plate Initiative</Link>
      </div>
      <div className="flex flex-wrap items-center justify-between">
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
  </nav>
);

export default Nav;
