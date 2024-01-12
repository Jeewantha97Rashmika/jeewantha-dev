import { Container } from "@mui/material";
import React from "react";
import Heading2 from "../../components/common/Heading2";
import BodyText from "../../components/common/BodyText";
import StyleGuide from "../../images/StyleGuide.png";

import GetStartedImage from "../../components/shoezone/GetStartedImage";
import SignImage from "../../components/shoezone/SignInImages";
import HomeImage from "../../components/shoezone/HomeImage";
import OtherScreenImage from "../../components/shoezone/OtherScreen";
export default function AppCasetudy() {
  return (
    <div>
      <Container sx={{ pt: { xs: 5, md: 6 }, pb: 10 }}>
        <Heading2 component={"h2"} text={"Project Overview"} />
        <BodyText
          component={"p"}
          bodyText={
            "As a passionate UI/UX designer, I actively engage in the creation of concept projects during my free time to explore various markets and understand their distinct user environments. In my recent undertaking, I focused on the thriving sneaker world, which has witnessed substantial growth in recent years. The objective was to design a shoe e-commerce app that delivers a simple, seamless experience to users, enabling them to effortlessly access and acquire the latest and most coveted shoe releases."
          }
        />
        <br></br>
        <br></br>
        <Heading2 component={"h2"} text={"Style Guide"} />
        <BodyText
          component={"p"}
          bodyText={
            "A Style Guide Is A Document That Details A Company's Set Of Standards For Writing, Editing, Formatting, And Designing Documents."
          }
        />

        <img
          src={StyleGuide}
          alt="Style Guide"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <br></br>
        <Heading2 component={"h2"} text={"Visual design "} />
        <BodyText
          component={"p"}
          bodyText={
            "Visual design encompasses the strategic use of imagery, color palettes, spacing, typography, and layouts to optimize usability and elevate the overall user experience. Through careful consideration and implementation of these elements, visual design aims to create visually appealing interfaces that engage and guide users. It involves selecting appropriate imagery to convey information or evoke emotions, choosing harmonious color schemes that enhance readability and convey brand personality, employing consistent spacing and alignment to establish visual hierarchy, utilizing typography to enhance legibility and communicate tone, and crafting well-structured layouts that promote intuitive navigation and content consumption. By leveraging these aspects, visual design enhances usability, communicates brand identity, and contributes to a visually cohesive and engaging user experience."
          }
        />
      <br></br>
        <br></br><br></br>
        <br></br>
        <Heading2 component={"h2"} text={"Get Started "} />
        <BodyText
          component={"p"}
          bodyText={
            "The 'Get Started'button directs users to the log-in and sign-up screens, facilitating their entry into the app. Upon clicking 'Get Started,' users are prompted to either log in to an existing account or create a new one. The log-in screen allows users to enter their credentials, such as username or email address and password, to access their account. Alternatively, the sign-up screen enables new users to provide necessary details, including name, email address, and a secure password, to create an account. This feature streamlines the onboarding process and ensures a seamless transition into the app."
          }
        />
        <br></br>
      </Container>
      <GetStartedImage />
      <br></br>
      <Container
        sx={{
          mt: 10,
          pb: 10,
        }}
      >
        <Heading2 component={"h2"} text={"Sign in & sign up"} />
        <BodyText
          component={"p"}
          bodyText={
            "The Sign-in and Sign-up functionality seamlessly navigates users to the log-in and sign-up Home Screen, providing a smooth transition into the app. Users can log in by entering their credentials, while new users can create an account by inputting necessary details. The process prioritizes security and user-friendliness, enhancing the overall experience."
          }
        />

        <br></br>
      </Container>
      <SignImage />
      <br></br>
      <Container
        sx={{
          mt: 10,
          pb: 10,
        }}
      >
        <Heading2 component={"h2"} text={"Home And Product Details"} />
        <BodyText
          component={"p"}
          bodyText={
            "The search bar incorporates a drop-down suggestion box, which assists users in searching for precise products or related items. Furthermore, users can effortlessly select a brand or common category to narrow down their search. An important and notable feature is the ability for users to utilize voice commands for product searches. This functionality allows for a more convenient and hands-free search experience."
          }
        />
        <br></br>
        <BodyText
          component={"p"}
          bodyText={
            "The product description page showcases comprehensive details of the product, featuring high-quality images, pricing information, consumer ratings and reviews, and shipping details. This page serves as a central hub for users to gather essential information before making a purchase decision. It presents visually appealing product images that allow users to visualize the item, while the displayed price provides transparency and clarity regarding the cost. Consumer ratings and reviews offer valuable insights from other customers, aiding users in evaluating the product's quality and suitability. Additionally, shipping information is prominently displayed, informing users about estimated delivery times and any associated costs. This holistic presentation of product information on the description page enhances user confidence and facilitates informed decision-making."
          }
        />
        <br></br>
      </Container>
      <HomeImage />

      <Container
        sx={{
          mt: 10,
          pb: 10,
        }}
      >
        <Heading2 component={"h2"} text={"App Workflow"} />
        <BodyText
          component={"p"}
          bodyText={
            "The Sign-in and Sign-up functionality seamlessly navigates users to the log-in and sign-up Home Screen, providing a smooth transition into the app. Users can log in by entering their credentials, while new users can create an account by inputting necessary details. The process prioritizes security and user-friendliness, enhancing the overall experience."
          }
        />
      </Container>
      <OtherScreenImage />
    </div>
  );
}
