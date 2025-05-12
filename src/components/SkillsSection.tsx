"use client"

import type React from "react"
import { Box, Typography, Container, Chip, Card, CardContent } from "@mui/material"
import { styled } from "@mui/material/styles"
import WorkIcon from "@mui/icons-material/Work"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import PersonIcon from "@mui/icons-material/Person"
import BarChartIcon from "@mui/icons-material/BarChart"
import LayersIcon from "@mui/icons-material/Layers"
import BuildIcon from "@mui/icons-material/Build"
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
    background: "radial-gradient(circle at 80% 40%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
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

const SkillCard = styled(Card)(({ theme }) => ({
  height: "100%",
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.5)",
  borderRadius: 16,
  border: "1px solid rgba(148, 163, 184, 0.1)",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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

const IconCircle = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(124, 58, 237, 0.1) 100%)",
  backdropFilter: "blur(5px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.2)",
  transition: "all 0.3s ease",
  "& svg": {
    color: theme.palette.primary.light,
    fontSize: 28,
    transition: "all 0.3s ease",
  },
}))

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: "16px",
  fontWeight: 500,
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(124, 58, 237, 0.15)",
  border: "1px solid rgba(124, 58, 237, 0.2)",
  color: theme.palette.primary.light,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.25)",
    transform: "translateY(-2px)",
  },
}))

const MotionBox = motion(Box)
const MotionCard = motion(SkillCard)

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Product Strategy",
    icon: <WorkIcon />,
    skills: [
      "Product Roadmapping",
      "Go-to-Market",
      "Product Discovery",
      "Market Analysis",
      "Competitive Analysis",
      "Business Modeling",
    ],
  },
  {
    title: "AI & ML",
    icon: <LightbulbIcon />,
    skills: [
      "NLP Applications",
      "Computer Vision",
      "Recommendation Systems",
      "LLM Integration",
      "AI Ethics",
      "Model Evaluation",
    ],
  },
  {
    title: "User Research",
    icon: <PersonIcon />,
    skills: [
      "User Interviews",
      "Usability Testing",
      "A/B Testing",
      "Persona Development",
      "Journey Mapping",
      "User Surveys",
    ],
  },
  {
    title: "Data Analysis",
    icon: <BarChartIcon />,
    skills: ["Product Analytics", "SQL", "Python", "Cohort Analysis", "Funnel Analysis", "Retention Analysis"],
  },
  {
    title: "Agile & Process",
    icon: <LayersIcon />,
    skills: ["Scrum", "Kanban", "Sprint Planning", "Backlog Management", "OKRs", "PRDs"],
  },
  {
    title: "Tools",
    icon: <BuildIcon />,
    skills: ["Jira", "Confluence", "Figma", "Amplitude", "Mixpanel", "Tableau", "Miro", "Notion"],
  },
]

const SkillsSection: React.FC = () => {
  return (
    <SectionContainer id="skills">
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle variant="h2">Skills & Expertise</SectionTitle>
          <SectionSubtitle variant="h6">
            I blend strategic product thinking with technical expertise to deliver impactful AI solutions.
          </SectionSubtitle>
        </MotionBox>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {skillCategories.map((category, index) => (
            <MotionBox
              key={index}
              sx={{ width: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.33% - 16px)" } }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <MotionCard
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(124, 58, 237, 0.3)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center">
                    <motion.div
                      
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 8px 25px rgba(124, 58, 237, 0.3)",
                      }}
                    >
                      <IconCircle>{category.icon}</IconCircle>
                    </motion.div>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      ml={2}
                      sx={{
                        background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                    {category.skills.map((skill, idx) => (
                      <SkillChip key={idx} label={skill} />
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </SectionContainer>
  )
}

export default SkillsSection
