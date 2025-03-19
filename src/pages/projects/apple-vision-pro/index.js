import React from 'react';
import Header from '../../../layouts/Header';
import ScrollToTop from 'react-scroll-to-top';
import '../../../global.css';
import Footer from '../../../layouts/Footer';
import { Box } from '@mui/material';
import ThemeLayout from '../../../Theme/ThemeLayout';
import Layout from '../../../layouts/xCamera/Layout';
import DesignImage from '../../../images/vision-pro-design.png';
import SeoSection from '../../../components/shoezone/SeoSection';
import useThemeMode from '../../../customHooks/useThemeMode';

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <SeoSection
        title={'Apple Vision Pro UI Reimagined: Facebook & TikTok'}
        description={
          "Conceptual Figma designs for Facebook and TikTok in Apple's spatial computing environment, optimized for Apple Vision Pro while preserving core functionality"
        }
        canonical={'projects/apple-vision-pro/'}
      />

      <ThemeLayout themeMode={themeMode}>
        <Box
          sx={{
            backgroundColor: themeMode === 'light' ? '#f7f8fa' : '#0b0b0d',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          <Header themeMode={themeMode} toggleTheme={toggleTheme} />
          <ScrollToTop
            top={900}
            smooth
            color='#333'
            style={{
              padding: '5px',
              zIndex: 100000,
            }}
          />
          <Layout
            cover={
              'https://cdn.jeewantharashmika.com/projects/vision_pro_cover.png'
            }
            projectImage={DesignImage}
            title='Apple Vision Pro UI Reimagined: Facebook & TikTok'
            roles={'UI/UX Designer'}
            description="My latest Figma design project explores how popular social media platforms might evolve in Apple's spatial computing environment. These conceptual interfaces for Facebook and TikTok are crafted specifically for the Apple Vision Pro, embracing the device's unique capabilities while maintaining the core functionality users expect."
            client='Personal Project'
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
