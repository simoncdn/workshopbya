import styles from "@/styles/styles";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layer({ children }: any) {
  return (
    <div className={`flex items-center flex-col relative h-[100vh]`}>
      <Header />
      <div className={`w-full flex-1`}>{children}</div>
      <Footer />
    </div>
  );
}
