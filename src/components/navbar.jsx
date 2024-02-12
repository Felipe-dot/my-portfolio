"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 mid:px-12 lg:px-20 xl:48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {/* LINKS */}
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Felipe</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            -dot
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3  justify-end">
        <Link href="">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPNSIVE MENU */}
      <div className="md:hidden">
        {/* Menu BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <NavLink link={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
