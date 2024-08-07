"use client";
import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Portfolio from "../components/containers/portfolio";


export default function Index() {
  return (
    <>
      <Head>
        <title>Kamal | Portfolio</title>
        <link rel="icon" href="/logo.png" />
        <meta name="title" content="Kamal" />
        <meta
          name="description"
          content="Portfolio website"
        />
        <meta name="copyright" content="Kamal" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kamal-001.github.io" />
        <meta property="og:title" content="Kamal" />
        <meta
          property="og:description"
          content="Portfolio website"
        />
        <meta property="og:image" content="https://kamal-001.github.io/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kamal-001.github.io" />
        <meta property="twitter:title" content="Kamal" />
        <meta
          property="twitter:description"
          content="Portfolio website"
        />
        <meta property="twitter:image" content="https://kamal-001.github.io/og.png" />
      </Head>
      <MainLayout>
      <Portfolio />
      </MainLayout>
    </>
  );
}
