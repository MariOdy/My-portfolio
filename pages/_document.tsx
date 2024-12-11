import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){
              i["esSdk"] = r;
              i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
              };
              a = s.createElement(o), m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m);
            })(window, document, "script", "https://esputnik.com/scripts/v1/public/scripts?apiKey=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0NTI0ZWZhYTJkYzI2MGRmYTM4YTE1NDBlMWE2YWM1MWNmYTQzYTE3MzY2ZWQ3OTIxY2EzNGY3YmNiY2Q1YjAyMzRhYWIxNzQwZWIzYTQzNjJhMTQ3N2ZmZGYwMWQwNDY1ZGI3YjEwNjU3Mzk3N2E0YTE3NTAzYzQyMjI0ZWI1MmFiY2JhZDM1M2U3NjYzNGNiNzI1ZTk3YmU3OTM0OTExMDA4OGU3OWQ5YTFlNjA1OGY2MGFhZjkyZGMifQ.NArwRLgM5DysgFi4QmIly28DaH_JGDdsaRu643xBXSTjw5zl71NcEh6RyAfXYqGJuCBU41lt_bguu4ufSAgEKw&domain=2AF54D00-544F-4BE2-B24D-028AE0822D84", "es");
	es("pushOn");
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
