// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Uriah's Portfolio</a>
      </div>
      <div className=" justify-center">
        <ul className="flex justify-center menu mix-blend-luminosity px-1">
          <li className="py-1 p-5">
            <Link href="/">About</Link>
          </li>
          <li className="py-1 p-5">
            <Link href="/contact">Apps</Link>
          </li>
          <li className="py-1 p-5">
            <Link href="/about">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
