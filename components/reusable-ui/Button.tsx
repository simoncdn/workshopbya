import styles from "@/styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

type buttonProps = {
  label: string;
  route: string;
};

const buttonDivAnimate = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: 0.2 },
  },
};
const buttonAnimate = {
  style: {
    color: "rgb(0, 0, 0)",
    scale: 1,
  },
  whileHover: {
    color: "rgb(255,255,255)",
    scale: 0.99,
    transition: { duration: 0.6 },
  },
};
const buttonBackgroundAnimate = {
  style: {
    backgroundColor: "rgb(0, 0, 0)",
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: { duration: 0.4 },
  },
};

export default function Button({ label, route }: buttonProps) {
  const router = useRouter();
  const [isHovered, setHovered] = useState<boolean>(false);
  return (
    <motion.div
      initial={buttonDivAnimate.initial}
      whileInView={buttonDivAnimate.whileInView}
      variants={buttonDivAnimate}
      viewport={{ once: true, amount: 0.5 }}
      className="ss:w-fit w-[100%] sm:pt-8 pb-4 pt-14 flex justify-center "
    >
      <motion.button
        style={buttonAnimate.style}
        whileHover={buttonAnimate.whileHover}
        variants={buttonAnimate}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => router.push(`${route}`)}
        className={`${styles.text} ${styles.flexCenter} bg-transparent relative group border border-primary py-3 px-6 rounded-sm`}
      >
        <span className="z-10">{label}</span>
        <BsArrowRight className="ml-2 z-10" />

        {isHovered ? (
          <motion.div
            style={buttonBackgroundAnimate.style}
            animate={buttonBackgroundAnimate.animate}
            variants={buttonBackgroundAnimate}
            className=" w-[0%] left-0 top-0 bottom-0 absolute"
          ></motion.div>
        ) : null}
      </motion.button>
    </motion.div>
  );
}
