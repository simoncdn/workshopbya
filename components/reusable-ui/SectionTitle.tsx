import React from "react";
import styles from "@/styles";
import { motion } from "framer-motion";

type sectionTitleProps = {
  title: string;
  id: string;
};

export default function SectionTitle({ title, id }: sectionTitleProps) {
  const sectionAnimate = {
    initial: { y: 10, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    default: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={"initial"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionAnimate}
      className={`${styles.flexCol} items-center sm:items-start`}
    >
      <h2 id={id} className={`${styles.heading2}`}>
        {title}
      </h2>
      <div className="h-[1px] w-[60px] bg-primary mt-6"></div>
    </motion.div>
  );
}
