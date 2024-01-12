import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "../global.css";
import { Helmet } from "react-helmet";
import ShoeZoneLayout from "../layouts/ShoeZoneLayout";
export default function ShoeZone() {
  return (
    <>
      <Helmet>
        <title>Jeewantha.dev/shoezone</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
        <link rel="canonical" href="" />
      </Helmet>
      <Header />
      <ShoeZoneLayout />
      <Footer />
    </>
  );
}
