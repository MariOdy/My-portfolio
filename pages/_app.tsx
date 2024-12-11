import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

import "styles/normalize.css";
import "styles/styles.css";
import "styles/typography.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

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
