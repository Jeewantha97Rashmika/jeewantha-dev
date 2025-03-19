import React from 'react';
import '../../../global.css';
import { Box } from '@mui/material';
import Header from '../../../layouts/Header';
import Footer from '../../../layouts/Footer';
import ScrollToTop from 'react-scroll-to-top';
import ThemeLayout from '../../../Theme/ThemeLayout';
import Layout from '../../../layouts/xCamera/Layout';
import Cover from '../../../images/radika-dilanka-cover.png';
import SeoSection from '../../../components/shoezone/SeoSection';
import DesignImage from '../../../images/radika-dilanka-design.png';
import useThemeMode from '../../../customHooks/useThemeMode';

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <SeoSection
        title={
          ' Radika Dilanka Portfolio Website | UI/UX Design by Jeewantha Rashmika'
        }
        description={
          'Clean and modern portfolio UI/UX design for Radika Dilanka, focused on usability and aesthetics.'
        }
        canonical={'projects/radika-dilanka/'}
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
            checkLive='https://radikadilanka.com/'
            cover={Cover}
            projectImage={DesignImage}
            title='Modern Portfolio Website for Professionals'
            roles={'UI/UX Designer'}
            description='I crafted this personal portfolio website by blending the client’s vision with my professional expertise and industry knowledge. The result is a seamless, visually compelling, and user-friendly design that perfectly represents their brand and skills.'
            client='Radika Dilanka'
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
