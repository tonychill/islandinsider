import { useState, Fragment, FC } from "react";
import Head from "next/head";
import Link from "next/link";

const MainLayout: FC = ({ children, ...moreProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Island Insider</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">{children}</main>;
    </Fragment>
  );
};

export default MainLayout;
