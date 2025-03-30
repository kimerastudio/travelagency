import React, { Fragment } from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import Head from "next/head";

const Layout = ({
  children,
  title = "Travel by the Web",
  description = "Discover seamless travel planning with Carlos, your personal travel agent. Unlock exclusive deals, personalized itineraries, and expert support every step of your journey.",
  enableAOS = false,
  hideFooter = false,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://comfy-pithivier-21270c.netlify.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://comfy-pithivier-21270c.netlify.app/images/og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://comfy-pithivier-21270c.netlify.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://comfy-pithivier-21270c.netlify.app/images/og.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
