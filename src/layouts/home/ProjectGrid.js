import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  Skeleton,
} from '@mui/material';
import Photographer from '../../images/Photographer.json';
import Radika from '../../images/radika.json';
import ProjectItem from './ProjectItem';
import DesignSystem from '../../images/design_system.json';
import AppleVisionPro from '../../images/apple_vision_pro.json';
import { FaBehanceSquare } from 'react-icons/fa';
import TitleDescription from '../../components/common/TitleDescription';
import Spacing from '../../components/common/Spacing';
import HalfSpacing from '../../components/common/HalfSpacing';

// Create a placeholder component for ProjectItem
const ProjectItemPlaceholder = () => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Box
        sx={{
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: theme.palette.cardBgColor?.main,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          aspectRatio: '16/9',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image placeholder */}
        <Skeleton
          variant='rectangular'
          width='100%'
          height='60%'
          animation='wave'
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          }}
        />

        {/* Content placeholder */}
        <Box sx={{ p: 3, flex: 1 }}>
          {/* Title placeholder */}
          <Skeleton
            variant='text'
            width='80%'
            height={32}
            animation='wave'
            sx={{
              mb: 1,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            }}
          />

          {/* Subheading placeholder */}
          <Skeleton
            variant='text'
            width='100%'
            height={20}
            animation='wave'
            sx={{
              mb: 2,
              bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            }}
          />

          {/* Tools icons placeholder */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                variant='circular'
                width={24}
                height={24}
                animation='wave'
                sx={{
                  bgcolor:
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default function ProjectGrid() {
  const shopifyDevelopment = [
    'https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg',
    'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  ];

  const Development = [
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    'https://cdn.iconscout.com/icon/free/png-512/free-gatsby-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944886.png?f=webp&w=256',
    'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  ];

  const uidesign = [
    'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
  ];

  const projectData = [
    {
      heading: 'Photographer Portfolio Website ',
      tools: uidesign,
      subheading:
        'Modern Photographer official web site UI/UX Design using figma and photoshop',
      imgSrc: Photographer,
      technology: 'uidesign',
      href: '/x-camera',
    },
    {
      heading: 'Radika dilanka Official Website',
      tools: uidesign,
      subheading:
        "Radikadilanka's official website UI/UX Design using figma and photoshop.",
      imgSrc: Radika,
      technology: 'uidesign',
      href: '/radika-dilanka',
    },
    {
      heading: 'Comprehensive Design System',
      tools: uidesign,
      subheading:
        'creating a complete, customized design system for a client, built entirely in Figma',
      imgSrc: DesignSystem,
      technology: 'uidesign',
      href: '/design-system',
    },
    {
      heading: 'Apple Vision Pro UI Reimagined',
      tools: uidesign,
      subheading:
        "Figma design project explores how popular social media platforms might evolve in Apple's spatial computing environment",
      imgSrc: AppleVisionPro,
      technology: 'uidesign',
      href: '/apple-vision-pro',
    },
  ];

  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  // Simulate loading delay (you can remove this in production and use real image loading state)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.palette.bgColor?.graybg,
      }}
    >
      {/* <Spacing /> */}
      <HalfSpacing />
      <Container>
        <TitleDescription
          title={'Featured Projects'}
          description={
            'Explore a curated collection of my best work, highlighting expertise in UI/UX design, innovation, and impactful results.'
          }
        />
        <Grid container spacing={4} sx={{ mt: 3 }}>
          {loading
            ? // Display placeholders while loading
              Array.from(new Array(4)).map((_, index) => (
                <ProjectItemPlaceholder key={index} />
              ))
            : // Display actual project items when loaded
              projectData.map((project, key) => (
                <ProjectItem key={key} project={project} />
              ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 10,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: theme.palette.cardBgColor?.main,
            padding: '30px 30px',
            borderRadius: '10px',
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: theme.palette.textColor?.Secondary,
                  fontFamily: 'Montserrat',
                  lineHeight: '29px',
                }}
              >
                Explore More UI/UX Design Projects on Behance
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                href='https://www.behance.net/jeewantharashmika'
                target='_blank'
                sx={{
                  backgroundColor: '#0057ff',
                  width: { xs: '100%', md: 'auto' },
                  mt: { xs: 2, md: 0 },
                  borderColor: theme.palette.btnColor?.main,
                  borderRadius: '30px',
                  padding: '10px 20px ',
                  textTransform: 'none',
                  transition:
                    'background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease',
                  '&:hover': {
                    transition:
                      'background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease',
                    backgroundColor: '#0057ff',
                    borderRadius: '0px',
                    borderColor: theme.palette.borderColor?.graybg,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: 'Montserrat',
                    color: theme.palette.btnColor?.text,
                  }}
                >
                  View more in Behance
                </Typography>
                <FaBehanceSquare
                  size={20}
                  style={{
                    marginLeft: '10px',
                    color: '#fff',
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Spacing />
    </div>
  );
}
