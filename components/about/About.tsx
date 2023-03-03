import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";
import photoAbout from "../../assets/photoAbout.png";
import ellipse from "../../assets/ellipse.svg";
export default function About() {
  return (
    <div
      className={`${styles.boxWidth} relative flex  lg:px-20 ss:px-12 px-4 lg:gap-20 sm:gap-10 gap-0 my-10 mt-[150px]`}
    >
      <div className="absolute w-[30%] left-0 top-[-20%]">
        <Image src={ellipse} alt="ellipse" className="" />
      </div>

      {/*LEFT PART*/}
      <div className="leftPart w-6/12 px-18 flex justify-center ">
        <div className="bg-secondary w-[500px] h-[600px] rounded-t-[50%] relative">
          <Image
            src={photoAbout}
            alt="alizeeplazen"
            className="absolute w-[100%] bottom-0"
          />
        </div>
      </div>

      {/*RIGHT PART*/}
      <div className="rightPart w-6/12 px-18 relative flex flex-col justify-center">
        <h2 className="font-title text-[48px]">A propos</h2>
        <div className="h-[1px] w-[80px] bg-primary mt-6"></div>
        <p className="font-text mt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eius
          explicabo quidem neque id ipsam assumenda ducimus eveniet saepe
          excepturi sed voluptate deserunt, animi modi quos enim, voluptatibus,
          odit tempora alias. Voluptas amet adipisci laudantium ea eveniet
          accusamus vel vitae.
        </p>

        <div className="ss:w-fit w-[100%] ss:pt-0 pt-10 flex justify-center ">
          <button className="text-white lg:text-lg sm:text-base text-sm bg-black py-3 px-6 lg:my-14 my-8">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
