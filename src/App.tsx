import { Container, CssBaseline, Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import ProfileSection from "./components/ProfileSection"
// import ExperienceSection from "./components/ExperienceSection"
// import SkillsSection from "./components/SkillsSection"
// import ProjectsSection from "./components/ProjectsSection"
// import EducationSection from "./components/EducationSection"
import PublicationsSection from "./components/PublicationsSection"
import ContactSection from "./components/ContactSection"
// import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box>
          <ProfileSection />
          {/* <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection /> */}
          <PublicationsSection />
          <ContactSection />
        </Box>
      </Container>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default App
