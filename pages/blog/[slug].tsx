import Image from "next/image";
import styles from "@/styles";
import { client, urlFor } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/reusable-ui/RichTextComponents";

export default function Article({ post }: any) {
  return (
    <div className={`${styles.boxWidth} ${styles.paddingX} pb-[100px]`}>
      <h1 className={`${styles.heading1} pt-10`}>{post.title}</h1>
      <PortableText value={post.body} components={RichTextComponents} />
    </div>
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
