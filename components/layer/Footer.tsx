import { socialMedias } from "@/constants/constants";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCol} items-center`}
    >
      <div
        className={`${styles.flexStart} xs:gap-20 gap-4 w-full justify-center xs:flex-row  flex-col pt-20 pb-4`}
      >
        <div className="">
          <h4 className={`font-primary font-title md:text-lg text-[14px]`}>
            Entrez en contact
          </h4>
          <div className="h-[1px] w-[30px] bg-primary"></div>
          <ul className="md:text-base text-[12px] pt-2">
            <li>
              <a href="mailto:workshopbya@gmail.com">workshopbya@gmail.com</a>
            </li>
            <li>
              <a href="tel:+33638703834">06.38.70.38.34</a>
            </li>
          </ul>
        </div>

        <Link href="/" className="ss:block hidden">
          <Image src={logo} alt="logo" width={70} />
        </Link>

        <div className="">
          <h4 className="font-primary font-title md:text-lg text-[14px]">
            Mes réseaux sociaux
          </h4>
          <div className="h-[1px] w-[30px] bg-primary"></div>
          <ul className="flex pt-3 gap-2 md:text-base text-[14px]">
            {socialMedias.map((media) => (
              <Link key={media.id} href={media.link}>
                {media.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4 text-[10px]">© Copyright 2023 - Cardona Simon</div>
    </div>
  );
}
