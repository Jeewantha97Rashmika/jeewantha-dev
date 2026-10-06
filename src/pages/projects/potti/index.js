import React from 'react';
import Header from '../../../layouts/Header';
import ScrollToTop from 'react-scroll-to-top';
import '../../../global.css';
import Footer from '../../../layouts/Footer';
import { Box } from '@mui/material';
import ThemeLayout from '../../../Theme/ThemeLayout';
import Layout from '../../../layouts/potti/Layout';
import SeoSection from '../../../components/shoezone/SeoSection';
import useThemeMode from '../../../customHooks/useThemeMode';

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <SeoSection
        title={'Potti - Saving Tracker App Design'}
        description={
          'UI/UX and brand design for Potti, a playful savings tracker app for iOS and Android that helps users reach their goals.'
        }
        canonical={'projects/potti/'}
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
            style={{ padding: '5px', zIndex: 100000 }}
          />
          <Layout />
          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
