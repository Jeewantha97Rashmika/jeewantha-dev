import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ScrollToTop from "react-scroll-to-top";
import "../../global.css";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import ThemeLayout from "../../Theme/ThemeLayout";
import useThemeMode from "../../customHooks/useThemeMode";
import { motion } from "framer-motion";
import {
  Store,
  Palette,
  Code,
  ShoppingCart,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react";

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  const services = [
    {
      icon: Store,
      title: "Complete Store Setup",
      description:
        "From concept to launch, I'll create your entire Shopify store with professional design and optimal functionality.",
      features: [
        "Product catalog setup",
        "Payment gateway integration",
        "Shipping configuration",
        "SEO optimization",
      ],
    },
    {
      icon: Palette,
      title: "Custom Theme Design",
      description:
        "Unique, brand-focused themes that convert visitors into customers with stunning visual appeal.",
      features: [
        "Mobile-responsive design",
        "Custom layouts",
        "Brand integration",
        "Performance optimization",
      ],
    },
    {
      icon: Code,
      title: "Theme Development",
      description:
        "Advanced customizations and custom theme development using Liquid, HTML, CSS, and JavaScript.",
      features: [
        "Custom functionality",
        "Third-party integrations",
        "Performance enhancement",
        "Code optimization",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Store Optimization",
      description:
        "Improve your existing store's performance, user experience, and conversion rates.",
      features: [
        "Speed optimization",
        "UX improvements",
        "Conversion rate optimization",
        "Analytics setup",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description:
        "Ensure your store looks perfect and functions flawlessly on all mobile devices.",
      features: [
        "Responsive design",
        "Touch optimization",
        "Mobile checkout",
        "App-like experience",
      ],
    },
    {
      icon: Zap,
      title: "App Integration",
      description:
        "Seamlessly integrate essential Shopify apps to enhance your store's functionality.",
      features: [
        "App selection",
        "Custom integrations",
        "API connections",
        "Workflow automation",
      ],
    },
  ];

  const process = [
    {
      id: "01",
      title: "Discovery & Planning",
      description:
        "We start with understanding your business goals, target audience, and requirements to create a strategic plan.",
    },
    {
      id: "02",
      title: "Design & Development",
      description:
        "Creating custom designs and developing your store with attention to detail and best practices.",
    },
    {
      id: "03",
      title: "Testing & Optimization",
      description:
        "Thorough testing across devices and browsers, plus performance optimization for the best user experience.",
    },
    {
      id: "04",
      title: "Launch & Support",
      description:
        "Smooth launch process with ongoing support and maintenance to ensure your store's continued success.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Director",
      content:
        "Jeewantha transformed our Shopify store completely. Sales increased by 150% within the first month of launch!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content:
        "Professional service and amazing attention to detail. Our store looks exactly like we envisioned.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Fashion Brand Owner",
      content:
        "The mobile optimization work was exceptional. Our mobile conversion rates doubled!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50+", label: "Stores Created" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI Increase" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Shopify Store Development & Customization Services | Jeewantha
          Rashmika
        </title>
        <meta
          name="description"
          content="Professional Shopify store development, custom theme design, and e-commerce optimization services."
        />
        <meta
          name="keywords"
          content="Shopify development, Shopify themes, e-commerce design, Shopify customization, online store development"
        />
        <meta
          property="og:title"
          content="Shopify Store Development Services | Jeewantha Rashmika"
        />
        <meta
          property="og:description"
          content="Expert Shopify development services including custom theme design, store setup, and optimization for maximum conversions."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://jeewantharashmika.com/shopify-store-setup/"
        />
      </Helmet>

      <ThemeLayout themeMode={themeMode}>
        <Box
          sx={{
            backgroundColor: themeMode === "light" ? "#F6F9FC" : "#1A1C1D",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <ScrollToTop
            top={900}
            smooth
            color={themeMode === "light" ? "#333" : "#fff"}
            style={{
              padding: "5px",
              zIndex: 100000,
              backgroundColor: themeMode === "light" ? "#fff" : "#1a1a1a",
            }}
          />

          {/* Hero Section */}
          <Container
            maxWidth="lg"
            sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 8, md: 12 } }}
          >
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      color: "#008060",
                      fontWeight: 600,
                      fontFamily: "Montserrat",
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Shopify Development Services
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: "36px", md: "48px", lg: "56px" },
                      fontWeight: "bold",
                      lineHeight: "1.1",
                      fontFamily: "Montserrat",
                      color: themeMode === "light" ? "#333" : "#fff",
                      mb: 3,
                    }}
                  >
                    Transform Your
                    <span style={{ color: "#008060" }}> E-commerce</span> Vision
                    <br />
                    Into Reality
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      color: themeMode === "light" ? "#707070" : "#aaaaaa",
                      fontFamily: "Montserrat",
                      lineHeight: 1.6,
                      mb: 4,
                    }}
                  >
                    Professional{" "}
                    <strong style={{ color: "#008060" }}>Shopify store</strong>{" "}
                    development, custom theme design, and optimization services
                    that drive sales and enhance user experience. Let's build
                    your perfect online store.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      href="#services"
                      sx={{
                        backgroundColor: "#008060",
                        color: "#fff",
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        "&:hover": {
                          backgroundColor: "#004C3F",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      View Services
                    </Button>
                    <Button
                      href="#contact"
                      variant="outlined"
                      sx={{
                        borderColor: "#008060",
                        color: "#008060",
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        "&:hover": {
                          backgroundColor: "#008060",
                          color: "#fff",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Get Quote
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: { xs: "300px", md: "400px" },
                      background:
                        "linear-gradient(135deg, #008060 0%, #004C3F 100%)",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Store size={120} color="white" style={{ opacity: 0.9 }} />
                    <Box
                      sx={{
                        position: "absolute",
                        top: -20,
                        right: -20,
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: -30,
                        left: -30,
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>

          {/* Stats Section */}
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "32px", md: "48px" },
                          fontWeight: "bold",
                          color: "#008060",
                          fontFamily: "Montserrat",
                          lineHeight: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          color: themeMode === "light" ? "#707070" : "#aaaaaa",
                          fontFamily: "Montserrat",
                          mt: 1,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Services Section */}
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="services">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#008060",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Services
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: themeMode === "light" ? "#333" : "#fff",
                    mb: 3,
                  }}
                >
                  Comprehensive Shopify Solutions
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: themeMode === "light" ? "#707070" : "#aaaaaa",
                    fontFamily: "Montserrat",
                    maxWidth: "600px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  From complete store setup to advanced customizations, I
                  provide end-to-end Shopify services tailored to your business
                  needs.
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4} alignItems="stretch">
              {services.map((service, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <motion.div
                    style={{ display: "flex", width: "100%" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        minHeight: "100%",
                        p: 4,
                        borderRadius: 3,
                        border: `1px solid ${
                          themeMode === "light" ? "#e0e0e0" : "#2d2d2d"
                        }`,
                        backgroundColor:
                          themeMode === "light" ? "#fff" : "#1a1a1a",
                        transition: "all 0.3s ease",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow:
                            themeMode === "light"
                              ? "0 10px 30px rgba(0, 0, 0, 0.1)"
                              : "0 10px 30px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          backgroundColor: "#008060",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 3,
                          flexShrink: 0,
                        }}
                      >
                        <service.icon size={24} color="white" />
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "Montserrat",
                              fontWeight: 600,
                              color: themeMode === "light" ? "#333" : "#fff",
                              mb: 2,
                              fontSize: "20px",
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Montserrat",
                              color:
                                themeMode === "light" ? "#707070" : "#aaaaaa",
                              fontSize: "14px",
                              lineHeight: 1.6,
                              mb: 3,
                            }}
                          >
                            {service.description}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: "auto", pt: 2 }}>
                          {service.features.map((feature, featureIndex) => (
                            <Box
                              key={featureIndex}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 1,
                              }}
                            >
                              <CheckCircle
                                size={16}
                                color="#008060"
                                style={{ marginRight: "8px" }}
                              />
                              <Typography
                                sx={{
                                  fontFamily: "Montserrat",
                                  fontSize: "13px",
                                  color:
                                    themeMode === "light" ? "#555" : "#cccccc",
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Process Section */}
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#008060",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Process
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: themeMode === "light" ? "#333" : "#fff",
                    mb: 3,
                  }}
                >
                  How I Work
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: themeMode === "light" ? "#707070" : "#aaaaaa",
                    fontFamily: "Montserrat",
                    maxWidth: "600px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  A proven 4-step process that ensures your Shopify store is
                  built right, launched successfully, and optimized for growth.
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {process.map((step, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "#008060",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Montserrat",
                          fontWeight: "bold",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        {step.id}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            color: themeMode === "light" ? "#333" : "#fff",
                            mb: 1,
                            fontSize: "20px",
                          }}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            color:
                              themeMode === "light" ? "#707070" : "#aaaaaa",
                            fontSize: "14px",
                            lineHeight: 1.6,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Testimonials Section */}
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: "#008060",
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Testimonials
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    color: themeMode === "light" ? "#333" : "#fff",
                    mb: 3,
                  }}
                >
                  What Clients Say
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        borderRadius: 3,
                        border: `1px solid ${
                          themeMode === "light" ? "#e0e0e0" : "#2d2d2d"
                        }`,
                        backgroundColor:
                          themeMode === "light" ? "#fff" : "#1a1a1a",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ display: "flex", mb: 2 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#FFD700"
                            color="#FFD700"
                          />
                        ))}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          color: themeMode === "light" ? "#333" : "#fff",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                          mb: 3,
                          flex: 1,
                        }}
                      >
                        "{testimonial.content}"
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontWeight: 600,
                            color: themeMode === "light" ? "#333" : "#fff",
                            fontSize: "16px",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            color:
                              themeMode === "light" ? "#707070" : "#aaaaaa",
                            fontSize: "14px",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* CTA Section */}
          <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }} id="contact">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  background:
                    "linear-gradient(135deg, #008060 0%, #004C3F 100%)",
                  borderRadius: 4,
                  p: { xs: 4, md: 8 },
                  textAlign: "center",
                  color: "#E3E3E3",
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "28px", md: "42px" },
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                    mb: 3,
                  }}
                >
                  Ready to Launch Your Dream Store?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    fontFamily: "Montserrat",
                    mb: 4,
                    maxWidth: "600px",
                    mx: "auto",
                    lineHeight: 1.6,
                    opacity: 0.9,
                  }}
                >
                  Let's transform your e-commerce vision into a high-converting
                  Shopify store. Get in touch today for a free consultation and
                  custom quote.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    href="mailto:jeewantharashmika80@gmail.com"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#FF7262",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      textTransform: "none",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    href="https://wa.me/+94771234567"
                    target="_blank"
                    variant="outlined"
                    sx={{
                      borderColor: "#fff",
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      textTransform: "none",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#FF7262",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    WhatsApp Chat
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Container>

          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
