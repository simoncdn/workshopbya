/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
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
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold text-primary">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold text-primary">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold text-primary">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold text-primary">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-tertiary border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 space-y-5 list-disc text-primary">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ul className="mt-lg list-decimal">{children}</ul>
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
