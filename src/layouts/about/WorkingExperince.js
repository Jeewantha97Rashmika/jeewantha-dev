import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkingContent from "../../components/about/WorkingContent";
import WorkingContent02 from "../../components/about/WorkingContent02";
import Heading2 from "../../components/common/Heading2";
import Education01 from "../../components/about/Education1";
import Education02 from "../../components/about/Education2";
import { motion } from "framer-motion";
import HarlfCircel from "../../images/circel.svg";
export default function WorkingExperince() {
  return (
    <Box
      component={motion.dev}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100 }}
      sx={{
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          top: { xs: 100, md: 100 }, // Align to top
          right: { xs: 0, md: 0 }, // Align to rightZ
          width: "auto",
          height: "auto",
          display: { xs: "none", lg: "block" },
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(180deg)",
            overflow: "hidden",
          }}
          alt="HarlfCircel"
        />
      </Box>

      {/* Bottom HarlfCircel */}
      <Box
        component={motion.div}
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, type: "spring" }}
        sx={{
          position: "absolute",
          display: { xs: "none", lg: "block" },
          bottom: { xs: 220, md: 200 },
          left: { xs: -30, md: 0 },
          width: "auto",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(0deg)",
          }}
          alt="HarlfCircel"
        />
      </Box>
      <Container sx={{ pt: { md: 10, xs: 5 }, pb: { md: 10, xs: 5 } }}>
        <Box sx={{ width: "100%", mb: { md: 10, xs: 5 } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Heading2 component={"h2"} text={"Work experience"} />
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
                        backgroundColor: "#FF595A",
                        width: "20px",
                        height: "20px",
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkingContent />
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: "#FF595A",
                        width: "20px",
                        height: "20px",
                        // Set custom color here
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <WorkingContent02 />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
            <Grid item xs={12} md={6}>
              <Heading2 component={"h2"} text={"Education"} />
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
                        backgroundColor: "#FF595A",
                        width: "20px",
                        height: "20px",
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
                        backgroundColor: "#FF595A",
                        width: "20px",
                        height: "20px",
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
    </Box>
  );
}
