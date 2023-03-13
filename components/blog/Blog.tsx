/* eslint-disable @next/next/no-img-element */
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";
import Button from "../reusable-ui/Button";
import SectionTitle from "../reusable-ui/SectionTitle";
import { client, urlFor } from "@/lib/sanity.client";
import { motion } from "framer-motion";
import { sectionAnimate } from "@/animation/animation";

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <section
      className={`${styles.paddingX} ${styles.flexCol} relative sm:items-start items-center my-[100px]`}
    >
      <SectionTitle title="Blog" id="blog" />

      <div
        className={`${styles.gap} sm:w-[100%] ss:w-[70%] w-[100%] grid sm:grid-cols-2 grid-cols-1 justify-self-center mt-12`}
      >
        {posts
          .slice(-2)
          .reverse()
          .map((post: any, index: any) => (
            <motion.li
              initial={"initial"}
              whileInView={"onScreen"}
              variants={sectionAnimate}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="list-none bg-secondary p-2 sm:w-[100%] ss:w-[70%] w-[100%]"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <article>
                  <Image
                    src={urlFor(post.mainImage.asset._ref).url()}
                    alt="article"
                    width={700}
                    height={100}
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
                    {post.description}
                  </div>

                  <button className="px-2 py-1 bg-tertiary rounded-sm text-white mt-3">
                    En voir plus
                  </button>
                </article>
              </Link>
            </motion.li>
          ))}
      </div>

      <Button label="Voir tout les articles" route="/blog" />
    </section>
  );
}
