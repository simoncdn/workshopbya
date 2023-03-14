import Head from "next/head";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import { HiArrowLongUp } from "react-icons/hi2";
import Blog from "@/components/blog/Blog";
import { client } from "@/lib/sanity.client";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Workshop By A</title>
        <meta
          name="description"
          content="Connectez-vous avec votre audience et augmentez votre présence en ligne grâce a mon expertise en gestion de communauté. Workshop by A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="images/png" sizes="50x50" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Blog posts={posts} />

        <div className="fixed right-0 bottom-10">
          <a href="#">
            <button className="xs:text-[50px] text-[35px]">
              <HiArrowLongUp />
            </button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  const authorQuery = '*[_type == "author"]';
  const author = await client.fetch(authorQuery);

  return {
    props: { posts, author },
  };
};
