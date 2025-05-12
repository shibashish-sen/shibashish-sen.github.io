"use client"

import type React from "react"
import { Box, Container, Typography, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import { motion } from "framer-motion"

const FooterContainer = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(15, 23, 42, 0.8)",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  borderTop: "1px solid rgba(148, 163, 184, 0.1)",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to top, rgba(124, 58, 237, 0.05) 0%, transparent 100%)",
    pointerEvents: "none",
  },
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.light,
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    transform: "translateY(-3px)",
  },
}))

const MotionBox = motion(Box)

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {currentYear} Shibashish Sen. All rights reserved.
          </Typography>

          <Box>
            <SocialIconButton
              aria-label="LinkedIn"
              onClick={() => window.open("https://linkedin.com/in/shibashish-sen", "_blank")}
            >
              <LinkedInIcon />
            </SocialIconButton>
            <SocialIconButton
              aria-label="GitHub"
              onClick={() => window.open("https://github.com/shibashish-sen", "_blank")}
            >
              <GitHubIcon />
            </SocialIconButton>
            <SocialIconButton
              aria-label="Twitter"
              onClick={() => window.open("https://twitter.com/shibashish-sen", "_blank")}
            >
              <TwitterIcon />
            </SocialIconButton>
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              mt: 2,
              position: "relative",
              zIndex: 1,
              "&:hover": {
                color: (theme) => theme.palette.primary.light,
              },
              transition: "color 0.3s ease",
            }}
          >
            Built with React and Material-UI |{" "}
            <Box
              component="a"
              href="https://github.com/shibashish-sen/shibashish-sen.github.io"
              target="_blank"
              sx={{
                color: "inherit",
                textDecoration: "none",
                borderBottom: "1px dashed",
                "&:hover": {
                  borderBottomStyle: "solid",
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              View Source
            </Box>
          </Typography>
        </MotionBox>
      </Container>
    </FooterContainer>
  )
}

export default Footer
