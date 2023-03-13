import styles from "@/styles";
import Footer from "./Footer";
import Header from "./Header";

export default function Layer({ children }: any) {
  return (
    <div className={`${styles.flexCol} min-h-[100vh] h-[100%]`}>
      <Header />
      <div className={`${styles.boxWidth} ${styles.flexCenter} flex-1 `}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
