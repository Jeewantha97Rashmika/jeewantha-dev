import React from 'react';
import Header from '../../../layouts/Header';
import ScrollToTop from 'react-scroll-to-top';
import '../../../global.css';
import Footer from '../../../layouts/Footer';
import { Box } from '@mui/material';
import ThemeLayout from '../../../Theme/ThemeLayout';
import Layout from '../../../layouts/xCamera/Layout';
import SeoSection from '../../../components/shoezone/SeoSection';
import DesignImage from '../../../images/photography-portfolio.png';
import useThemeMode from '../../../customHooks/useThemeMode';

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <SeoSection
        title={'Photographer Portfolio Website Design'}
        description={
          "Elegant UI design for a professional photographer's digital platform, enhancing brand identity while showcasing exceptional photography."
        }
        canonical={'projects/x-camera/'}
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
              'https://cdn.jeewantharashmika.com/projects/x_camera_cover.png'
            }
            projectImage={DesignImage}
            title='Photographer Portfolio Website Design'
            roles={'UI/UX Designer'}
            description="My recent UI design project showcases a sophisticated digital platform for a professional photographer, creating a visual narrative that elevates their brand while highlighting their exceptional photography skills. The interface serves as an elegant canvas that complements the photographer's work without overshadowing it."
            client='Personal Project'
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
