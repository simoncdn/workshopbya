import styles from "@/styles";
import { motion } from "framer-motion";

type PagesTitleProps = {
  label: string;
};

const titlePageAnimate = {
  initial: { y: 100 },
  animate: { y: 0, transition: { duration: 0.8, delay: 0.2 } },
};
const titlePageUnderlineAnimate = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.8, delay: 0.2 } },
};

export default function PagesTitle({ label }: PagesTitleProps) {
  return (
    <div className="flex flex-col items-center pb-12 pt-5">
      <h1 className={`${styles.heading1} text-center overflow-hidden`}>
        <motion.span
          initial={titlePageAnimate.initial}
          animate={titlePageAnimate.animate}
          variants={titlePageAnimate}
          className=" inline-block"
        >
          {label}
        </motion.span>
      </h1>
      <motion.div
        initial={titlePageUnderlineAnimate.initial}
        animate={titlePageUnderlineAnimate.animate}
        variants={titlePageUnderlineAnimate}
        className="h-[1px] w-[60px] bg-primary mt-6"
      ></motion.div>
    </div>
  );
}
