import React, { useState, useEffect } from 'react';
import Header from '../../../layouts/Header';
import ScrollToTop from 'react-scroll-to-top';
import '../../../global.css';
import Footer from '../../../layouts/Footer';
import { Box } from '@mui/material';
import ThemeLayout from '../../../Theme/ThemeLayout';
import Layout from '../../../layouts/xCamera/Layout';
import SeoSection from '../../../components/shoezone/SeoSection';

const IndexPage = () => {
  const [themeMode, setThemeMode] = useState(() => {
    return typeof window !== 'undefined'
      ? localStorage.getItem('themeMode') || 'light'
      : 'light';
  });
  // const theme = useTheme();

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);


  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <SeoSection
        title={'Comprehensive Figma Design System for a Client'}
        description={
          'Custom Figma design system for a client, ensuring consistency across digital products and streamlining development workflows.'
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
              zIndex: 100000,
            }}
          />
          <Layout
            cover={
              'https://cdn.jeewantharashmika.com/projects/design_system_cover.png'
            }
            projectImage={
              'https://cdn.jeewantharashmika.com/projects/design_system.png'
            }
            title='Comprehensive Figma Design System for a Client'
            roles={'UI/UX Designer'}
            description="My latest project involved creating a complete, customized design system for a client, built entirely in Figma. This system serves as the single source of truth for the client's digital products, ensuring consistency across all platforms while accelerating their development workflow."
            client='Personal Project'
          />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
