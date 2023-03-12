import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles";
import logo from "../../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <header
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.gap} flex sm:relative fixed top-0  z-20`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0.2 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="w-6/12 md:py-6 py-4"
      >
        <Link href={"/"} className="flex items-center w-fit gap-2">
          <Image src={logo} alt="alt" className="w-[40px]" />
          <h2 className={`${styles.text} sm:flex hidden `}>Workshop by A</h2>
        </Link>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0, delay: 0 } }}
        viewport={{ once: true, amount: 0.5 }}
        className={`${
          router.pathname === "/" ? "sm:bg-secondary" : "bg-transparent"
        } w-6/12`}
      >
        <ul className={`sm:${styles.flexBetween} hidden h-full px-2`}>
          {navLinks.map((navLink) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              key={navLink.id}
            >
              <Link
                href={navLink.link}
                className={`${styles.text} group relative `}
              >
                {navLink.title}

                {navLink.link === router.pathname && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full h-[1px] w-full bg-primary"
                  />
                )}
                <div
                  className={`${
                    router.route === navLink.link
                      ? "opacity-100 h-[0px]"
                      : "opacity-0 group-hover:animate-underline h-[1px]"
                  } w-[100%] rounded-full bg-primary group-hover:opacity-100`}
                ></div>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-row-reverse h-full relative ">
          <button
            onClick={() => setIsOpen((prevValue) => !prevValue)}
            className="text-[24px] relative z-20"
          >
            {isOpen ? <RxCross1 /> : <CgMenuRight />}
          </button>

          {isOpen ? (
            <ul
              className={`${styles.flexBetween} ${styles.glassBg} flex-col md:gap-10 gap-4 px-8 py-4 absolute top-[80%] right-[10%] min-w-[120px] rounded-xl animate-sidebar text-center z-10`}
            >
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.id}
                  href={navLink.link}
                  className={`${styles.text} hover:text-tertiary`}
                >
                  {navLink.title}
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
      </motion.nav>
    </header>
  );
}
