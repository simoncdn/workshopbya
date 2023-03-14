import { services } from "@/constants/constants";
import styles from "@/styles";
import Image from "next/image";
import React from "react";
import littleEllipse from "../../assets/littleEllipse.svg";
import cube from "../../assets/serviceBox.svg";
import SectionTitle from "../reusable-ui/SectionTitle";
import { motion } from "framer-motion";
import { sectionAnimate } from "@/animation/animation";

export default function Services() {
  return (
    <section
      className={`${styles.paddingX} ${styles.paddingY} relative flex flex-col`}
    >
      <SectionTitle title="Services" id="services" />

      <div className={`${styles.flexCol} ${styles.gap} sm:mt-0 mt-10`}>
        {services.map((service) => (
          <div
            className={`${styles.flexCol} ${styles.gap} sm:grid grid-cols-2 grid-flow-dense`}
            key={service.id}
          >
            <motion.div
              initial={"initial"}
              whileInView={"onScreen"}
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionAnimate}
              className={` ${
                parseInt(service.id) % 2 === 0
                  ? "col-start-2 col-end-3 "
                  : "col-start-1 col-end-2"
              } ${styles.flexCol} items-center`}
            >
              <div className="w-full flex justify-center sm:justify-start items-center gap-4">
                <div className="relative h-[60px] sm:w-[60px] ss:w-[50px] w-[40px] flex justify-center items-center">
                  <Image
                    src={littleEllipse}
                    alt="ellipse"
                    className="absolute w-[100%]"
                  />
                  <p className={`${styles.heading4} z-20`}>{service.id}</p>
                </div>
                <h3 className={`${styles.heading3} `}>{service.title}</h3>
              </div>
              <p className={`${styles.paragraph} sm:mt-[20px] mt-[10px]`}>
                {service.description}
              </p>
            </motion.div>
            <motion.div
              initial={"initial"}
              whileInView={"onScreen"}
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionAnimate}
              className={` ${
                parseInt(service.id) % 2 === 0
                  ? "col-start-1 col-end-2"
                  : "col-start-2 col-end-3"
              } ${styles.flexCenter}`}
            >
              <div className={`${styles.flexCenter} relative`}>
                <Image src={cube} alt="" className="absolute" />
                <Image
                  src={service.picture}
                  alt={service.alt}
                  className="top-0 right-0 w-[80%] h-[100%] z-10"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
