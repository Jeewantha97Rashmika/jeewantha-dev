import { Grid, Typography, Box, Container, useTheme } from '@mui/material';
import React from 'react';
import MainBtn from '../../components/MainBtn';
export default function DescriptionLayout({ description, btnTitle }) {
  const theme = useTheme();
  return (
    <Box
      // component={motion.div}
      // initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
      // whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      // viewport={{ once :true, amount: 0.2 }} // Only animate once when 20% of the component is in view
      // transition={{ type: "spring", stiffness: 100 }}
      sx={{
        backgroundColor: theme.palette.bgColor?.dec,
        transition: 'background-color 0.5s ease, color 0.5s ease',
        py: 5,
        height: { xs: '100%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Typography
              sx={{
                fontSize: { xs: '30px', md: '40px' },
                fontWeight: 'bold',
                color: '#0B0C0C',
                fontFamily: 'Montserrat',
              }}
            >
              Why I’m the
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '30px', md: '40px' },
                fontWeight: 'bold',
                fontFamily: 'Montserrat',
                color: theme.palette.textColor?.decText,
              }}
            >
              Right Choice?
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontSize: { xs: '16px' },
                color: '#1F1F1F',
                fontWeight: 600,
                mb: 3,
                fontFamily: 'Montserrat',
              }}
            >
              I specialize in UI/UX design, prototyping, and usability testing
              to create seamless digital experiences. Let’s build something
              innovative together!
            </Typography>
            <MainBtn title={'Let’s Talk'} color='#333333' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
