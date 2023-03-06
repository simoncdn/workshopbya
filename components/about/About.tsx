import Image from "next/image";
import React from "react";
import photoAbout from "../../assets/photoAbout.png";
import ellipse from "../../assets/ellipse.svg";
import styles from "@/styles";
import Button from "../reusable-ui/Button";
import SectionTitle from "../reusable-ui/SectionTitle";

export default function About() {
  return (
    <section
      className={`${styles.paddingX} ${styles.paddingY}  ${styles.gap} relative flex sm:flex-row flex-col-reverse items-center`}
    >
      <div className="absolute sm:w-[30%] w-[55%] left-0 sm:top-[0%] ss:top-[40%] top-[40%]">
        <Image src={ellipse} alt="ellipse" />
      </div>

      {/*LEFT PART*/}
      <div className="sm:w-6/12 relative w-full flex justify-center sm:mt-0 mt-[100px]">
        <div className="bg-secondary sm:w-[400px] sm:h-[450px] ss:w-[45%] xs:w-[70%] w-[100%] h-[400px] rounded-t-[50%] relative">
          <Image
            src={photoAbout}
            alt="alizeeplazen"
            className="absolute bottom-0 right-0 left-0 sm:w-[100%] w-[100%]"
          />
        </div>
      </div>

      {/*RIGHT PART*/}
      <div
        className={`${styles.flexCol} sm:items-start items-center sm:w-6/12 relative`}
      >
        <SectionTitle title="À propos" id="about" />

        <p className={`${styles.paragraph} mt-10`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eius
          explicabo quidem neque id ipsam assumenda ducimus eveniet saepe
          excepturi sed voluptate deserunt, animi modi quos enim, voluptatibus,
          odit tempora alias. Voluptas amet adipisci laudantium ea eveniet
          accusamus vel vitae.
        </p>

        <Button label="En savoir plus" route="/about" />
      </div>
    </section>
  );
}
