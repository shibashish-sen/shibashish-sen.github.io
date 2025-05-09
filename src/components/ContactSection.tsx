import type React from "react"
import { Box, Typography, Button, TextField, Stack, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import SendIcon from "@mui/icons-material/Send"

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: "800px",
}))

const ContactButton = styled(Button)(({ theme }) => ({
  justifyContent: "flex-start",
  padding: "12px 20px",
  borderRadius: "8px",
  marginBottom: theme.spacing(2),
  borderColor: "#e5e7eb",
  color: theme.palette.text.primary,
  "&:hover": {
    borderColor: "#7c3aed",
    backgroundColor: "rgba(124, 58, 237, 0.04)",
  },
}))

const ContactSection: React.FC = () => (
  <Box id="contact" sx={{ py: 10, backgroundColor: "#ffffff" }}>
    <Container maxWidth="lg">
      <SectionTitle variant="h2">Get In Touch</SectionTitle>
      <SectionSubtitle variant="h6">
        I'm always open to discussing product design work or partnership opportunities.
      </SectionSubtitle>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
        <Box sx={{ width: { xs: "100%", md: "41.66%" } }}>

          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: "#7c3aed", mb: 3 }}>
            Schedule a Meeting
          </Typography>
          <Typography variant="body1" mb={3}>
            Interested in discussing opportunities? Book a time slot that works for you:
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<CalendarMonthIcon />}
            onClick={() => window.open("https://calendly.com/shibashish-sen", "_blank")}
            fullWidth
            sx={{
              backgroundColor: "#7c3aed",
              "&:hover": { backgroundColor: "#6d28d9" },
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Schedule on Calendly
          </Button>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "58.33%" } }}>
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: "#7c3aed", mb: 3 }}>
            Send a Message
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)" } }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)" } }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                  type="email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SendIcon />}
                  fullWidth
                  sx={{
                    backgroundColor: "#7c3aed",
                    "&:hover": { backgroundColor: "#6d28d9" },
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
)

export default ContactSection
