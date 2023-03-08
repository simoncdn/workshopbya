import styles from "@/styles";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import cursorProvider from "@/context/CursorContext";
export default function Layer({ children }: any) {
  return (
    <div className={`flex items-center flex-col relative `}>
      <Header />
      <div className={`${styles.boxWidth} flex-1`}>{children}</div>
      <Footer />
    </div>
  );
}
