import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  IconButton 
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "../../components/ReviewCard";
import RImage from "../../images/r1.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      img: RImage, // Replace with actual image URL
      name: "Alice Johnson",
      review:
        "The web application designed by Jeewantha has transformed our business. The UI is intuitive and the user experience is seamless.",
      date: "2023-05-10",
    },
    {
      id: "2",
      img: RImage, // Replace with actual image URL
      name: "Mark Smith",
      review:
        "Outstanding work on our e-commerce platform! The design not only looks great but also improves our conversion rates significantly.",
      date: "2023-05-15",
    },
    {
      id: "3",
      img: RImage, // Replace with actual image URL
      name: "Jessica Brown",
      review:
        "Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-06-01",
    },
    {
      id: "4",
      img: RImage, // Replace with actual image URL
      name: "Daniel Lee",
      review:
        "I was thoroughly impressed with the attention to detail in the UI/UX design. Our users have noticed the difference!",
      date: "2023-06-20",
    },
    {
      id: "5",
      img: RImage, // Replace with actual image URL
      name: "Sophia Wilson",
      review:
        "The development process was smooth and collaborative. Jeewantha listened to our needs and delivered a product we love.",
      date: "2023-07-05",
    },
    {
      id: "6",
      img: RImage, // Replace with actual image URL
      name: "Ryan Davis",
      review:
        "Fantastic work on our mobile app! The design is sleek and users find it very engaging and easy to use.",
      date: "2023-07-12",
    },
    {
      id: "7",
      img: RImage, // Replace with actual image URL
      name: "Emily Garcia",
      review:
        "Jeewantha exceeded our expectations with the UI/UX design of our dashboard. The interface is both functional and beautiful.",
      date: "2023-08-01",
    },
    {
      id: "8",
      img: RImage, // Replace with actual image URL
      name: "Michael Johnson",
      review:
        "The project was completed on time and the final product is amazing! We’ve received so many compliments on our new site.",
      date: "2023-08-15",
    },
  ];
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: 600,
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 100 || velocity.x > 0.5) {
              handlePrev();
            } else if (offset.x < -100 || velocity.x < -0.5) {
              handleNext();
            }
          }}
        >
          <ReviewCard
            img={testimonials[current].img}
            name={testimonials[current].name}
            review={testimonials[current].review}
            date={testimonials[current].date}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
