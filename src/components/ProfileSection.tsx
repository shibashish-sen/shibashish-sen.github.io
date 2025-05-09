import type React from "react"
import { Avatar, Box, Typography, Button, Stack, Chip, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import DownloadIcon from "@mui/icons-material/Download"

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  background: "#ffffff",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}))

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 160,
  height: 160,
  border: "4px solid white",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  [theme.breakpoints.down("md")]: {
    width: 120,
    height: 120,
  },
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "3.5rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}))

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: theme.spacing(1.5),
  borderRadius: "50%",
}))

const ProfileSection: React.FC = () => (
  <HeroSection>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ mr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
          <LargeAvatar>SS</LargeAvatar>
        </Box>

        <Box>
          <HeroTitle variant="h1">Shibashish Sen</HeroTitle>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 4 }}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={() => window.open("/resume.pdf", "_blank")}
              sx={{
                backgroundColor: "#7c3aed",
                "&:hover": { backgroundColor: "#6d28d9" },
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Download Resume
            </Button>

            <Stack direction="row" spacing={1}>
              <SocialButton
                variant="outlined"
                onClick={() => window.open("https://linkedin.com/in/shibashish-sen", "_blank")}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </SocialButton>
              <SocialButton
                variant="outlined"
                onClick={() => window.open("https://github.com/shibashish-sen", "_blank")}
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </SocialButton>
              <SocialButton 
                variant="outlined" 
                onClick={() => window.location.href = "mailto:shibashish.sen@gmail.com"} 
                aria-label="Email"
              >
                <EmailIcon />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
          >
            <Chip label="Product Management" color="primary" variant="outlined" />
            <Chip label="AI/ML" color="primary" variant="outlined" />
            <Chip label="Frontend Development" color="primary" variant="outlined" />
            <Chip label="UX Design" color="primary" variant="outlined" />
          </Stack>
        </Box>
      </Box>
    </Container>
  </HeroSection>
)

export default ProfileSection
