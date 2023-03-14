import { socialMedias } from "@/constants/constants";
import styles from "@/styles";
import Link from "next/link";
import Button from "../reusable-ui/Button";
import { motion } from "framer-motion";

const sectionPartAnimate = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
  },
};

export default function LeftPart() {
  return (
    <motion.div
      initial={sectionPartAnimate.initial}
      animate={sectionPartAnimate.animate}
      variants={sectionPartAnimate}
      className={`${styles.flexCol} sm:items-start items-center sm:w-6/12  sm:pt-10 sm:mt-0 mt-16`}
    >
      <h1 className={`${styles.heading1} flex flex-wrap overflow-hidden`}>
        COMMUNITY MANAGER
      </h1>
      <h3 className={`${styles.heading3} pt-4 pb-6 `}>Alizée Plazen</h3>
      <p className={`${styles.paragraph} sm:pt-4 pt-0`}>
        Connectez-vous avec votre audience et augmentez votre présence en ligne
        grâce a mon expertise en gestion de communauté.
      </p>

      <Button label="Contactez-moi" route="/contact" />

      <div className="ss:w-fit w-[100%] justify-center flex gap-1 items-start">
        {socialMedias.map((media) => (
          <Link
            href={media.link}
            key={media.id}
            className="lg:text-[30px] text-[24px] "
          >
            {media.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
