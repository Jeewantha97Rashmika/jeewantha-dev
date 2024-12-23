import React, { useRef } from "react";
import { Container, useTheme } from "@mui/material";
import ReviewCard from "../../components/ReviewCard";
import RImage1 from "../../images/review1.png";
import RImage2 from "../../images/review2.png";
import RImage3 from "../../images/review3.png";
import RImage4 from "../../images/review4.png";
import RImage5 from "../../images/review5.png";
// import RImage6 from "../../images/review6.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DescriptionLayout from "./DescriptionLayout";
import { motion } from "framer-motion";
export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      img: RImage1, // Replace with actual image URL
      name: "Alice Johnson",
      review:
        "The web application designed by Jeewantha has transformed our business. The UI is intuitive and the user experience is seamless.",
      date: "2023-05-10",
    },
    {
      id: "2",
      img: RImage2, // Replace with actual image URL
      name: "Mark Smith",
      review:
        "Outstanding work on our e-commerce platform! The design not only looks great but also improves our conversion rates significantly.Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-05-15",
    },
    {
      id: "3",
      img: RImage3, // Replace with actual image URL
      name: "Jessica Brown",
      review:
        "Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information. Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-06-01",
    },
    {
      id: "4",
      img: RImage4, // Replace with actual image URL
      name: "Daniel Lee",
      review:
        "I was thoroughly impressed with the attention to detail in the UI/UX design. Our users have noticed the difference! Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-06-20",
    },
    {
      id: "5",
      img: RImage3, // Replace with actual image URL
      name: "Sophia Wilson",
      review:
        "The development process was smooth and collaborative. Jeewantha listened to our needs and delivered a product we love.Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-07-05",
    },
    {
      id: "6",
      img: RImage2, // Replace with actual image URL
      name: "Ryan Davis",
      review:
        "Fantastic work on our mobile app! The design is sleek and users find it very engaging and easy to use.Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-07-12",
    },
    {
      id: "7",
      img: RImage4, // Replace with actual image URL
      name: "Emily Garcia",
      review:
        "Jeewantha exceeded our expectations with the UI/UX design of our dashboard. The interface is both functional and beautiful.Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-08-01",
    },
    {
      id: "8",
      img: RImage5, // Replace with actual image URL
      name: "Michael Johnson",
      review:
        "The project was completed on time and the final product is amazing! We’ve received so many compliments on our new site.",
      date: "2023-08-15",
    },
  ];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const theme = useTheme();
  return (
    <div
      style={{
        zIndex: 0,
        backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <DescriptionLayout />

      <Container
        component={motion.div}
        initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
        viewport={{ amount: 0.2 }} // Only animate once when 20% of the component is in view
        transition={{ type: "spring", stiffness: 100 }}
        sx={{
          zIndex: 5,
          pb: { xs: 5 },
          height: { xs: "85vh", md: "95vh", lg: "80vh" },
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewCard
                img={item.img}
                name={item.name}
                review={item.review}
                date={item.date}
              />
            </SwiperSlide>
          ))}

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </Container>
    </div>
  );
}
