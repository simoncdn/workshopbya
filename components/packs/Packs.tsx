import { packs } from "@/constants/constants";
import styles from "@/styles/styles";
import React from "react";
import { BsCheck2Square } from "react-icons/bs";

export default function Packs() {
  return (
    <div
      className={`${styles.boxWidth} relative flex  lg:px-20 ss:px-12 px-4 lg:gap-20 sm:gap-10 gap-0 my-[200px] flex-col`}
    >
      <div className="flex flex-col">
        <h2 id="services" className="font-title text-[48px]">
          Mes offres
        </h2>
        <div className="h-[1px] w-[80px] bg-primary mt-6"></div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {packs.map((pack) => (
          <div
            key={pack.title}
            className={`card bg-${pack.cardColor} text-${pack.textColor} flex flex-col items-center w-max-[350px] py-4 px-12 rounded-t-full`}
          >
            <h4 className="font-text text-[32px] mt-20">{pack.title}</h4>
            <div className={`h-[1px] w-[30px] bg-${pack.textColor} mt-6`}></div>

            <p className="py-4">à partir de {pack.price}€ HT/mois</p>

            <ul className="flex flex-col gap-2 mt-5 mb-10 flex-1 w-[300px] ">
              {pack.description.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-12 gap-8 text-[20px] relative"
                >
                  <div className="absolute top-[4px]">
                    <BsCheck2Square />
                  </div>
                  <p className="col-start-2 col-end-12 text-[20px]">{item}</p>
                </li>
              ))}
            </ul>

            <p>Engagement 6 mois</p>
          </div>
        ))}
      </div>
    </div>
  );
}
