"use client";
import { RiGithubFill } from "./icons/github";
import { GmailIcon } from "./icons/gmail";
import { motion, Variants } from "motion/react";
import { Button } from "./Button";
import React, { useState } from "react";
import { splitWordIntoChars } from "../utils/splitwordintochars";
import { useClickAway } from "@uidotdev/usehooks";
import { MynauiChevronDown } from "./icons/chevrondown";
const charVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const menuVariants: Variants = {
  closed: {
    visibility: "hidden",
    opacity: 0,
    scale: 0.5,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      duration: 0.15,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  open: {
    visibility: "visible",

    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.07,
      delayChildren: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
export const Main = () => {
  const myname = "Mahmoud Samir";
  const mytitle = "Full Stack Developer";
  const namechars = splitWordIntoChars(myname);
  const titlechars = splitWordIntoChars(mytitle);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.3, duration: 0.2 }}
      className="w-full h-[95vh] flex flex-col justify-center relative items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[100px] -top-32 -left-32"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute w-[300px] h-[300px]  bg-purple-500/30 rounded-full blur-[100px] bottom-32 -right-32"
      />
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duraiton: 0.7, delay: 1.8 }}
        className="absolute  top-10 left-1/2 z-[100] size-18   -translate-x-1/2 flex items-center justify-center   "
      >
        <a
          href={"https://github.com/mahmoud0p"}
          target="_blank"
          className=" absolute top-0 left-0 hover:text-indigo-500 transition-colors duration-300"
        >
          <RiGithubFill className="size-8" />
        </a>
        <span className="text-xl absolute left-0 bottom-0 font-bold bg-white/20 w-[1px]  h-[6rem] rotate-45 origin-bottom-left"></span>

        <div ref={ref} className="absolute right-0 -bottom-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-indigo-500 transition-colors duration-300 "
          >
            <GmailIcon className="size-8 " />
          </button>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className="absolute top-full md:right-1/2 right-0 md:translate-x-1/2  origin-top shadow-lg shadow-black  mt-2 bg-black overflow-hidden  backdrop-blur-sm rounded-xl border border-neutral-900 p-2 w-fit max-w-[200px] md:max-w-md"
          >
            <motion.a
              variants={itemVariants}
              transition={{ duration: 0.15 }}
              href="mailto:mahmoudsamir@gmail.com"
              className="block group overflow-hidden relative p-2  hover:text-rose-500/90  rounded-lg transition-colors"
            >
              mahmoud7samirr@gmail.com
              <span className="scale-80 w-full h-full right-0 top-0 absolute origin-center bg-rose-400/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:border-rose-500/10 border border-transparent rounded-lg duration-300" />
            </motion.a>
            <motion.a
              variants={itemVariants}
              transition={{ duration: 0.15 }}
              href="mailto:mahmoudsamir@gmail.com"
              className="block group overflow-hidden relative p-2  hover:text-rose-500/90  rounded-lg transition-colors"
            >
              samir0ps404@gmail.com
              <span className="scale-80 w-full h-full right-0 top-0 absolute origin-center bg-rose-400/10 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all group-hover:border-rose-500/10 border border-transparent rounded-lg duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      <svg
        className="w-full h-full absolute top-1/2  left-1/2 -translate-y-1/2  border-white/10 rounded-4xl -translate-x-1/2 z-0"
        viewBox="0 0 100% 100%"
      >
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EF4F4F" />
            <stop offset="100%" stopColor="#7C2C7D" />
          </linearGradient>
          <linearGradient
            id="circleGradient-2"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1B1EA5" />
            <stop offset="100%" stopColor="#2E96F6" />
          </linearGradient>
        </defs>
        <motion.circle
          transition={{ delay: 0.5 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          cx="12%"
          cy="200"
          r="100"
          fill="url(#circleGradient)"
          strokeWidth="2"
          className={"z-[10]"}
        />
        <motion.circle
          transition={{ delay: 0.5 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.1 }}
          cx="83%"
          cy="325"
          r="150"
          fill="url(#circleGradient-2)"
          strokeWidth="2"
          className={"z-[10]"}
        />
        <motion.circle
          transition={{ delay: 0.5 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          cx="21%"
          cy="120"
          r="70"
          fill="url(#circleGradient)"
          strokeWidth="2"
          className={"z-[1]"}
        />
        <motion.circle
          transition={{ delay: 0.5 }}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.15 }}
          cx="75%"
          cy="180"
          r="120"
          fill="url(#circleGradient-2)"
          strokeWidth="2"
          className={"z-[1]"}
        />
      </svg>
      <div className="relative z-10 text-center">
        <motion.p
          initial={"hidden"}
          animate={"visible"}
          transition={{ staggerChildren: 0.05 }}
          className="md:text-2xl sm:text-xl mb-10 text-lg text-neutral-400 font-semibold underline-offset-2   "
        >
          {titlechars.map((char, index) => (
            <motion.span
              transition={{ duration: 0.8 }}
              variants={charVariants}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.h1
          initial={"hidden"}
          animate={"visible"}
          transition={{ staggerChildren: 0.05 }}
          className="lg:!text-[7rem] select-none name md:text-5xl text-4xl text-[#DDDDDD]  z-[100]  "
        >
          {namechars.map((char, index) => (
            <motion.span
              variants={charVariants}
              transition={{ duration: 0.8 }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <svg
          className="absolute overflow-visible  translate-x-1/2   w-full right-1/2  h-[70px] top-full "
          viewBox="0 0 700 50"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#EEE" />
            </linearGradient>
          </defs>
          <motion.path
            transition={{ duration: 0.8, delay: 1 }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M0,30 Q600,0 700,20 T30,10"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            className="filter drop-shadow-[0_0_3px_rgba(255,45,241,0.5)] "
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        animate={{ opacity: 1 }}
        className=" absolute bottom-1/6 flex items-center justify-center gap-5 py-2 px-3"
      >
        <p className=" border bg-white/5 select-none border-neutral-900 rounded-md py-2 px-3 space-x-2">
          <span className="text-orange-300">npm</span> hire Mahmoud
        </p>
        <Button className="rounded-md">
          Run <MynauiChevronDown className="-rotate-90 text-white/30" />
        </Button>
      </motion.div>
    </motion.main>
  );
};
