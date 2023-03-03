import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Workshop By A</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
