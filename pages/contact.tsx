/* eslint-disable @next/next/no-img-element */
import PagesTitle from "@/components/reusable-ui/PagesTitle";
import { client, urlFor } from "@/lib/sanity.client";
import styles from "@/styles";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionPageAnimate } from "@/animation/animation";
import Form from "@/components/form/Form";

export default function Contact({ advices }: any) {
  let maxIndex = advices.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < maxIndex - 1) {
        setIndex(index + 1);
      }
      if (index === maxIndex - 1) {
        setIndex(0);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [index, maxIndex]);

  return (
    <>
      <Head>
        <title>Workshop By A | Contact</title>
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
        className={`${styles.paddingX} ${styles.marginX} ${styles.boxWidth} ${styles.flexCol} relative items-center  pt-[40px]`}
      >
        <PagesTitle label="CONTACT" />
        <div className={`${styles.flexStart} w-[100%] min-h-[350px] mb-10`}>
          <div className="flex w-[400px] h-[auto]">
            <Image
              key={index}
              src={urlFor(advices[index].mainImage.asset._ref).url()}
              alt={advices[index].alt}
              width={400}
              height={200}
              className="animate-slideShow h-fit "
            />
          </div>
        </div>

        <Form />
      </motion.section>
    </>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "advices"]';
  const advices = await client.fetch(query);

  return {
    props: { advices },
  };
};
