import type React from "react"
import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Stack, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"

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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  border: "1px solid #eaeaea",
  boxShadow: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    borderColor: "#d4d4d8",
  },
}))

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
  <Box id="projects" sx={{ py: 10, backgroundColor: "#ffffff" }}>
    <Container maxWidth="lg">
      <SectionTitle variant="h2">Featured Projects</SectionTitle>
      <SectionSubtitle variant="h6">
        A selection of my most impactful projects at the intersection of product and technology.
      </SectionSubtitle>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {projects.map((project, index) => (
          <Box key={index} sx={{ width: { xs: "100%", md: "calc(50% - 16px)", lg: "calc(33.33% - 22px)" } }}>
            <ProjectCard>
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mb: 1, bgcolor: "#f3e8ff", color: "#7c3aed", border: "none" }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                {project.demoUrl && (
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    onClick={() => window.open(project.demoUrl, "_blank")}
                    sx={{ color: "#7c3aed" }}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    sx={{ color: "#7c3aed" }}
                  >
                    Code
                  </Button>
                )}
              </CardActions>
            </ProjectCard>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
)

export default ProjectsSection
