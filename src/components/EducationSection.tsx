"use client"

import type React from "react"
import { Box, Typography, Container, Paper, useTheme, Avatar } from "@mui/material"
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
    background: "radial-gradient(circle at 10% 90%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },
}))

const GlassPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.5)",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  borderRadius: 16,
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    borderColor: "rgba(124, 58, 237, 0.3)",
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

const CollegeLogo = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
  backgroundColor: "rgba(30, 41, 59, 0.7)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1) rotate(5deg)",
    boxShadow: "0 12px 25px rgba(124, 58, 237, 0.3)",
  },
}))

const MotionBox = motion(Box)

const AboutSection: React.FC = () => {
  const theme = useTheme()

  return (
    <SectionContainer id="about">
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle variant="h2">About Me</SectionTitle>
          <SectionSubtitle variant="h6">Product Management & AI Product Management Aspirant</SectionSubtitle>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              lineHeight: 1.8,
              mb: 6,
              fontSize: "1.1rem",
            }}
          >
            7+ years of experience as an ML Engineer, Product Developer, and Frontend Team Lead. Passionate about
            building impactful products at the intersection of AI and user experience.
          </Typography>
        </MotionBox>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          <MotionBox
            sx={{ flex: 1 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <GlassPaper elevation={0}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                <CollegeLogo src="/placeholder.svg?height=80&width=80" alt="UC San Diego Logo" />
              </Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{
                  color: theme.palette.primary.light,
                  textAlign: "center",
                }}
              >
                Master of Science in Computer Science
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom align="center">
                University of California, San Diego
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                2021 - 2023
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Specialized in Artificial Intelligence and Machine Learning. Graduated with a 3.8 GPA.
              </Typography>
            </GlassPaper>
          </MotionBox>

          <MotionBox
            sx={{ flex: 1 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <GlassPaper elevation={0}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                <CollegeLogo src="/placeholder.svg?height=80&width=80" alt="NIT Durgapur Logo" />
              </Box>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{
                  color: theme.palette.primary.light,
                  textAlign: "center",
                }}
              >
                Bachelor of Technology in Computer Science
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom align="center">
                National Institute of Technology, Durgapur
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                2017 - 2021
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Graduated with First Class Honors. Active member of the Computer Science Society.
              </Typography>
            </GlassPaper>
          </MotionBox>
        </Box>
      </Container>
    </SectionContainer>
  )
}

export default AboutSection
