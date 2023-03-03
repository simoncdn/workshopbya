import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";
import tache from "../../assets/tache.svg";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Hero() {
  return (
    <div
      className={` flex sm:flex-row lg:px-20 ss:px-12 px-4 relative lg:gap-20 sm:gap-10 gap-0 flex-col-reverse pb-12`}
    >
      <div className="tache absolute top-[-20%] left-[0]">
        <Image src={tache} alt="tache" />
      </div>

      <LeftPart />
      <RightPart />
    </div>
  );
}
