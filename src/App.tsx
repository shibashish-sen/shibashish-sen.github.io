"use client"

import type React from "react"
import { Box, CssBaseline, useMediaQuery } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Sidebar from "./components/Sidebar"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import PublicationsSection from "./components/PublicationsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import AboutSection from "./components/EducationSection"
import HeroSection from "./components/HeroSection"
import theme from "./theme"

const App: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          position: "relative",
          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", height: "100vh", zIndex: 1 }} className="hero-section">
          <HeroSection />
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: "1400px",
            mx: "auto",
            px: isMobile ? 2 : 4,
            gap: 4,
            zIndex: 1,
          }}
        >
          {!isMobile && (
            <Box sx={{ width: "280px", flexShrink: 0 }}>
              <Sidebar />
            </Box>
          )}

          <Box
            sx={{
              flex: 1,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div id="about">
              <AboutSection />
            </div>
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <PublicationsSection />
            <ContactSection />
          </Box>
        </Box>

        <Box sx={{ position: "relative", width: "100%", zIndex: 1 }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
