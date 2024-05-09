import React from "react";
import AboutLayout from "../layouts/AboutLayout";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "../global.css";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <>
      <Helmet>
        <title>Jeewantha.dev/about</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
        <link rel="canonical" href="" />
      </Helmet>
      <Header />
      <AboutLayout />
      <Footer />
    </>
  );
}
