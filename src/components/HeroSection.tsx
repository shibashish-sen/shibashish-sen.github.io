"use client"

import type React from "react"
import { useState, useEffect } from "react"
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
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0) 70%)",
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
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(30, 41, 59, 0.4)",
  padding: "3rem",
  borderRadius: "24px",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  maxWidth: "800px",
  width: "100%",
  transition: "all 0.5s ease",
  "&:hover": {
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transform: "translateY(-10px)",
    backgroundColor: "rgba(30, 41, 59, 0.5)",
  },
})

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: "4px solid rgba(124, 58, 237, 0.3)",
  boxShadow: "0 10px 30px rgba(124, 58, 237, 0.3)",
  marginBottom: theme.spacing(3),
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "scale(1.05) rotate(5deg)",
    boxShadow: "0 15px 35px rgba(124, 58, 237, 0.4)",
  },
}))

const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "3rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  textAlign: "center",
  background: "linear-gradient(135deg, #e2e8f0 0%, #c4b5fd 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    background: "linear-gradient(135deg, #f8fafc 0%, #a78bfa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}))

const TypewriterText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
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
    backgroundColor: "#a78bfa",
    marginLeft: theme.spacing(0.5),
    verticalAlign: "middle",
    animation: "blink 1s step-end infinite",
  },
  "@keyframes blink": {
    "0%, 100%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
  },
}))

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: theme.spacing(1.5),
  borderRadius: "50%",
  backgroundColor: "rgba(30, 41, 59, 0.6)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(148, 163, 184, 0.2)",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.2)",
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(124, 58, 237, 0.2)",
  },
}))

const ResumeButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "12px 28px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 25px rgba(124, 58, 237, 0.4)",
    transform: "translateY(-5px) scale(1.03)",
  },
}))

// Animated particles in the background
const Particles = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: 0,
  "& .particle": {
    position: "absolute",
    display: "block",
    background: "rgba(124, 58, 237, 0.2)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
}))

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; size: number; x: number; y: number; speed: number }>>(
    [],
  )

  const keywords = ["Product Strategy", "AI", "Engineering"]
  const typingSpeed = 120
  const deletingSpeed = 50
  const waitTime = 800

  // Create particles for the background
  useEffect(() => {
    const particleCount = 20
    const newParticles = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 10 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 1 + 0.5,
      })
    }

    setParticles(newParticles)

    // Animate particles
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
        })),
      )
    }

    const interval = setInterval(animateParticles, 100)
    return () => clearInterval(interval)
  }, [])

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
      <Particles>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: Math.random() * 0.5 + 0.3,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(124, 58, 237, 0.3)`,
            }}
          />
        ))}
      </Particles>

      <ContentWrapper>
        <LargeAvatar>SS</LargeAvatar>
        <NameText>Shibashish Sen</NameText>
        <TypewriterText>{displayText}</TypewriterText>

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
            onClick={() => (window.location.href = "mailto:shibashish.sen@gmail.com")}
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
