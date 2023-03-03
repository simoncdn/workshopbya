import { socialMedias } from "@/constants/constants";
import Link from "next/link";
import React from "react";

export default function LeftPart() {
  return (
    <div className=" sm:w-6/12 pt-10 sm:mt-0 mt-20">
      <h1 className={` font-title lg:text-[72px] xs:text-[58px] text-[42px] `}>
        COMMUNITY <br /> MANAGER
      </h1>
      <h3 className="font-text lg:text-[32px] text-[26px] lg:my-4 my-2">
        Alizée Plazen
      </h3>
      <p className="font-text lg:text-lg sm:text-base text-sm sm:w-[100%] ss:w-[50%] w-[100%] sm:pt-0 pt-4">
        Besoin de donner vie à votre marque ? <br /> Une community manager
        passionnée pour partager votre histoire et libérez votre potentiel sur
        les réseaux sociaux.
      </p>

      <div className="ss:w-fit w-[100%] ss:pt-0 pt-10 flex justify-center ">
        <button className="text-white lg:text-lg sm:text-base text-sm bg-black py-3 px-6 lg:my-14 my-8">
          Contactez-moi
        </button>
      </div>

      <div className="ss:w-fit w-[100%] justify-center flex gap-1 items-start">
        {socialMedias.map((media) => (
          <Link
            href={media.link}
            key={media.id}
            className="lg:text-[30px] text-[24px]"
          >
            {media.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
