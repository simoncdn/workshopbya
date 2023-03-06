import { packs } from "@/constants/constants";
import styles from "@/styles/index";
import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import SectionTitle from "../reusable-ui/SectionTitle";

export default function Packs() {
  return (
    <section
      className={`${styles.paddingX} ${styles.gap} relative flex my-[100px] flex-col`}
    >
      <SectionTitle title="Mes offres" id="packs" />

      <div
        className={`${styles.flexCol} items-center sm:items-start sm:grid grid-cols-3 gap-8 mt-10`}
      >
        {packs.map((pack) => (
          <div
            key={pack.title}
            className={`card bg-${pack.cardColor} text-${pack.textColor} flex flex-col items-center sm:w-max-[350px] sm:w-[100%] ss:w-[70%] w-[100%] h-[100%] py-4 rounded-t-full min-h-[450px]`}
          >
            <h4 className={`${styles.heading3} text-${pack.textColor}  mt-10`}>
              {pack.title}
            </h4>
            <div className={`h-[1px] w-[30px] bg-${pack.textColor} mt-4`}></div>

            <p className=" w-100% text-center py-4">
              à partir de {pack.price}€ ht/mois
            </p>

            <ul
              className={`flex flex-col gap-2 mt-5 mb-10 flex-1 w-[100%] sm:px-10 xs:px-20 px-6`}
            >
              {pack.description.map((item, index) => (
                <li key={index} className="flex relative">
                  <div className="mr-4 relative top-[2px]">
                    <BsCheck2Square />
                  </div>
                  <p className={`${styles.text}`}>{item}</p>
                </li>
              ))}
            </ul>

            <p className={`${styles.text}`}>Engagement 6 mois</p>
          </div>
        ))}
      </div>
    </section>
  );
}
