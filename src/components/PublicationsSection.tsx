import type React from "react"
import { Box, Typography, Paper, Card, CardContent, CardActions, Button } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"
import ArticleIcon from "@mui/icons-material/Article"
import LaunchIcon from "@mui/icons-material/Launch"

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
  // Add more publications as needed
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
  // Add more patents as needed
]

const PublicationsSection: React.FC = () => (
  <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
    <Box display="flex" alignItems="center" mb={3}>
      <ArticleIcon color="primary" sx={{ mr: 1 }} />
      <Typography variant="h5" fontWeight={700}>
        Publications & Patents
      </Typography>
    </Box>

    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 2 }}>
      Research Publications
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
      {publications.map((pub, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ bgcolor: "background.default" }}>
            <CardContent>
              <Typography variant="h6" component="h3" fontWeight={600}>
                {pub.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {pub.journal}, {pub.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {pub.description}
              </Typography>
            </CardContent>
            {pub.url && (
              <CardActions>
                <Button size="small" startIcon={<LaunchIcon />} href={pub.url} target="_blank">
                  Read Publication
                </Button>
              </CardActions>
            )}
          </Card>
        </Box>
      ))}
    </Box>

    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 2 }}>
      Patents
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {patents.map((patent, index) => (
        <Box key={index} sx={{ width: '100%' }}>
          <Card variant="outlined" sx={{ bgcolor: "background.default" }}>
            <CardContent>
              <Typography variant="h6" component="h3" fontWeight={600}>
                {patent.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {patent.journal}, {patent.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {patent.description}
              </Typography>
            </CardContent>
            {patent.url && (
              <CardActions>
                <Button size="small" startIcon={<LaunchIcon />} href={patent.url} target="_blank">
                  View Patent
                </Button>
              </CardActions>
            )}
          </Card>
        </Box>
      ))}
    </Box>

    <Box sx={{ mt: 3, textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
        target="_blank"
        startIcon={<SchoolIcon />}
      >
        View on Google Scholar
      </Button>
    </Box>
  </Paper>
)

export default PublicationsSection
