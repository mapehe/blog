import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Short fiction by mapehe.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
  );
};

export default Meta;
