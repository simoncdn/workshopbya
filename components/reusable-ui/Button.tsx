import styles from "@/styles";
import { useRouter } from "next/router";
import React from "react";

type buttonProps = {
  label: string;
  route: string;
};

export default function Button({ label, route }: buttonProps) {
  const router = useRouter();
  return (
    <div className="ss:w-fit w-[100%] sm:pt-8 pb-4 pt-14 flex justify-center ">
      <button
        onClick={() => router.push(`${route}`)}
        className={`${styles.text} text-white bg-black py-3 px-6 rounded-sm`}
      >
        {label}
      </button>
    </div>
  );
}
