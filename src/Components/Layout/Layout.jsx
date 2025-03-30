import React, { Fragment } from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import Head from "next/head";

const Layout = ({
  children,
  title = "Healify",
  description = "Healify Desc",
  enableAOS = false,
  hideFooter = false,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar enableAOS={enableAOS} />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
