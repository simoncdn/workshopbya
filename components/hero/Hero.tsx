import styles from "@/styles/index";
import Image from "next/image";
import stain from "../../assets/stain.svg";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

export default function Hero() {
  return (
    <section
      className={`${styles.paddingX} ${styles.gap} relative flex justify-center  pb-[100px]`}
    >
      <div className="lg:hidden absolute top-[-30%] left-[0] block ">
        <Image src={stain} alt="stain" />
      </div>

      <LeftPart />
      <RightPart />
    </section>
  );
}
