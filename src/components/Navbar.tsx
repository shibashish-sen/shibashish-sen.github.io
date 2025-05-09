"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Typography,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "none",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
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

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: theme.palette.text.primary,
  "& span": {
    color: "#7c3aed",
  },
}))

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)
  const trigger = useScrollTrigger()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleSectionClick = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "publications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "education" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Skills", section: "skills" },
    { label: "Publications", section: "publications" },
    { label: "Contact", section: "contact" },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.section} onClick={() => handleSectionClick(item.section)}>
            <ListItemText
              primary={item.label}
              sx={{ color: activeSection === item.section ? "#7c3aed" : "inherit" }}
            />
          </ListItem>
        ))}
        <ListItem>
          <ResumeButton
            variant="contained"
            onClick={() => window.open("/resume.pdf", "_blank")}
            fullWidth
          >
            Resume
          </ResumeButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #eaeaea",
        transition: "all 0.3s ease",
        "&.MuiPaper-root": {
          boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <LogoText variant="h6" noWrap>
            <span>PM</span>Portfolio
          </LogoText>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.section}
                  onClick={() => handleSectionClick(item.section)}
                  sx={{ color: activeSection === item.section ? "#7c3aed" : "inherit" }}
                >
                  {item.label}
                </NavButton>
              ))}
              <ResumeButton
                variant="contained"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume
              </ResumeButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

export default Navbar
