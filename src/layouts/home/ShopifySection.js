import React from 'react';
import { Box, Container, Grid, Typography, Button, useTheme, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { navigate } from 'gatsby';
import { Store, ArrowRight, Palette, Code, Zap, CheckCircle } from 'lucide-react';
import shopifyLogo from '../../images/shopify.svg';

export default function ShopifySection() {
  const theme = useTheme();

  const handleGetStarted = () => {
    navigate('/shopify-store-setup');
  };

  const services = [
    {
      icon: <Store size={24} />,
      title: 'Complete Store Setup',
      description: 'End-to-end Shopify store development from concept to launch'
    },
    {
      icon: <Palette size={24} />,
      title: 'Custom Theme Design',
      description: 'Unique, brand-focused themes that convert visitors to customers'
    },
    {
      icon: <Code size={24} />,
      title: 'Custom Development',
      description: 'Advanced functionality and integrations tailored to your needs'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Fast-loading, SEO-optimized stores for better conversions'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        background: `linear-gradient(135deg, ${theme.palette.background?.default} 0%, ${theme.palette.background?.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'left', mb: 8 }}>
            {/* <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                color: '#5E8E3E',
                fontWeight: 600,
                fontFamily: 'Montserrat',
                mb: 2,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Shopify Development Services
            </Typography>
             */}
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '36px', md: '48px', lg: '56px' },
                fontWeight: 'bold',
                lineHeight: 1.1,
                fontFamily: 'Montserrat',
                color: theme.palette.text?.primary,
                mb: 3,
              }}
            >
              I'll Build Your
              <br />
              <span style={{ color: '#5E8E3E' }}>Dream Shopify Store</span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '18px', md: '20px' },
                color: theme.palette.text?.secondary,
                fontFamily: 'Montserrat',
                lineHeight: 1.6,
                maxWidth: '700px',
                mb: 5,
              }}
            >
              As a specialized Shopify developer and UI/UX designer, I create high-converting 
              e-commerce stores that not only look stunning but drive real business results. 
              Let's transform your vision into a profitable online presence.
            </Typography>

            {/* Logo Display */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mb: 6,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  padding: '20px 40px',
                  backgroundColor: 'rgba(94, 142, 62, 0.1)',
                  borderRadius: '16px',
                  border: '1px solid rgba(94, 142, 62, 0.2)',
                }}
              >
                <img 
                  src={shopifyLogo} 
                  alt="Shopify Logo" 
                  style={{ 
                    width: 50, 
                    height: 50,
                    objectFit: 'contain'
                  }} 
                />
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#5E8E3E',
                    fontFamily: 'Montserrat',
                  }}
                >
                  Certified Shopify Expert
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Services Grid
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: theme.palette.background?.paper,
                    border: '1px solid rgba(94, 142, 62, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(94, 142, 62, 0.15)',
                      borderColor: '#5E8E3E',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(94, 142, 62, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        color: '#5E8E3E',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: theme.palette.text?.primary,
                        fontFamily: 'Montserrat',
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: theme.palette.text?.secondary,
                        fontFamily: 'Montserrat',
                        lineHeight: 1.5,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, #5E8E3E 0%, #7FA639 100%)',
              borderRadius: '20px',
              padding: { xs: '40px 24px', md: '60px 40px' },
              color: 'white',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                mb: 2,
              }}
            >
              Ready to Launch Your Shopify Store?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                fontFamily: 'Montserrat',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              Let's discuss your project and create an e-commerce solution that drives growth 
              and maximizes your online potential.
            </Typography>
            
            <Button
              onClick={handleGetStarted}
              sx={{
                backgroundColor: 'white',
                color: '#5E8E3E',
                padding: '14px 32px',
                borderRadius: '12px',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Project
              <ArrowRight size={20} />
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
