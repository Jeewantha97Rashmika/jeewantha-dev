import * as React from "react";
import Header from "../layouts/Header";
import Home from "../layouts/Home";
import "../global.css";
import Footer from "../layouts/Footer";
import { Helmet } from "react-helmet";
import { Box } from "@mui/material";
import Preloder from "../components/Preloder";

const IndexPage = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Helmet>
        <title>Jeewantha.dev</title>

        <meta
          name="description"
          content="UI/UX designer who is interested in solving complex problems through designing and mobile app/web development"
        />
        <link rel="canonical" href="" />
      </Helmet>
      {loading ? (
        <Preloder />
      ) : (
        <Box>
          <Header />
          <Home />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default IndexPage;
