import React, { useRef } from "react";
import { Container, useTheme } from "@mui/material";
import ReviewCard from "../../components/ReviewCard";
import RImage1 from "../../images/radika_dilanka.png";
import RImage2 from "../../images/madus.png";
import RImage3 from "../../images/ishara.jpg";
import RImage4 from "../../images/iroshana.jpg";
import RImage5 from "../../images/nishadi.jpg";
// import RImage6 from "../../images/review6.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DescriptionLayout from "./DescriptionLayout";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      img: RImage1, // Replace with actual image URL
      name: "Radika Dilanka",
      job: "Web Consultaint | MERN stack instuctor",
      socialMedias: [
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/radikadilanka/",
        },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/jeewantherashmika/",
        },
        {
          name: "Website",
          icon: <TbWorldWww />,
          link: "https:/radikadilanka.com",
        },
      ],
      review:
        "As a UI/UX engineer, Jeewantha consistently demonstrated creativity, attention to detail, and a knack for delivering user-friendly designs. His unique blend of design expertise and coding skills allows him to tackle challenges holistically, producing both aesthetically pleasing and functional results. What stands out about Jeewantha is his reliability and commitment to meeting deadlines while maintaining high standards. Whether it’s coming up with creative solutions or going the extra mile to ensure project success, he’s someone you can always count on.",
      date: "2023-05-10",
    },
    {
      id: "2",
      img: RImage2, // Replace with actual image URL
      name: "Madusanka Premarathne",
      job: "Founder & CEO of Knovik LLC | Enterpreneur",
      socialMedias: [
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/radikadilanka/",
        },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/jeewantherashmika/",
        },
        {
          name: "Website",
          icon: <TbWorldWww />,
          link: "https:/radikadilanka.com",
        },
      ],
      review:
        "Outstanding work on our e-commerce platform! The design not only looks great but also improves our conversion rates significantly.Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-05-15",
    },
    {
      id: "3",
      img: RImage3, // Replace with actual image URL
      name: "Ishara Fernando",
      job: "SEO Specialist | Product owner", 
      socialMedias: [
        // {
        //   name: "Facebook",
        //   icon: <FaFacebook />,
        //   link: "https://www.facebook.com/radikadilanka/",
        // },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/jeewantherashmika/",
        },
        {
          name: "Website",
          icon: <TbWorldWww />,
          link: "https:/radikadilanka.com",
        },
      ],
      review:
        "Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information. Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-06-01",
    },
    {
      id: "4",
      img: RImage4, // Replace with actual image URL
      name: "Iroshana Wickramasinghe",
      job: "Product owner | Software Engineer",
      socialMedias: [
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/radikadilanka/",
        },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/jeewantherashmika/",
        },
        {
          name: "Website",
          icon: <TbWorldWww />,
          link: "https:/radikadilanka.com",
        },
      ],
      review:
        "Jeewantha is a software engineer, but he also happens to be exceptionally gifted. No one can beat his capabilities when it comes to UI/UX, software architecture, and product design. These are the two most important qualities that our projects constantly need, innovation and detail orientation. Since we worked together on many projects, I can say that he has an outstanding ability to change complicated requirements into beautiful solutions. He would be a great asset to any team because of his dedication, professionalism, and innovative mindset. Besides technical skills, Jeewantha makes the team work in a collaborative atmosphere that encourages people to share ideas and think creatively about solutions for problems at hand. Projects with his contributions are not only delivered but also exceed client expectations and leave an impressive signature on every piece of work undertaken. I recommend him without any reservations.",
      date: "2023-06-20",
    },
    {
      id: "4",
      img: RImage5, // Replace with actual image URL
      name: "Nishadi Lakshika",
      job: "ICT Teacher",
      socialMedias: [
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/radikadilanka/",
        },
        {
          name: "linkedin",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/jeewantherashmika/",
        },
        {
          name: "Website",
          icon: <TbWorldWww />,
          link: "https:/radikadilanka.com",
        },
      ],
      review:
        "I was thoroughly impressed with the attention to detail in the UI/UX design. Our users have noticed the difference! Jeewantha is a true professional! The website redesign has made it much easier for our clients to navigate and find information.",
      date: "2023-06-20",
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
        viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% of the component is in view
        transition={{ type: "spring", stiffness: 100 }}
        sx={{
          zIndex: 5,
          pb: { xs: 5 },
          // height: { xs: "85vh", md: "95vh", lg: "80vh" },
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          minHeight: { xs: "80vh", md: "80vh", lg: "80vh" },
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
          {testimonials.map((item,key) => (
            <SwiperSlide key={key}>
              <ReviewCard
                img={item.img}
                name={item.name}
                review={item.review}
                date={item.date}
                job={item.job}
                socialMedias={item.socialMedias}
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
