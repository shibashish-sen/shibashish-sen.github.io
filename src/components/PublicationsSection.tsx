"use client"

import type React from "react"
import { Box, Typography, Container, List, ListItem, ListItemText, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import SchoolIcon from "@mui/icons-material/School"
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
    background: "radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.05)",
    transform: "translateX(5px)",
  },
}))

const PublicationTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.1rem",
  marginBottom: theme.spacing(0.5),
  background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

const PublicationMeta = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
  marginBottom: theme.spacing(0.5),
}))

const PublicationDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.95rem",
  color: theme.palette.text.secondary,
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}))

const ScholarButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: theme.spacing(1),
  borderRadius: "50%",
  marginLeft: theme.spacing(2),
  backgroundColor: "rgba(30, 41, 59, 0.6)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.2)",
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(124, 58, 237, 0.2)",
  },
}))

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(6),
  color: theme.palette.primary.light,
}))

const MotionBox = motion(Box)
const MotionListItem = motion(StyledListItem)

interface Publication {
  title: string
  journal: string
  year: string
  description: string
  url?: string
}

const publications: Publication[] = [
  {
    title: "Machine Learning Approaches for Product Recommendation Systems",
    journal: "Journal of Artificial Intelligence Research",
    year: "2022",
    description: "A comprehensive study of various machine learning algorithms for e-commerce recommendation systems.",
    url: "https://example.com/publication1",
  },
  {
    title: "User Experience Design in AI-Powered Applications",
    journal: "International Conference on Human-Computer Interaction",
    year: "2021",
    description:
      "Exploring the challenges and best practices in designing intuitive user interfaces for AI applications.",
    url: "https://example.com/publication2",
  },
  {
    title: "Ethical Considerations in AI Product Development",
    journal: "AI Ethics Journal",
    year: "2023",
    description: "A framework for incorporating ethical considerations in AI product development lifecycle.",
    url: "https://example.com/publication3",
  },
]

const patents: Publication[] = [
  {
    title: "Method and System for Predictive User Interface Adaptation",
    journal: "US Patent Office - Patent No. 12345678",
    year: "2020",
    description:
      "A novel approach to dynamically adapt user interfaces based on predicted user behavior and preferences.",
    url: "https://patents.google.com/patent/US12345678",
  },
  {
    title: "AI-Powered Content Recommendation System with User Privacy Protection",
    journal: "US Patent Office - Patent No. 87654321",
    year: "2022",
    description:
      "An innovative system that provides personalized content recommendations while maintaining user privacy through differential privacy techniques.",
    url: "https://patents.google.com/patent/US87654321",
  },
]

const PublicationsSection: React.FC = () => {
  return (
    <SectionContainer id="publications">
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle variant="h2">Publications & Patents</SectionTitle>
          <SectionSubtitle variant="h6">
            My research contributions and intellectual property in AI and product development.
          </SectionSubtitle>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeaderContainer>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                mb: 0,
                background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Research Publications
            </Typography>
            <ScholarButton
              variant="outlined"
              onClick={() => window.open("https://scholar.google.com/citations?user=YOUR_ID", "_blank")}
              aria-label="Google Scholar Profile"
            >
              <SchoolIcon />
            </ScholarButton>
          </HeaderContainer>
        </MotionBox>

        <List>
          {publications.map((pub, index) => (
            <MotionListItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <ListItemText
                primary={<PublicationTitle>{pub.title}</PublicationTitle>}
                secondary={
                  <>
                    <PublicationMeta>
                      {pub.journal}, {pub.year}
                    </PublicationMeta>
                    <PublicationDescription>{pub.description}</PublicationDescription>
                  </>
                }
              />
            </MotionListItem>
          ))}
        </List>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SectionHeader>Patents</SectionHeader>
        </MotionBox>

        <List>
          {patents.map((patent, index) => (
            <MotionListItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <ListItemText
                primary={<PublicationTitle>{patent.title}</PublicationTitle>}
                secondary={
                  <>
                    <PublicationMeta>
                      {patent.journal}, {patent.year}
                    </PublicationMeta>
                    <PublicationDescription>{patent.description}</PublicationDescription>
                  </>
                }
              />
            </MotionListItem>
          ))}
        </List>
      </Container>
    </SectionContainer>
  )
}

export default PublicationsSection
