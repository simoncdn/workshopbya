/* eslint-disable react/no-unescaped-entities */
import PagesTitle from "@/components/reusable-ui/PagesTitle";
import styles from "@/styles";
import Head from "next/head";
import { motion } from "framer-motion";
import { packs } from "@/constants/constants";
import { BsCheck2Square } from "react-icons/bs";
import { sectionPageAnimate } from "@/animation/animation";

const freeServiceAnimate = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, delay: 2.2 },
  },
};

export default function services() {
  return (
    <>
      <Head>
        <title>Workshop By A | Tarifs</title>
        <meta
          name="description"
          content="Connectez-vous avec votre audience et augmentez votre présence en ligne grâce a mon expertise en gestion de communauté. Workshop by A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* color-white bug fixed */}
      <div className="bg-white"></div>

      <motion.section
        initial={sectionPageAnimate.initial}
        animate={sectionPageAnimate.animate}
        variants={sectionPageAnimate}
        className={`${styles.boxWidth} ${styles.paddingX} pb-[100px] pt-[40px]`}
      >
        <PagesTitle label="TARIFS" />

        <div
          className={`${styles.flexCol} items-center sm:items-start sm:grid grid-cols-3 gap-8 mt-10`}
        >
          {packs.map((pack) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: pack.animationDelay },
              }}
              key={pack.title}
              className={`card bg-${pack.cardColor} text-${pack.textColor} ${styles.flexCol} items-center sm:w-max-[350px] sm:w-[100%] ss:w-[70%] w-[100%] h-[100%] py-4 rounded-t-full min-h-[450px] `}
            >
              <h4
                className={`${styles.heading3} text-${pack.textColor}  mt-10`}
              >
                {pack.title}
              </h4>
              <div
                className={`h-[1px] w-[30px] bg-${pack.textColor} mt-4`}
              ></div>

              <p className=" w-100% text-center py-4 font-text">
                à partir de {pack.price}€ ht/mois
              </p>

              <ul
                className={`flex flex-col gap-2 mt-5 mb-10 flex-1 w-[100%] sm:px-10 xs:px-20 px-6`}
              >
                {pack.description.map((item, index) => (
                  <li key={index} className="flex relative">
                    <div className="mr-4 relative top-[2px]">
                      <BsCheck2Square />
                    </div>
                    <p className={`${styles.text}`}>{item}</p>
                  </li>
                ))}
              </ul>

              <p className={`${styles.text}`}>Engagement 6 mois</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={freeServiceAnimate.initial}
          animate={freeServiceAnimate.animate}
          variants={freeServiceAnimate}
          className={`${styles.text} mt-8 bg-tertiary py-1 px-2 w-fit text-white`}
        >
          <p>#Offert : Refont bio pour tout achat d'un pack</p>
        </motion.div>
      </motion.section>
    </>
  );
}
