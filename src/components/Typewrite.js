import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typography, useTheme } from '@mui/material';

export default function Typewrite({ examples }) {
  const [exampleIndex, setExampleIndex] = useState(0);

  const LETTER_DELAY = 0.025;
  const BOX_FADE_DURATION = 0.125;

  const FADE_DELAY = 5;
  const MAIN_FADE_DURATION = 0.25;

  const SWAP_DELAY_IN_MS = 5500;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, []);
  const theme = useTheme();
  return (
    <Typography
      sx={{
        marginBottom: '0.625rem',
        fontSize: { xs: '16px', md: '18px' },
        fontWeight: 400,
        fontFamily: 'Montserrat',
        color: theme.palette.textColor?.main,
        // border: "3px dashed rgba(112, 112, 112, 1)",
        // padding: "0.5rem",
        borderRadius: '0.25rem',
        display: 'inline-flex',
        alignItems: 'center',
        // backgroundColor: "#f6fafd",

        // textTransform: "uppercase",
      }}
    >
      <span
        style={{
          display: 'inline-block',
          backgroundColor: theme.palette.textColor.main,
          transition: 'background-color 0.5s ease, color 0.5s ease',
          width: '10px',
          height: '10px',
        }}
      />
      <span style={{ marginLeft: '0.75rem' }}>
        {examples[exampleIndex].split('').map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: 'easeInOut',
            }}
            key={`${exampleIndex}-${i}`}
            style={{ position: 'relative' }}
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                bottom: '3px',
                left: '1px',
                right: '0',
                top: '3px',
                backgroundColor: '#111111',
                transition: 'background-color 0.5s ease, color 0.5s ease',
              }}
            />
          </motion.span>
        ))}
      </span>
    </Typography>
  );
}
