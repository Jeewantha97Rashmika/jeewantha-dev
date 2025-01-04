import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Project5 from "../../images/project5.jpg";
import xcinama from "../../images/xcinama.png";
import radikadilanka from "../../images/radikadilanka.png";
import photographer from "../../images/photographer.png";
import hightec from "../../images/hightec.png";
import xiomiband from "../../images/xiomiband.png";
import ezivizhub from "../../images/ezivizhub.png";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function ProjectList() {
  const theme = useTheme();

  const shopifyDevelopment = [
    "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    // "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];

  const Development = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://cdn.iconscout.com/icon/free/png-512/free-gatsby-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944886.png?f=webp&w=256",
    // "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg",
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    // "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];

  const uidesign = [
    "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  ];
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgColor?.main,
        zIndex: 0,
        pt: { md: 2, xs: 1 },
        pb: { md: 10, xs: 5 },
      }}
    >
      <section
        style={{
          transition: "background-color 0.5s ease, color 0.5s ease",
          padding: "1rem",
        }}
      >
        <div
          component={motion.div}
          initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% of the component is in view
          transition={{ type: "spring", stiffness: 100 }}
          style={{ margin: "0 auto", maxWidth: "72rem" }}
        >
          <Link
            heading="Xcamera"
            subheading="Modern Photographer oficial web site UI/UX Design using figma and photoshop"
            imgSrc={photographer}
            tecnology={uidesign}
            href="https://www.figma.com/proto/aSWFsx4n0Z6J9HYVKLdLcZ/photography-site?page-id=115%3A293&node-id=129-2&viewport=4358%2C1087%2C0.13&t=v7NnYf6IZuxd6W10-1&scaling=min-zoom&content-scaling=fixed"
          />
          <Link
            heading="Radikadilanka"
            subheading="Radikadilanka's official website UI/UX Design using figma and photoshop."
            imgSrc={radikadilanka}
            tecnology={uidesign}
            href="https://radikadilanka.com/"
          />
          <Link
            heading="XCINAMA"
            subheading="Xcinama is movie titket bokking website UI/UX Design using figma"
            imgSrc={xcinama}
            tecnology={uidesign}
            href="https://www.figma.com/proto/NUO6CLqeR6HbAIVjMyXZEp/Movies?page-id=199%3A4683&node-id=199-4684&viewport=1171%2C907%2C0.32&t=dmZ0byNEKBuimxLD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=199%3A4684"
          />

          <Link
            heading="Highteclanka"
            subheading="Highteclanka's official website UI/UX Design using figma and photoshop."
            imgSrc={hightec}
            tecnology={uidesign}
            href="https://highteclanka.com/"
          />
          <Link
            heading="Taxi Service"
            subheading="Taxi Service official website UI/UX Design using figma and photoshop."
            imgSrc={Project5}
            tecnology={uidesign}
            href="#"
          />
          <Link
            heading="Xiomiband"
            subheading="Xiomiband is official website UI/UX Design using figma and photoshop and develo it using Shopify.- password -12345"
            imgSrc={xiomiband}
            tecnology={shopifyDevelopment}
            href="https://xiomi-tec.myshopify.com/"
          />
          <Link
            heading="Ezivizhub"
            subheading="Ezivizhub is official website UI/UX Design using figma and photoshop and develo it using Shopify - password -12345"
            imgSrc={ezivizhub}
            tecnology={shopifyDevelopment}
            href="https://ezvizhub.myshopify.com/"
          />
        </div>
      </section>
    </Box>
  );
}

const Link = ({ heading, imgSrc, subheading, href, tecnology }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
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
        zIndex: 5,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "2px solid #3f3f3f",
        paddingTop: "4rem",
        paddingBottom: "1rem",
        transition: "border-color 0.5s",
        hover: { borderColor: "#fafafa" },
        textDecoration: "none",
        fontFamily: "Montserrat",
      }}
    >
      {isMobile && (
        <div>
          <img
            style={{
              top,
              left,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              // translateX: "-50%",
              // translateY: "-50%",
              // position: "absolute",
              zIndex: 0,
              height: "auto",
              width: "100%",
              // borderRadius: "0.5rem",
              objectFit: "cover",
              marginBottom: "2rem",
            }}
            // variants={{
            //   initial: { scale: 0, rotate: "-12.5deg" },
            //   whileHover: { scale: 1.8, rotate: "12.5deg" },
            // }}
            // transition={{ type: "spring" }}
            src={imgSrc}
            alt={`Image representing a link for ${heading}`}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
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
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: theme.palette.textColor?.secondary,
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
              <Box
                sx={{
                  mt: 3,
                }}
              >
                {tecnology.map((val, key) => {
                  return (
                    <img
                      src={val}
                      key={key}
                      style={{ width: "1.5rem", marginRight: "1rem" }}
                      alt={`Image representing a link for `}
                    />
                  );
                })}
              </Box>
              <span
                style={{
                  position: "relative",
                  zIndex: 10,
                  maxWidth: "30rem",
                  marginTop: "1rem",
                  display: "block",
                  fontSize: "1rem",
                  color: theme.palette.textColor?.main,
                  transition: "color 0.5s",
                }}
              >
                {subheading}
              </span>
            </Box>
            <FiArrowRight
              style={{
                fontSize: "2.5rem",
                color: theme.palette.secondary?.main,
                fontFamily: "Montserrat",
              }}
            />
          </Box>
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
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
                color: theme.palette.textColor?.secondary,
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
            <Box
              sx={{
                mt: 3,
              }}
            >
              {tecnology.map((val, key) => {
                return (
                  <img
                    src={val}
                    key={key}
                    style={{ width: "1.5rem", marginRight: "1rem" }}
                    alt={`Image representing a link for `}
                  />
                );
              })}
            </Box>

            <span
              style={{
                position: "relative",
                zIndex: 10,
                maxWidth: "30rem",
                marginTop: "10px",
                display: "block",
                fontSize: "1rem",
                color: theme.palette.textColor?.main,
                transition: "color 0.5s",
              }}
            >
              {subheading}
            </span>

            <motion.img
              style={{
                top,
                left,
                translateX: "-80%",
                translateY: "-50%",
                position: "absolute",
                zIndex: 0,
                height: "8rem",
                width: "10rem",
                // borderRadius: "0.5rem",
                objectFit: "cover",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
              variants={{
                initial: { scale: 0, rotate: "-12.5deg" },
                whileHover: { scale: 1.8, rotate: "12.5deg" },
              }}
              transition={{ type: "spring" }}
              src={imgSrc}
              alt={`Image representing a link for ${heading}`}
            />
          </Box>
        </div>
      )}
      {!isMobile && (
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
          <FiArrowRight
            style={{
              fontSize: "2.5rem",
              color: theme.palette.secondary?.main,
              fontFamily: "Montserrat",
            }}
          />
        </motion.div>
      )}
    </motion.a>
  );
};
