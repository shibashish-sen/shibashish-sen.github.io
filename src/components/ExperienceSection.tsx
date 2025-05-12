"use client"

import type React from "react"
import { Box, Typography, Container } from "@mui/material"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab"
import { styled } from "@mui/material/styles"
import { motion } from "framer-motion"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 60%)",
    pointerEvents: "none",
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(1),
  background: "linear-gradient(135deg, #e2e8f0 0%, #c4b5fd 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: "800px",
}))

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  "&::before": {
    padding: 0,
  },
}))

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.5)",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  borderRadius: 16,
  padding: theme.spacing(3),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(124, 58, 237, 0.3)",
  },
}))

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
    boxShadow: "0 0 20px rgba(124, 58, 237, 0.7)",
  },
}))

const MotionBox = motion(Box)
const MotionTimelineItem = motion(StyledTimelineItem)

const ExperienceSection: React.FC = () => (
  <SectionContainer id="experience">
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle variant="h2">Professional Experience</SectionTitle>
        <SectionSubtitle variant="h6">
          My journey from ML engineering to product development and team leadership.
        </SectionSubtitle>
      </MotionBox>

      <Timeline position="alternate">
        <MotionTimelineItem
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TimelineOppositeContent color="text.secondary">2020 - Present</TimelineOppositeContent>
          <TimelineSeparator>
            <StyledTimelineDot />
            <TimelineConnector sx={{ bgcolor: "rgba(124, 58, 237, 0.3)" }} />
          </TimelineSeparator>
          <StyledTimelineContent>
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              sx={{
                background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Frontend Team Lead
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Led a team of 5 frontend developers, implementing Agile methodologies
              <br />• Architected and developed responsive web applications using React
              <br />• Collaborated with product managers to define product roadmaps
            </Typography>
          </StyledTimelineContent>
        </MotionTimelineItem>

        <MotionTimelineItem
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TimelineOppositeContent color="text.secondary">2018 - 2020</TimelineOppositeContent>
          <TimelineSeparator>
            <StyledTimelineDot />
            <TimelineConnector sx={{ bgcolor: "rgba(124, 58, 237, 0.3)" }} />
          </TimelineSeparator>
          <StyledTimelineContent>
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              sx={{
                background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Product Developer
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Developed and maintained product features for web applications
              <br />• Collaborated with UX designers to implement user-friendly interfaces
              <br />• Participated in product planning and feature prioritization
            </Typography>
          </StyledTimelineContent>
        </MotionTimelineItem>

        <MotionTimelineItem
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TimelineOppositeContent color="text.secondary">2016 - 2018</TimelineOppositeContent>
          <TimelineSeparator>
            <StyledTimelineDot />
          </TimelineSeparator>
          <StyledTimelineContent>
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              sx={{
                background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ML Engineer
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Designed and implemented machine learning models for data analysis
              <br />• Collaborated with data scientists to improve model accuracy
              <br />• Integrated ML models with web applications
            </Typography>
          </StyledTimelineContent>
        </MotionTimelineItem>
      </Timeline>
    </Container>
  </SectionContainer>
)

export default ExperienceSection
