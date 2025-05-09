import React, { useState, useEffect } from "react"
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Sidebar from "./components/Sidebar"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import PublicationsSection from "./components/PublicationsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import AboutSection from "./components/EducationSection"
import HeroSection from "./components/HeroSection"

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#7c3aed",
    },
  },
})

const App: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setShowSidebar(rect.bottom <= 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <Box sx={{ position: "relative", height: "100vh" }} className="hero-section">
          <HeroSection />
        </Box>
        <Box sx={{ 
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row"
        }}>
          <Sidebar show={showSidebar} />
          <Box sx={{ 
            flex: 1, 
            ml: isMobile ? 0 : "calc(25% + 140px)",
            mr: isMobile ? 0 : "10%",
            width: isMobile ? "100%" : "calc(70% - 140px)",
            px: isMobile ? 2 : 0
          }}>
            <div id="about-section">
              <AboutSection />
            </div>
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <PublicationsSection />
            <ContactSection />
          </Box>
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
