import type React from "react"
import { Avatar, Box, Typography, Paper, Button, Stack, Chip } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import DownloadIcon from "@mui/icons-material/Download"

const ProfileSection: React.FC = () => (
  <Paper
    elevation={1}
    sx={{
      p: 4,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      mb: 4,
      overflow: "hidden",
      position: "relative",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100px",
        background: "linear-gradient(90deg, rgba(37,99,235,0.1) 0%, rgba(99,102,241,0.1) 100%)",
        zIndex: 0,
      }}
    />

    <Avatar
      sx={{
        width: 120,
        height: 120,
        mr: { xs: 0, md: 4 },
        mb: { xs: 3, md: 0 },
        border: "4px solid white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        zIndex: 1,
      }}
    >
      SS
    </Avatar>

    <Box sx={{ zIndex: 1 }}>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Shibashish Sen
      </Typography>

      <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
        Product Management & AI Product Management Aspirant
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        7+ years of experience as an ML Engineer, Product Developer, and Frontend Team Lead. Passionate about building
        impactful products at the intersection of AI and user experience.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
        <Button variant="contained" startIcon={<DownloadIcon />} href="/resume.pdf" target="_blank">
          Download Resume
        </Button>

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/shibashish-sen"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </Button>
          <Button variant="outlined" href="mailto:your.email@example.com" aria-label="Email">
            <EmailIcon />
          </Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip label="Product Management" color="primary" variant="outlined" />
        <Chip label="AI/ML" color="primary" variant="outlined" />
        <Chip label="Frontend Development" color="primary" variant="outlined" />
        <Chip label="UX Design" color="primary" variant="outlined" />
      </Stack>
    </Box>
  </Paper>
)

export default ProfileSection
