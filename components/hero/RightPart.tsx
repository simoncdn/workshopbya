import { motion } from "framer-motion";

const sectionPartAnimate = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0, delay: 0 } },
};
const sectionImgAnimate = {
  initial: { opacity: 0, x: 10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export default function RightPart() {
  return (
    <div className="sm:w-6/12 w-full sm:flex hidden justify-center ">
      <motion.div
        initial={sectionPartAnimate.initial}
        whileInView={sectionPartAnimate.whileInView}
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionPartAnimate}
        className=" bg-secondary h-[100%] sm:rounded-bl-[180px] overflow-hidden relative sm:pt-10 flex justify-center sm:w-full w-[50%]"
      >
        <motion.img
          initial={sectionImgAnimate.initial}
          animate={sectionImgAnimate.animate}
          variants={sectionImgAnimate}
          src="./alizeePlazenCommunityManager.png"
          alt="Alizée Plazen Community Manager"
          className="lg:w-[76%] sm:w-[67%] w-[60%] sm:absolute relative right-[10%] bottom-[-10%]priority"
        />
      </motion.div>
    </div>
  );
}
