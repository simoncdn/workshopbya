import React from "react";
import styles from "@/styles";

type sectionTitleProps = {
  title: string;
  id: string;
};

export default function SectionTitle({ title, id }: sectionTitleProps) {
  return (
    <div className={`${styles.flexCol} items-center sm:items-start`}>
      <h2 id={id} className={`${styles.heading2}`}>
        {title}
      </h2>
      <div className="h-[1px] w-[60px] bg-primary mt-6"></div>
    </div>
  );
}
