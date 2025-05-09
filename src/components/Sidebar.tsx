import React from "react"
import { 
  Box, 
  Avatar, 
  Typography, 
  Button, 
  Stack, 
  List, 
  ListItem, 
  IconButton, 
  Drawer, 
  ListItemText, 
  useMediaQuery, 
  useTheme,
  Fade 
} from "@mui/material"
import { styled } from "@mui/material/styles"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import DownloadIcon from "@mui/icons-material/Download"
import MenuIcon from "@mui/icons-material/Menu"
import SchoolIcon from "@mui/icons-material/School"

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 280,
  height: "100vh",
  position: "fixed",
  left: "20%",
  top: 0,
  backgroundColor: "white",
  padding: theme.spacing(2),
  paddingTop: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  transform: "translateX(-50%)",
  transition: "opacity 0.2s ease-in-out",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 280,
    backgroundColor: "white",
    padding: theme.spacing(2),
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
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "4px",
  },
}))


const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  border: "4px solid white",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(2),
}))

const NameText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1.7rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  textAlign: "center",
}))

const SocialButton = styled(Button)(({ theme }) => ({
  minWidth: "auto",
  padding: theme.spacing(1.5),
  borderRadius: "50%",
}))

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "none",
  width: "100%",
  justifyContent: "flex-start",
  padding: theme.spacing(0.5, 2),
  "&:hover": {
    backgroundColor: "rgba(124, 58, 237, 0.04)",
  },
}))

const ResumeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#7c3aed",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "8px 24px",
  borderRadius: "8px",
  width: "100%",
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#6d28d9",
  },
}))

const StyledList = styled(List)({
  padding: 0,
  width: "80%",
  "& .MuiListItem-root": {
    padding: 0,
    marginBottom: 4,
  },
})

interface SidebarProps {
  show: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
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

  const drawerContent = (
    <>
      <TopSection>
        <LargeAvatar>SS</LargeAvatar>
        <NameText>Shibashish Sen</NameText>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
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
      </TopSection>

      <NavSection>
        <StyledList>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <NavButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: activeSection === item.href.slice(1) ? "#7c3aed" : "text.primary",
                  "&:hover": {
                    backgroundColor: "rgba(124, 58, 237, 0.04)",
                  },
                }}
              >
                {item.label}
              </NavButton>
            </ListItem>
          ))}
        </StyledList>
      </NavSection>
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
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {show && (
        <Fade in={true} timeout={200}>
          <SidebarContainer>
            {drawerContent}
          </SidebarContainer>
        </Fade>
      )}

      <MobileDrawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </MobileDrawer>
    </>
  )
}

export default Sidebar 