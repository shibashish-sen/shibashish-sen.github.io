import type React from "react"
import {
  Box,
  Typography,
  Container,
} from "@mui/material"
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: "800px",
}))

const ExperienceSection: React.FC = () => (
  <Box id="experience" sx={{ py: 10, backgroundColor: "#ffffff" }}>
    <Container maxWidth="lg">
      <SectionTitle variant="h2">Professional Experience</SectionTitle>
      <SectionSubtitle variant="h6">
        My journey from ML engineering to product development and team leadership.
      </SectionSubtitle>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2020 - Present</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#7c3aed" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" fontWeight={600}>
              Frontend Team Lead
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Led a team of 5 frontend developers, implementing Agile methodologies
              <br />• Architected and developed responsive web applications using React
              <br />• Collaborated with product managers to define product roadmaps
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2018 - 2020</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#7c3aed" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" fontWeight={600}>
              Product Developer
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Developed and maintained product features for web applications
              <br />• Collaborated with UX designers to implement user-friendly interfaces
              <br />• Participated in product planning and feature prioritization
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2016 - 2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "#7c3aed" }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" fontWeight={600}>
              ML Engineer
            </Typography>
            <Typography color="text.secondary">Company Name</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              • Designed and implemented machine learning models for data analysis
              <br />• Collaborated with data scientists to improve model accuracy
              <br />• Integrated ML models with web applications
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  </Box>
)

export default ExperienceSection
