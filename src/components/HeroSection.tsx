import React, { useState, useEffect } from "react"
import { Box, Avatar, Typography, Stack, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import DownloadIcon from "@mui/icons-material/Download"

const Container = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 32px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(135deg, #f8f9ff 0%, #e8eaf6 100%)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.03) 0%, rgba(124, 58, 237, 0) 70%)",
    zIndex: 1,
  },
}))

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: "4px solid white",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(3),
}))

const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.5rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  textAlign: "center",
}))

const TypewriterText = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  textAlign: "center",
  maxWidth: "600px",
  minHeight: "2.5rem", // Prevent layout shift
  fontFamily: "monospace",
  "&::after": {
    content: '""',
    display: "inline-block",
    width: "0.6em",
    height: "1.2em",
    backgroundColor: theme.palette.primary.main,
    marginLeft: theme.spacing(0.5),
    verticalAlign: "middle",
    animation: "blink 1s step-end infinite",
  },
  "@keyframes blink": {
    "0%, 100%": {
      opacity: 1
    },
    "50%": {
      opacity: 0
    }
  }
}))

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: theme.spacing(1.5),
  borderRadius: "50%",
}))

const ResumeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7c3aed",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 24px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#6d28d9",
  },
}))

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  const keywords = ["Product Strategy", "AI", "Engineering"]
  const typingSpeed = 120
  const deletingSpeed = 50
  const waitTime = 800

  useEffect(() => {
    const currentWord = keywords[currentIndex]
    
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, waitTime)
      return () => clearTimeout(timer)
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % keywords.length)
      } else {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      }
    } else {
      if (displayText === currentWord) {
        setIsWaiting(true)
      } else {
        const timer = setTimeout(() => {
          setDisplayText((prev) => currentWord.slice(0, prev.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      }
    }
  }, [displayText, isDeleting, currentIndex, isWaiting])

  return (
    <Container>
      <ContentWrapper>
        <LargeAvatar>SS</LargeAvatar>
        <NameText>Shibashish Sen</NameText>
        <TypewriterText>
          {displayText}
        </TypewriterText>

        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
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

        <ResumeButton
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Download Resume
        </ResumeButton>
      </ContentWrapper>
    </Container>
  )
}

export default HeroSection 