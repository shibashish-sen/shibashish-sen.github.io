import React from "react"
import { Box, Typography, Container, List, ListItem, ListItemText, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import SchoolIcon from "@mui/icons-material/School"

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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}))

const PublicationTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.1rem",
  marginBottom: theme.spacing(0.5),
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
}))

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
    <Box id="publications" sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Publications & Patents</SectionTitle>
        <SectionSubtitle variant="h6">
          My research contributions and intellectual property in AI and product development.
        </SectionSubtitle>

        <HeaderContainer>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 0 }}>
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

        <List>
          {publications.map((pub, index) => (
            <StyledListItem key={index}>
              <ListItemText
                primary={
                  <PublicationTitle>
                    {pub.title}
                  </PublicationTitle>
                }
                secondary={
                  <>
                    <PublicationMeta>
                      {pub.journal}, {pub.year}
                    </PublicationMeta>
                    <PublicationDescription>
                      {pub.description}
                    </PublicationDescription>
                  </>
                }
              />
            </StyledListItem>
          ))}
        </List>

        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 1, mt: 6, color: "#7c3aed" }}>
          Patents
        </Typography>

        <List>
          {patents.map((patent, index) => (
            <StyledListItem key={index}>
              <ListItemText
                primary={
                  <PublicationTitle>
                    {patent.title}
                  </PublicationTitle>
                }
                secondary={
                  <>
                    <PublicationMeta>
                      {patent.journal}, {patent.year}
                    </PublicationMeta>
                    <PublicationDescription>
                      {patent.description}
                    </PublicationDescription>
                  </>
                }
              />
            </StyledListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}

export default PublicationsSection
