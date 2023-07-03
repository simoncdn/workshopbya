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
  const [isPackOpen, setIsPackOpen] = useState(false);
  const router = useRouter();

  const handleClick = (navLink: any) => {
    router.push(navLink);
    setIsOpen(false);
    setIsPackOpen(false);
  };
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
        className={`
        w-6/12`}
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
              <div
                // href={navLink.link}
                className={`${styles.text} group relative`}
              >
                {navLink.link ? (
                  <Link href={navLink.link}>{navLink.title}</Link>
                ) : (
                  <div>{navLink.title}</div>
                )}
                <div className="absolute flex-col top-[30px] flex opacity-0 group-hover:opacity-100 gap-2">
                  {navLink.subtitle &&
                    navLink.subtitle.map((sub) => (
                      <Link
                        href={sub.link}
                        key={sub.id}
                        className={`${styles.text} w-max whitespace-nowrap text-black hover:underline`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                </div>
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
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-row-reverse h-full relative ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[24px] relative z-20"
          >
            {isOpen ? <RxCross1 /> : <CgMenuRight />}
          </button>

          {isOpen ? (
            <ul
              className={`${styles.flexBetween} ${styles.glassBg} flex-col md:gap-10 gap-4 px-8 py-4 absolute top-[80%] right-[10%] min-w-[120px] rounded-xl animate-sidebar text-center z-10`}
            >
              {navLinks.map((navLink) => (
                <div key={navLink.id}>
                  <div className={`${styles.text} hover:text-tertiary`}>
                    {navLink.link ? (
                      <Link
                        href={navLink.link}
                        onClick={() => handleClick(navLink.link)}
                      >
                        {navLink.title}
                      </Link>
                    ) : (
                      <button onClick={() => setIsPackOpen(!isPackOpen)}>
                        {navLink.title}
                      </button>
                    )}
                  </div>

                  {navLink.title === "Tarifs" && isPackOpen && (
                    <div
                      className={`${styles.glassBg} rounded-md overflow-hidden absolute flex-col top-[40%] right-[100%] p-2 flex gap-2`}
                    >
                      {navLink.subtitle &&
                        navLink.subtitle.map((sub) => (
                          <a
                            href={sub.link}
                            key={sub.id}
                            onClick={handleClick}
                            className={`${styles.text} w-max whitespace-nowrap text-black hover:underline`}
                          >
                            {sub.title}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          ) : null}
        </div>
      </motion.nav>
    </header>
  );
}
