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
    <nav className="font-sofia bg-white fixed lg:static w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-3 lg:py-7 lg:px-12">
        <div className="flex items-center text-accent_primary text-3xl sm:text-4xl font-bold p-2">
          <Link href="/">The Plate Initiative</Link>
        </div>
        <div className="text-accent_primary lg:hidden flex p-2">
          <button onClick={() => setNavOpened((prev) => !prev)}>
            {navOpened ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            )}
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
      {navOpened && (
        <div className="font-sofia font-bold text-4xl lg:hidden bg-white fixed overflow-hidden w-full px-5 pb-7">
          <ul className="text-secondary_mid">
            {navItems.map((item) => (
              <li
                className="mr-4 hover:text-secondary_mid transition ease-in-out duration-200 py-1"
                key={item.name}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Link
            className="text-accent_primary mt-4 block"
            href="https://www.flipcause.com/secure/cause_pdetails/MTQ1MzAz"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
