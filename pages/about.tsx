/* eslint-disable react/no-unescaped-entities */
import PagesTitle from "@/components/reusable-ui/PagesTitle";
import styles from "@/styles";
import Head from "next/head";
import { motion } from "framer-motion";
import { sectionPageAnimate } from "@/animation/animation";

const aboutTextAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.7, delay: 2 } },
};
const aboutFirstImageAnimate = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1 },
  },
};
const aboutSecondImageAnimate = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.4 },
  },
};

export default function about() {
  return (
    <>
      <Head>
        <title>Workshop By A | À propos</title>
        <meta
          name="description"
          content="Connectez-vous avec votre audience et augmentez votre présence en ligne grâce a mon expertise en gestion de communauté. Workshop by A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.section
        initial={sectionPageAnimate.initial}
        animate={sectionPageAnimate.animate}
        variants={sectionPageAnimate}
        className={`${styles.boxWidth} w-[100%] relative pt-[40px] pb-[100px]`}
      >
        <PagesTitle label="À PROPOS" />

        <div
          className={`${styles.flexColReverse} ${styles.gap}  ${styles.paddingX} items-center sm:flex-row sm:text-left text-center min-h-[550px] relative `}
        >
          <motion.div
            initial={aboutTextAnimate.initial}
            animate={aboutTextAnimate.animate}
            variants={aboutTextAnimate}
            className={`${styles.flexCenter} ${styles.text} ss:w-6/12 w-[100%] h-[100%]`}
          >
            <p>
              Bonjour, je m'appelle Alizée et je suis une jeune entrepreneure
              passionnée par la communication digitale. Tout a commencé lorsque
              j'ai réalisé des études dans le domaine de la coiffure à l'âge de
              14 ans. Bien que j'ai aimé ce métier, j'ai rapidement compris que
              ma véritable passion résidait ailleurs.
              <br />
              <br />
              C'est ainsi que j'ai découvert le métier de community manager et
              je suis tombée amoureuse de cette profession excitante et en
              constante évolution. Mais il n'était pas facile de réaliser une
              reconversion professionnelle. J'ai dû faire preuve de beaucoup de
              persévérance, de courage et de détermination pour atteindre mon
              objectif.
              <br />
              <br />
              Après de longs mois de formation et de travail acharné, j'ai
              finalement réussi à obtenir une certification en "Création et
              développement d'une stratégie de communication digitale" en mars
              2023. C'était une grande réussite pour moi et j'ai décidé de me
              lancer dans l'entrepreneuriat.
              <br />
              <br />
            </p>
          </motion.div>
          <div className={`${styles.flexCenter} ss:w-6/12 w-[100%]  relative`}>
            <motion.img
              initial={aboutFirstImageAnimate.initial}
              animate={aboutFirstImageAnimate.animate}
              variants={aboutFirstImageAnimate}
              src="./workshop-by-a-about.jpg"
              alt="Alizee plazen Community Manager"
              className="sm:w-[80%] w-[70%]"
            />
          </div>
        </div>

        <div
          className={`${styles.flexCol} ${styles.gap}  ${styles.paddingX} items-center sm:flex-row sm:text-left text-center relative sm:py-20 pt-10 sm:bg-secondary lg:my-[100px] `}
        >
          <div className={`${styles.flexCenter} ss:w-6/12 w-[100%]  relative`}>
            <motion.img
              initial={aboutSecondImageAnimate.initial}
              animate={aboutSecondImageAnimate.animate}
              variants={aboutSecondImageAnimate}
              src="./workshop-by-a-2-about.jpg"
              alt="Alizee plazen Community Manager"
              className="sm:absolute max-w-[400px] relative right-0 sm:top-[-250px] sm:w-[85%] w-[70%]"
            />
          </div>
          <motion.div
            initial={aboutTextAnimate.initial}
            animate={aboutTextAnimate.animate}
            variants={aboutTextAnimate}
            className={`${styles.flexCenter} ${styles.text} ss:w-6/12 w-[100%]  h-[100%]`}
          >
            <p>
              Aujourd'hui, je suis fière de pouvoir aider les entreprises à
              développer leur présence en ligne et à atteindre leur public cible
              grâce à mes compétences en marketing digital. J'ai créé ma propre
              entreprise de conseil en communication digitale et je suis
              heureuse de pouvoir aider mes clients à atteindre leurs objectifs.
              <br />
              <br />
              Pour moi, l'entrepreneuriat n'est pas seulement une question de
              travail acharné, mais aussi de passion et de détermination. Je
              suis impatiente de voir ce que l'avenir me réserve et de continuer
              à apprendre et à grandir dans cette profession passionnante.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
