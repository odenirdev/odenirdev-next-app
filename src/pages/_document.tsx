import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Odenir Gomes" />
        <meta
          name="description"
          content="Desenvolvedor de software | Programador | Entusiasta de educação em tecnologia"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://odenir.dev" />
        <meta property="og:title" content="Odenir Gomes" />
        <meta
          property="og:description"
          content="Desenvolvedor de software | Programador | Entusiasta de educação em tecnologia"
        />
        <meta
          property="og:image"
          content="/profile.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://odenir.dev" />
        <meta property="twitter:title" content="Odenir Gomes" />
        <meta
          property="twitter:description"
          content="Desenvolvedor de software | Programador | Entusiasta de educação em tecnologia"
        />
        <meta
          property="twitter:image"
          content="/profile.jpg"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
