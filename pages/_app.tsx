import React from "react";
import { AppProps } from "next/app";

//needed to load global overrides
import {} from "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
