import type React from "react"
import { Box, Typography, Container, Chip, Card, CardContent } from "@mui/material"
import { styled } from "@mui/material/styles"
import WorkIcon from "@mui/icons-material/Work"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import PersonIcon from "@mui/icons-material/Person"
import BarChartIcon from "@mui/icons-material/BarChart"
import LayersIcon from "@mui/icons-material/Layers"
import BuildIcon from "@mui/icons-material/Build"

const SkillCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "12px",
  border: "1px solid #eaeaea",
  boxShadow: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    borderColor: "#d4d4d8",
  },
}))

const IconCircle = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: "50%",
  backgroundColor: "#f3e8ff", // Light purple background
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    color: "#7c3aed", // Purple icon color
    fontSize: 28,
  },
}))

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: "16px",
  fontWeight: 500,
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  "&:hover": {
    backgroundColor: "#f3f4f6",
  },
}))

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
    <Box id="skills" sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Skills & Expertise</SectionTitle>
        <SectionSubtitle variant="h6">
          I blend strategic product thinking with technical expertise to deliver impactful AI solutions.
        </SectionSubtitle>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {skillCategories.map((category, index) => (
            <Box key={index} sx={{ width: { xs: "100%", md: "calc(50% - 12px)", lg: "calc(33.33% - 16px)" } }}>
              <SkillCard>
                <CardContent sx={{ p: 3 }}>
                  <Box display="flex" alignItems="center">
                    <IconCircle>{category.icon}</IconCircle>
                    <Typography variant="h5" fontWeight={600} ml={2}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                    {category.skills.map((skill, idx) => (
                      <SkillChip key={idx} label={skill} />
                    ))}
                  </Box>
                </CardContent>
              </SkillCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default SkillsSection
