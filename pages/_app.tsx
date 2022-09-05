import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

import "styles/normalize.css";
import "styles/styles.css";
import "styles/typography.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
