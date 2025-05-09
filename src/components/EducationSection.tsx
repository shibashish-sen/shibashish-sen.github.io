import type React from "react"
import { Box, Typography, Container, Paper } from "@mui/material"

const AboutSection: React.FC = () => (
  <Box id="about" sx={{ py: 10, backgroundColor: "#ffffff" }}>
    <Container maxWidth="lg">

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#7c3aed",
            mb: 2,
          }}
        >
          Product Management & AI Product Management Aspirant
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          7+ years of experience as an ML Engineer, Product Developer, and Frontend Team Lead. Passionate about
          building impactful products at the intersection of AI and user experience.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              border: "1px solid #eaeaea",
              borderRadius: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Master of Science in Computer Science
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              University of California, San Diego
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2021 - 2023
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Specialized in Artificial Intelligence and Machine Learning. Graduated with a 3.8 GPA.
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              height: "100%",
              border: "1px solid #eaeaea",
              borderRadius: 2,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Bachelor of Technology in Computer Science
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              National Institute of Technology, Durgapur
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2017 - 2021
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Graduated with First Class Honors. Active member of the Computer Science Society.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default AboutSection
