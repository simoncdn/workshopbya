/* eslint-disable @next/next/no-img-element */
import PagesTitle from "@/components/reusable-ui/PagesTitle";
import styles from "@/styles";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ellipse from "../../assets/ellipse.svg";
import { client, urlFor } from "../../lib/sanity.client";
import { motion } from "framer-motion";
import { sectionPageAnimate } from "@/animation/animation";

type Props = {
  posts: Post[];
};
const articleAnimate = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1 },
  },
};
export default function Index({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Workshop By A | Blog</title>
        <meta
          name="description"
          content="Connectez-vous avec votre audience et augmentez votre présence en ligne grâce a mon expertise en gestion de communauté. Workshop by A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <motion.section
        initial={sectionPageAnimate.initial}
        animate={sectionPageAnimate.animate}
        variants={sectionPageAnimate}
        className={`${styles.boxWidth} ${styles.paddingX} relative pb-[100px] pt-[40px]`}
      >
        <div className="lg:hidden block absolute sm:w-[30%] w-[55%] left-0 sm:top-[0%] ss:top-[40%] top-[40%]">
          <Image src={ellipse} alt="ellipse" />
        </div>

        <PagesTitle label="BLOG" />

        <div
          className={`${styles.gap} grid sm:grid-cols-2 grid-cols-1 justify-items-center gap-10 px-4 relative `}
        >
          {posts
            .slice()
            .reverse()
            .map((post: any) => (
              <motion.li
                initial={articleAnimate.initial}
                animate={articleAnimate.animate}
                variants={articleAnimate}
                key={post._id}
                className="bg-secondary list-none p-2 sm:w-[100%] ss:w-[70%] w-[100%]"
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <article>
                    <img
                      src={urlFor(post.mainImage.asset._ref).url()}
                      alt="article"
                    />

                    <p className="text-gray-500 text-sm pt-2">
                      {new Date(post._createdAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      •{" "}
                      <span className="text-tertiary font-semibold">
                        Workshop by A
                      </span>
                    </p>
                    <h5 className={`${styles.heading5} min-h-[60px]`}>
                      {post.title}
                    </h5>
                    <div className={`${styles.text} description mt-3`}>
                      <p>{post.description}</p>
                    </div>

                    <button className="px-2 py-1 bg-tertiary rounded-sm text-white mt-3">
                      En voir plus
                    </button>
                  </article>
                </Link>
              </motion.li>
            ))}
        </div>
      </motion.section>
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
