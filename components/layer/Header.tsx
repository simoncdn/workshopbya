import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/styles";
import logo from "../../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full flex  lg:px-20 ss:px-12 px-4  lg:gap-20 gap-10 sm:relative fixed z-20`}
    >
      <div className="w-6/12 md:py-6 py-4">
        <Link href={"/"} className={`flex items-center`}>
          <Image src={logo} alt="alt" className="w-[50px]" />
          <h2 className="sm:flex hidden">Workshop by A</h2>
        </Link>
      </div>

      <nav className=" w-6/12 sm:bg-secondary bg-transparent">
        <ul className="hidden sm:flex items-center justify-between w-full h-full md:gap-10 gap-4 px-6">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.link}
              className={`md:text-lg sm:text-base text-sm hover:text-tertiary`}
            >
              {navLink.title}
            </Link>
          ))}
        </ul>

        <div className="sm:hidden flex flex-row-reverse h-full relative">
          <button
            onClick={() => setIsOpen((prevValue) => !prevValue)}
            className="text-[24px] relative z-20"
          >
            {isOpen ? <RxCross1 /> : <CgMenuRight />}
          </button>

          {isOpen ? (
            <ul className="flex flex-col justify-between items-center md:gap-10 gap-4 px-8 py-4 absolute top-[80%] right-[20%] ss:text-[14px] text-[12px] w-[120px] bg-secondary border rounded-xl animate-sidebar text-center z-10">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.id}
                  href={navLink.link}
                  className={`md:text-lg sm:text-base hover:text-tertiary w-full`}
                >
                  {navLink.title}
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
