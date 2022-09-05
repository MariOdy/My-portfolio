import type { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

import "styles/normalize.css";
import "styles/styles.css";
import "styles/typography.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Head>
        <title>Mariia Odynska</title>
      </Head>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
