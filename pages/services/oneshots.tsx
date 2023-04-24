import React from "react";
import { motion } from "framer-motion";
import { sectionPageAnimate } from "@/animation/animation";
import styles from "@/styles";
import Head from "next/head";
import PagesTitle from "@/components/reusable-ui/PagesTitle";
import { oneShots } from "@/constants/constants";

export default function oneshots() {
  return (
    <>
      <Head>
        <title>Workshop By A | One Shots</title>
        <meta
          name="description"
          content="Connectez-vous avec votre audience et augmentez votre présence en ligne grâce a mon expertise en gestion de communauté. Workshop by A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* color-white bug fixed */}
      <div className="bg-white"></div>
      <div className="bg-grey"></div>
      <motion.section
        initial={sectionPageAnimate.initial}
        animate={sectionPageAnimate.animate}
        variants={sectionPageAnimate}
        className={`${styles.boxWidth} ${styles.paddingX} pb-[100px] pt-[40px]`}
      >
        <PagesTitle label="One Shots" />

        <div className={`${styles.flexCol} items-center gap-10 mt-10`}>
          {oneShots.map((oneshot) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: oneshot.animationDelay },
              }}
              key={oneshot.title}
              className={`card bg-${oneshot.cardColor} text-primary ${styles.flexCol} items-center sm:w-max-[350px] sm:w-[80%] ss:w-[70%] w-[100%] h-[100%] py-4 rounded-3xl min-h-[250px] p-10`}
            >
              <h4 className={`${styles.heading3} text-primary  mt-10`}>
                {oneshot.title}
              </h4>
              <div className={`h-[1px] w-[30px] bg-primary mt-4`}></div>

              <p className=" w-100% text-center py-4 font-text font-bold text-xl">
                À partir de {oneshot.price}€ HT
              </p>
              <p className={`${styles.text} text-center text-primary my-4`}>
                {oneshot.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
