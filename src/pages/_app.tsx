import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex List</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={poppins.className}>
        <main>
          <div className="container mx-auto px-4 py-4">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  );
}
