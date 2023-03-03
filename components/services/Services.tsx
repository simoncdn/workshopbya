import { services } from "@/constants/constants";
import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";
import littleEllipse from "../../assets/littleEllipse.svg";
import cube from "../../assets/serviceBox.svg";

export default function Services() {
  return (
    <div
      className={`${styles.boxWidth} relative flex  lg:px-20 ss:px-12 px-4 lg:gap-20 sm:gap-10 gap-0 my-[200px] flex-col`}
    >
      <div className="flex flex-col">
        <h2 id="services" className="font-title text-[48px]">
          Services
        </h2>
        <div className="h-[1px] w-[80px] bg-primary mt-6"></div>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-20 mt-20 grid-flow-dense">
        {services.map((service) => (
          <>
            <div
              className={
                parseInt(service.id) % 2 === 0
                  ? "col-start-2 col-end-3"
                  : "col-start-1  col-end-2"
              }
            >
              <div className="flex items-center gap-4">
                <div className="relative h-[80px] w-[80px] flex justify-center items-center">
                  <Image
                    src={littleEllipse}
                    alt="ellipse"
                    className="absolute w-[100%]"
                  />
                  <p className="font-title text-[36px] z-20">{service.id}</p>
                </div>
                <h3 className="font-text text-[32px]">{service.title}</h3>
              </div>
              <p className="text-[20px] font-text mt-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                praesentium voluptate inventore, sint aspernatur deleniti
                aperiam nemo dolores qui ex id provident illo fugiat minus ipsa
                dignissimos sunt unde dolor perferendis minima mollitia ullam!
                Officia cum natus qui dignissimos et tempora aspernatur
                distinctio porro! Neque provident ullam expedita odit animi.
              </p>
            </div>
            <div
              className={
                parseInt(service.id) % 2 === 0
                  ? "col-start-1 col-end-2 "
                  : "col-start-2 col-end-3 "
              }
            >
              <Image src={cube} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
