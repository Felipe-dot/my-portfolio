"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "Sobre" },
  { url: "/portfolio", title: "Portfólio" },
  { url: "/contact", title: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

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
          <span className="text-white  ml-1 mr-1">Felipe</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            dot
          </span>
        </Link>
      </div>
      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3  justify-end">
        <Link href="https://github.com/Felipe-dot">
          <Image src="/github.png" alt="github icon" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/felipe-dot/">
          <Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.instagram.com/luisfelipe_az/">
          <Image
            src="/instagram.png"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* RESPNSIVE MENU */}
      <div className="md:hidden">
        {/* Menu BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <NavLink link={link} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
