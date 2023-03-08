//Re-export NextstudioHead as default if you re happy with the default behaviour
export { NextStudioHead } from "next-sanity/studio/head";

// to customize it, use it as a children component:
import { NextStudioHead } from "next-sanity/studio/head";
import Link from "next/link";

export default function customStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <Link
        rel="icon"
        type="image/png"
        href="'https://www.sanity.io/static/favicons/favicon-32x32.png"
      />
    </>
  );
}
