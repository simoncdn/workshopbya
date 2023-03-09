/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ellipse from "../../assets/ellipse.svg";
import styles from "@/styles";
import Button from "../reusable-ui/Button";
import SectionTitle from "../reusable-ui/SectionTitle";
import aboutpic from "../../assets/WorkshopbyA-About.jpg";

export default function About() {
  return (
    <section
      className={`${styles.paddingX} ${styles.paddingY} ${styles.gap} relative flex sm:flex-row flex-col-reverse items-center`}
    >
      <div className="absolute sm:w-[30%] w-[55%] left-0 sm:top-[0%] ss:top-[40%] top-[40%]">
        <Image src={ellipse} alt="ellipse" />
      </div>

      {/*LEFT PART*/}
      <div className="sm:w-6/12 relative w-full flex justify-center sm:mt-0 ">
        <Image
          src={aboutpic}
          alt="alizeeplazen"
          className="relative sm:w-[100%] ss:w-[70%] z-[100%]  rounded-t-full"
        />
      </div>

      {/*RIGHT PART*/}
      <div
        className={`${styles.flexCol} sm:items-start items-center sm:w-6/12 relative`}
      >
        <SectionTitle title="À propos" id="about" />

        <p className={`${styles.paragraph} mt-10`}>
          Bonjour, je m'appelle Alizée et je suis une jeune entrepreneure
          passionnée par la communication digitale. Tout a commencé lorsque j'ai
          réalisé des études dans le domaine de la coiffure à l'âge de 14 ans.
          Bien que j'ai aimé ce métier, j'ai rapidement compris que ma véritable
          passion résidait ailleurs...
        </p>

        <Button label="En savoir plus" route="/about" />
      </div>
    </section>
  );
}
