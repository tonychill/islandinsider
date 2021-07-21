import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Layout from "../layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function IslandInsider({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout {...pageProps}>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </Layout>
    </Fragment>
  );
}
export default IslandInsider;
