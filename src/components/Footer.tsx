import type React from "react"
import { Box, Container, Typography, Link, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#f8fafc",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  borderTop: "1px solid #e5e7eb",
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&:hover": {
    color: "#7c3aed",
    backgroundColor: "rgba(124, 58, 237, 0.04)",
  },
}))

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {currentYear} Shibashish Sen. All rights reserved.
          </Typography>

          <Box>
            <SocialIconButton aria-label="LinkedIn" onClick={() => window.open("https://linkedin.com/in/shibashish-sen", "_blank")}>
              <LinkedInIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="GitHub" onClick={() => window.open("https://github.com/shibashish-sen", "_blank")}>
              <GitHubIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="Twitter" onClick={() => window.open("https://twitter.com/shibashish-sen", "_blank")}>
              <TwitterIcon />
            </SocialIconButton>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          Built with React and Material-UI |{" "}
          <Link href="https://github.com/shibashish-sen/shibashish-sen.github.io" target="_blank" color="inherit">
            View Source
          </Link>
        </Typography>
      </Container>
    </FooterContainer>
  )
}

export default Footer
