import React from 'react';
import { Container, Box, Grid, Typography, useTheme } from '@mui/material';
import ContactBox from '../../components/ProjectDetails/ContactBox';
import TitleDesc from '../../components/ProjectDetails/TitleDesc';
import AppIcon from '../../images/potii-images/app-icon-light.png';
import iphone1 from '../../images/potii-images/iphone-1.png';
import iphone2 from '../../images/potii-images/iphone-2.png';
import iphone3 from '../../images/potii-images/iphone-3.png';
import iphone4 from '../../images/potii-images/iphone-4.png';
import iphone5 from '../../images/potii-images/iphone-5.png';
import android1 from '../../images/potii-images/android-1.png';
import android2 from '../../images/potii-images/android-2.png';
import android3 from '../../images/potii-images/android-3.png';
import android4 from '../../images/potii-images/android-4.png';

const iphoneScreens = [iphone1, iphone2, iphone3, iphone4, iphone5];
const androidScreens = [android1, android2, android3, android4];

function ScreenGroup({ title, screens, alt }) {
  const theme = useTheme();
  return (
    <Box sx={{ my: { xs: 5, md: 8 } }}>
      <Typography
        variant='h2'
        sx={{
          fontSize: { xs: '24px', md: '30px' },
          fontWeight: 'bold',
          mb: 3,
          color: theme.palette.textColor?.secondary,
          fontFamily: 'Montserrat',
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2}>
        {screens.map((src, i) => (
          <Grid item xs={6} md={screens.length > 4 ? 2.4 : 3} key={i}>
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              loading='lazy'
              width='100%'
              style={{ borderRadius: '1rem', display: 'block' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Layout() {
  return (
    <Container>
      <Box
        sx={{
          mt: '3rem',
          mb: '3rem',
          py: { xs: 6, md: 10 },
          borderRadius: '1rem',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          background: 'linear-gradient(135deg, #FFC32B 0%, #FF8A1F 100%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={AppIcon}
          alt='Potti app icon'
          style={{ width: 'min(240px, 55%)', borderRadius: '22%' }}
        />
      </Box>

      <TitleDesc
        title='Potti - Saving Tracker App'
        description='Potti is a friendly savings tracker that makes putting money aside feel like a game. Users set goals such as a new home, a trip or a laptop, drop coins into their Potti and watch progress grow. I designed the brand, app icon, playful 3D mascot and the iOS and Android interface with a warm orange palette that keeps saving positive and motivating.'
        roles='UI/UX Designer, Brand Identity'
        client='Personal Project'
      />

      <ScreenGroup title='iOS Screens' screens={iphoneScreens} alt='Potti iOS screen' />
      <ScreenGroup
        title='Android Screens'
        screens={androidScreens}
        alt='Potti Android screen'
      />
      <Typography sx={{ textAlign: 'center', fontFamily: 'Montserrat' }}>
        <a href='/projects/potti/privacy-policy' style={{ color: '#FF7262' }}>
          Potti Privacy Policy
        </a>
      </Typography>
      <ContactBox />
    </Container>
  );
}
