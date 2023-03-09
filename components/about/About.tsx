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
      <div className="sm:w-6/12 relative w-full flex justify-center sm:mt-0 mt-[100px]">
        <div className="bg-secondary sm:w-[100%] sm:h-[500px] ss:w-[45%] xs:w-[70%] w-[100%] h-[400px] rounded-t-[50%] relative overflow-hidden">
          <Image
            src={aboutpic}
            alt="alizeeplazen"
            className="absolute bottom-[-10%] sm:w-[100%] w-[100%]"
          />
        </div>
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
