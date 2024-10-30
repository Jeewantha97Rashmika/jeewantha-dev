import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Project1 from "../../images/project1.jpg";
import Project2 from "../../images/project2.jpg";
import Project3 from "../../images/project3.jpg";
import Project4 from "../../images/project4.jpg";
import Project5 from "../../images/project5.jpg";
import Project6 from "../../images/project6.jpg";
export default function ProjectList() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        paddingBottom: "2rem",
        marginTop: "3rem",
        marginBottom: "3rem",
        
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "72rem" }}>
        <Link
          heading="Shoe Zone App"
          subheading="Modern Shoe Shopping Solutions Mobile App and Web Admin UI/UX Design using figma"
          imgSrc={Project1}
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc={Project2}
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc={Project3}
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc={Project4}
          href="#"
        />
        <Link
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc={Project5}
          href="#"
        />
      </div>
    </section>
  );
}

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      style={{
        
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid #3f3f3f",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        transition: "border-color 0.5s",
        hover: { borderColor: "#fafafa" },
        textDecoration: "none",
        fontFamily: "Montserrat",
      }}
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          style={{
            position: "relative",
            zIndex: 10,
            display: "block",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#3f3f3f",
            transition: "color 0.5s",
          }}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              style={{ display: "inline-block" }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "30rem",
            marginTop: "1rem",
            display: "block",
            fontSize: "1rem",
            color: "#3f3f3f",
            transition: "color 0.5s",
          }}
        >
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
          position: "absolute",
          zIndex: 0,
          height: "6rem",
          width: "8rem",
          borderRadius: "0.5rem",
          objectFit: "cover",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1.8, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        style={{
          position: "relative",
          zIndex: 10,
          padding: "1rem",
        }}
      >
        <FiArrowRight style={{ fontSize: "2.5rem", color: "#333" ,fontFamily: "Montserrat",}} />
      </motion.div>
    </motion.a>
  );
};
