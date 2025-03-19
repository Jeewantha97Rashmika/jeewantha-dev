import React from 'react';
import Header from '../layouts/Header';
import Home from '../layouts/Home';
import '../global.css';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';
import ThemeLayout from '../Theme/ThemeLayout';
import ScrollToTop from 'react-scroll-to-top';
import useThemeMode from '../customHooks/useThemeMode';

const IndexPage = () => {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <>
      <Helmet>
        <title>Jeewantha Rashmika - UI/UX Designer & Engineer Sri Lanka</title>

        <meta
          name='description'
          content=' UI/UX designer & engineer specializing in user-friendly web & app design, prototyping, and development. Creating seamless digital experiences.'
        />
        <link rel='canonical' href='https://jeewantharashmika.com/' />
        <meta
          property='og:title'
          content='Jeewantha Rashmika - UI/UX Designer & Engineer | Expert in Web & App Design'
        />
        <meta
          property='og:description'
          content='UI/UX designer & engineer specializing in user-friendly web & app design, prototyping, and development. Creating seamless digital experiences.'
        />
        <meta property='og:url' content='https://jeewantharashmika.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://cdn.jeewantharashmika.com/og/jeewantha_rashmika.png'
        />
        <meta
          property='og:site_name'
          content='Jeewantha - UI/UX Designer & Engineer'
        />
      </Helmet>

      <ThemeLayout themeMode={themeMode}>
        <Box>
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
          <Home />

          <Footer />
        </Box>
      </ThemeLayout>
    </>
  );
};

export default IndexPage;
