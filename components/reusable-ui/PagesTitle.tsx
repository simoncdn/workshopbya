import styles from "@/styles";
import React from "react";

type PagesTitleProps = {
  label: string;
};

export default function PagesTitle({ label }: PagesTitleProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className={`${styles.heading1} text-center `}>{label}</h1>
      <div className="h-[1px] w-[60px] bg-primary mt-6 mb-12"></div>
    </div>
  );
}
