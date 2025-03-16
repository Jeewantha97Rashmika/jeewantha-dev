import * as React from 'react';
import { Box, Container, Grid, useTheme } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkingContent from '../../components/about/WorkingContent';
import WorkingContent02 from '../../components/about/WorkingContent02';
import Education01 from '../../components/about/Education1';
import Education02 from '../../components/about/Education2';

import SkillsChips from './SkillChips';
import WorkingContent03 from '../../components/about/WorkingContent03';

import HalfSpacing from '../../components/common/HalfSpacing';
import TitleDescription from '../../components/common/TitleDescription';
export default function WorkingExperince() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgColor?.graybg,
        transition: 'background-color 0.5s ease, color 0.5s ease',
        position: 'relative',
      }}
    >
      <Container
      // component={motion.div}
      // initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
      // whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      // viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% of the component is in view
      // transition={{ type: "spring", stiffness: 100 }}
      // sx={{ pt: { md: 10, xs: 5 }, pb: { md: 5, xs: 5 } }}
      >
        <HalfSpacing />
        <TitleDescription
          title={'Working Exp & Academic Milestones'}
          description={
            'My journey blends technical expertise, formal education, and hands-on experience, shaping me into the professional I am today.'
          }
        />
        <HalfSpacing />
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#FF7262',
                        transition:
                          'background-color 0.5s ease, color 0.5s ease',

                        width: '20px',
                        height: '20px',
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkingContent03 />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#FF7262',
                        transition:
                          'background-color 0.5s ease, color 0.5s ease',

                        width: '20px',
                        height: '20px',
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkingContent02 />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#FF7262',
                        transition:
                          'background-color 0.5s ease, color 0.5s ease',

                        width: '20px',
                        height: '20px',
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkingContent />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid item xs={12} md={6}>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#FF7262',
                        transition:
                          'background-color 0.5s ease, color 0.5s ease',

                        width: '20px',
                        height: '20px',
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Education01 />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#FF7262',
                        transition:
                          'background-color 0.5s ease, color 0.5s ease',

                        width: '20px',
                        height: '20px',
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Education02 />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <HalfSpacing />
      <SkillsChips />
      {/* </ScrollEffect> */}
    </Box>
  );
}
