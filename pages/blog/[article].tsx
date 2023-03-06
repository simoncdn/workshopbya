import { NextRouter, useRouter } from "next/router";
import React from "react";
import { articles } from "@/constants/constants";
import Image from "next/image";
import styles from "@/styles";

interface findArticleProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export default function Article() {
  const router = useRouter();
  let findArticle: findArticleProps | any = articles.find(
    (article) => article.id === router.query.id
  );
  console.log(findArticle);
  console.log(router);

  return (
    <div className={`${styles.boxWidth} ${styles.paddingX} pb-[100px]`}>
      <div className="banner">
        <Image src={findArticle?.cover} alt="article" />
      </div>

      <p className="text-gray-500 text-sm pt-2">
        {findArticle.date} •{" "}
        <span className="text-tertiary font-semibold">
          {findArticle.author}
        </span>
      </p>
      <h1 className={`${styles.heading2} py-5`}>{findArticle?.title}</h1>

      <p>{findArticle?.description}</p>

      <div>
        {findArticle.article.map((item: any, index: number) => (
          <div key={index} className="flex flex-col ">
            <h5 className="mt-5 mb-2 font-bold text-[24px]">{item.subtitle}</h5>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
