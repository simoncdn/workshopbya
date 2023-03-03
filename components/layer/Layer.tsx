import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layer({ children }: any) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
