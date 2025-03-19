import React from 'react';
import Header from '../../layouts/Header';

import '../../global.css';
import ProjectGrid from '../../layouts/home/ProjectGrid';
import SeoSection from '../../components/shoezone/SeoSection';
import ThemeLayout from '../../Theme/ThemeLayout';
import { Box } from '@mui/material';
import ScrollToTop from '../../components/ScrollToTop';
import Footer from '../../layouts/Footer';
import useThemeMode from '../../customHooks/useThemeMode';

export default function Index() {
  const { themeMode, toggleTheme } = useThemeMode();

  return (
    <div>
      <SeoSection
        title={'Photographer Portfolio Website Design'}
        description={
          "Elegant UI design for a professional photographer's digital platform, enhancing brand identity while showcasing exceptional photography."
        }
        canonical={'projects/'}
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
          <ProjectGrid />
          <Footer />
        </Box>
      </ThemeLayout>
    </div>
  );
}
