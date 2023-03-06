import { articles } from "@/constants/constants";
import styles from "@/styles";
import Image from "next/image";
import Link from "next/link";
import Button from "../reusable-ui/Button";
import SectionTitle from "../reusable-ui/SectionTitle";
import article2 from "../../assets/socialmedia.jpg";

export default function Blog() {
  return (
    <section
      className={`${styles.paddingX} ${styles.flexCol} relative sm:items-start items-center my-[100px]`}
    >
      <SectionTitle title="Blog" id="blog" />

      <div
        className={`${styles.gap} sm:w-[100%] ss:w-[70%] w-[100%] grid sm:grid-cols-2 grid-cols-1 justify-self-center mt-12`}
      >
        {articles.slice(-2).map((article, index) => (
          <Link
            key={index}
            href={`/blog/${article.title
              .replaceAll(" ", "-")
              .replaceAll("?", "-")}?id=${article.id}`}
            className="flex flex-col items-center bg-secondary p-2 pb-4 "
          >
            <article>
              <Image src={article.cover} alt="article" />
              <p className={`${styles.text} pt-2 text-gray-500`}>
                {article.date} •{" "}
                <span className="text-tertiary font-semibold">
                  {article.author}
                </span>
              </p>
              <h5 className={`${styles.heading5}`}>{article.title}</h5>
            </article>
          </Link>
        ))}
      </div>

      <Button label="Voir tout les articles" route="/blog" />
    </section>
  );
}
