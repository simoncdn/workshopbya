/* eslint-disable react/no-unescaped-entities */
import styles from "@/styles";
import Head from "next/head";
import React from "react";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Workshop By A | Erreur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="images/png" sizes="50x50" href="/favicon.png" />
      </Head>
      <section className={`${styles.boxWidth} ${styles.flexCenter}`}>
        <div className={`${styles.flexCol} items-center`}>
          <h1 className="md:text-[150px] sm:text-[100px] text-[50px] font-bold">
            Erreur 404
          </h1>
          <p className="md:text-[42px] sm:text-[26px] text-[18px]">
            Whoops ! Une erreur s'est produite.
          </p>
        </div>
      </section>
    </>
  );
}
