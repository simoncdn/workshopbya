import Image from "next/image";
import React from "react";
import image from "../../assets/photoHero.png";
import test from "../../assets/test.png";

export default function RightPart() {
  return (
    <div className="sm:w-6/12 w-full sm:flex hidden justify-center ">
      <div className=" bg-secondary h-[100%] sm:rounded-bl-[180px] overflow-hidden relative sm:pt-10 flex justify-center sm:w-full w-[50%]">
        <Image
          src={test}
          alt="Alizée Plazen"
          className="lg:w-[76%] sm:w-[67%] w-[60%] sm:absolute relative right-[10%] bottom-[-10%] "
        />
      </div>
    </div>
  );
}
