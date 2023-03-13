import { motion } from "framer-motion";

export default function RightPart() {
  return (
    <div className="sm:w-6/12 w-full sm:flex hidden justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0, delay: 0 } }}
        viewport={{ once: true, amount: 0.5 }}
        className=" bg-secondary h-[100%] sm:rounded-bl-[180px] overflow-hidden relative sm:pt-10 flex justify-center sm:w-full w-[50%]"
      >
        <motion.img
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: 0.2 },
          }}
          exit={{ opacity: 0, x: 10, transition: { duration: 0.4 } }}
          src="./heroRightSide.png"
          alt="Alizée Plazen"
          className="lg:w-[76%] sm:w-[67%] w-[60%] sm:absolute relative right-[10%] bottom-[-10%]priority"
        />
      </motion.div>
    </div>
  );
}
