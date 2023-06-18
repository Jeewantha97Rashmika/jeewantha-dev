import * as React from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Jeewantha.dev</title>
      
        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
        <link
          rel="canonical"
          href=""
        />
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default IndexPage;
