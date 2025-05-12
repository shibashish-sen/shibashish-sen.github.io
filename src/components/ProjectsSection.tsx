"use client"

import type React from "react"
import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"
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
    background: "radial-gradient(circle at 90% 10%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.5)",
  borderRadius: 16,
  border: "1px solid rgba(148, 163, 184, 0.1)",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(30, 41, 59, 0) 100%)",
    zIndex: 0,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}))

const ProjectChip = styled(Chip)(({ theme }) => ({
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(124, 58, 237, 0.15)",
  border: "1px solid rgba(124, 58, 237, 0.2)",
  color: theme.palette.primary.light,
  margin: theme.spacing(0.5),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.25)",
    transform: "translateY(-2px)",
  },
}))

const ProjectButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.1)",
  },
}))

const MotionBox = motion(Box)
const MotionCard = motion(ProjectCard)

interface Project {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "AI-Powered Product Recommendation Engine",
    description:
      "Developed a machine learning model that analyzes user behavior to provide personalized product recommendations, increasing conversion rates by 25%.",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/shibashish-sen/project1",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description:
      "Created an interactive dashboard for visualizing sales data, customer behavior, and inventory management with real-time updates.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/shibashish-sen/project2",
  },
  {
    title: "Product Management Tool",
    description:
      "Built a collaborative tool for product teams to manage roadmaps, track feature requests, and prioritize backlog items.",
    technologies: ["TypeScript", "React", "Firebase", "Material-UI"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/shibashish-sen/project3",
  },
]

const ProjectsSection: React.FC = () => (
  <SectionContainer id="projects">
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle variant="h2">Featured Projects</SectionTitle>
        <SectionSubtitle variant="h6">
          A selection of my most impactful projects at the intersection of product and technology.
        </SectionSubtitle>
      </MotionBox>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            sx={{ width: { xs: "100%", md: "calc(50% - 16px)", lg: "calc(33.33% - 22px)" } }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <MotionCard whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <ProjectChip key={tech} label={tech} size="small" sx={{ mb: 1 }} />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                {project.demoUrl && (
                  <ProjectButton
                    size="small"
                    startIcon={<LaunchIcon />}
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    Live Demo
                  </ProjectButton>
                )}
                {project.githubUrl && (
                  <ProjectButton
                    size="small"
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    Code
                  </ProjectButton>
                )}
              </CardActions>
            </MotionCard>
          </MotionBox>
        ))}
      </Box>
    </Container>
  </SectionContainer>
)

export default ProjectsSection
