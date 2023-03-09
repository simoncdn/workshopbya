import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";
import styles from "@/styles";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="md:text-4xl sm:text-3xl text-2xl py-10 font-bold text-primary font-text">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="md:text-3xl sm:text-2xl text-xl py-10 font-bold text-primary font-text">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="md:text-2xl sm:text-xl text-lg py-10 font-bold text-primary font-text">
        {children}
      </h4>
    ),
    p: ({ children }: any) => <p className={`${styles.text}`}>{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote
        className={`${styles.text} border-l-tertiary border-l-4 pl-5 py-5 my-5`}
      >
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className={`${styles.text} ml-10 py-5 list-disc space-y-5 w-[80%]`}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ul className={`${styles.text} mt-lg list-decimal`}>{children}</ul>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target="_blank"
          className="underline decoration-tertiary hover:decoration-secondary"
        >
          {children}
        </Link>
      );
    },
  },
};
