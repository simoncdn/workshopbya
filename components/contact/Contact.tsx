import styles from "@/styles";
import Image from "next/image";
import React from "react";
import imageAlizee from "../../assets/photoHero.png";
import Button from "../reusable-ui/Button";
import SectionTitle from "../reusable-ui/SectionTitle";

export default function Contact() {
  return (
    <section
      className={`${styles.paddingX} ${styles.gap} ${styles.marginX} py-6 relative flex mt-[100px] flex-col bg-secondary sm:items-start items-center`}
    >
      <SectionTitle title="Contact" id="contact" />

      <div className="flex w-[100%]">
        <form
          action=""
          className="sm:w-[60%] w-[100%] sm:items-start items-center flex flex-col gap-[40px] "
        >
          <div className="sm:w-[100%] ss:flex-row flex-col w-[100%] flex gap-[40px]">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nom"
              required
              className={`${styles.text} ${styles.input} sm:w-6/12  w-[100%] py-2 px-4 `}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className={`${styles.text} ${styles.input} sm:w-6/12 w-[100%]  py-2 px-4 `}
            />
          </div>

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={1}
            className={`${styles.text} ${styles.input} w-[100%] py-2 px-4 `}
          ></textarea>
          <Button label="Envoyez" route="" />
        </form>

        <Image
          src={imageAlizee}
          alt="alizeeplazen"
          className="w-[35%] absolute sm:block hidden right-0 bottom-0"
        />
      </div>
    </section>
  );
}
