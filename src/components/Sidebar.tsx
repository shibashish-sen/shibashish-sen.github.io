"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Box,
  Avatar,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import DownloadIcon from "@mui/icons-material/Download"
import MenuIcon from "@mui/icons-material/Menu"

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  position: "sticky",
  top: 32,
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.7)",
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  border: "1px solid rgba(148, 163, 184, 0.1)",
  maxHeight: "calc(100vh - 64px)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    borderColor: "rgba(124, 58, 237, 0.2)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backdropFilter: "blur(16px)",
    backgroundColor: "rgba(30, 41, 59, 0.9)",
    padding: theme.spacing(2),
    border: "none",
  },
}))

const TopSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}))

const NavSection = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    background: "rgba(30, 41, 59, 0.3)",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#4c1d95",
    borderRadius: "4px",
  },
}))

const SidebarAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  border: "4px solid rgba(124, 58, 237, 0.3)",
  boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
  marginBottom: theme.spacing(2),
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 25px rgba(124, 58, 237, 0.4)",
  },
}))

const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.25rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(1),
  textAlign: "center",
  background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#a78bfa",
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    transform: "translateY(-3px)",
  },
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "0.95rem",
  textTransform: "none",
  width: "100%",
  justifyContent: "flex-start",
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  marginBottom: theme.spacing(1),
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: "#a78bfa",
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    transform: "translateY(-2px)",
    "&::after": {
      width: "80%",
    },
  },
}))

const ResumeButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "10px 16px",
  borderRadius: "12px",
  width: "100%",
  marginTop: theme.spacing(2),
  boxShadow: "0 4px 10px rgba(124, 58, 237, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 6px 15px rgba(124, 58, 237, 0.4)",
    transform: "translateY(-3px)",
  },
}))

const StyledList = styled(List)({
  padding: 0,
  width: "100%",
  "& .MuiListItem-root": {
    padding: 0,
    marginBottom: 4,
  },
})

const Sidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))

      // Find the section that is currently in view
      let currentSection = ""
      let minDistance = Number.MAX_VALUE

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const distance = Math.abs(rect.top)

          if (distance < minDistance) {
            minDistance = distance
            currentSection = section
          }
        }
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize active section

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ]

  const sidebarContent = (
    <>
      <TopSection>
        <SidebarAvatar>SS</SidebarAvatar>
        <NameText>Shibashish Sen</NameText>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
          Product Management & AI
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <SocialButton
            size="small"
            onClick={() => window.open("https://linkedin.com/in/shibashish-sen", "_blank")}
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </SocialButton>
          <SocialButton
            size="small"
            onClick={() => window.open("https://github.com/shibashish-sen", "_blank")}
            aria-label="GitHub Profile"
          >
            <GitHubIcon />
          </SocialButton>
          <SocialButton
            size="small"
            onClick={() => (window.location.href = "mailto:shibashish.sen@gmail.com")}
            aria-label="Email"
          >
            <EmailIcon />
          </SocialButton>
        </Box>
      </TopSection>

      <NavSection>
        <StyledList>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <NavButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: activeSection === item.href.slice(1) ? "#c4b5fd" : "text.primary",
                  backgroundColor: activeSection === item.href.slice(1) ? "rgba(124, 58, 237, 0.15)" : "transparent",
                  fontWeight: activeSection === item.href.slice(1) ? 600 : 500,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    width: activeSection === item.href.slice(1) ? "4px" : "0px",
                    height: "60%",
                    background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
                    borderRadius: "0 4px 4px 0",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&::after": {
                    width: activeSection === item.href.slice(1) ? "50%" : "0%",
                  },
                }}
              >
                {item.label}
              </NavButton>
            </ListItem>
          ))}
        </StyledList>
      </NavSection>

      <ResumeButton
        variant="contained"
        startIcon={<DownloadIcon />}
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        Download Resume
      </ResumeButton>
    </>
  )

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1200,
            backgroundColor: "rgba(30, 41, 59, 0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "rgba(30, 41, 59, 0.9)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <SidebarContainer>{sidebarContent}</SidebarContainer>

      <MobileDrawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {sidebarContent}
      </MobileDrawer>
    </>
  )
}

export default Sidebar
