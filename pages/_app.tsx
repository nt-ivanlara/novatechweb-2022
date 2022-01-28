import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContentPanel from "../src/layout/content-panel/ContentPanel";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ContentPanel>
        <Component {...pageProps} />
      </ContentPanel>
    );
}

export default MyApp;
