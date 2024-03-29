import styles from "@/styles";
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/reusable-ui/RichTextComponents";
import Button from "@/components/reusable-ui/Button";
import Head from "next/head";

export default function Article({ post }: any) {
  return (
    <>
      <Head>
        <title>Workshop By A | Article</title>
        <meta name="description" content={post.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="images/png" sizes="50x50" href="/favicon.png" />
      </Head>

      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCol} relative pb-[50px] md:mt-10 mt-20`}
      >
        <h1 className={`${styles.heading1}`}>{post.title}</h1>
        <PortableText value={post.body} components={RichTextComponents} />

        <Button label="Voir les autres articles" route="/blog" />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);

  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const postsQuery = '*[_type == "post"]';
  const post = await client.fetch(query);
  const posts = await client.fetch(postsQuery);

  return {
    props: { posts, post },
  };
};
