"use client"

import type React from "react"
import { Box, Typography, Button, TextField, Container } from "@mui/material"
import { styled } from "@mui/material/styles"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import SendIcon from "@mui/icons-material/Send"
import { motion } from "framer-motion"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 20% 60%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)",
    pointerEvents: "none",
  },
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(1),
  background: "linear-gradient(135deg, #e2e8f0 0%, #c4b5fd 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: "800px",
}))

const GlassBox = styled(Box)(({ theme }) => ({
  backdropFilter: "blur(16px)",
  backgroundColor: "rgba(30, 41, 59, 0.5)",
  borderRadius: 16,
  border: "1px solid rgba(148, 163, 184, 0.1)",
  padding: theme.spacing(4),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    borderColor: "rgba(124, 58, 237, 0.3)",
  },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 12,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(30, 41, 59, 0.3)",
    transition: "all 0.3s ease",
    "& fieldset": {
      borderColor: "rgba(148, 163, 184, 0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(124, 58, 237, 0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.text.secondary,
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
  },
}))

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  padding: "12px 24px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 25px rgba(124, 58, 237, 0.4)",
    transform: "translateY(-3px)",
  },
}))

const MotionBox = motion(Box)
const MotionGlassBox = motion(GlassBox)

const ContactSection: React.FC = () => (
  <SectionContainer id="contact">
    <Container maxWidth="lg">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle variant="h2">Get In Touch</SectionTitle>
        <SectionSubtitle variant="h6">
          I'm always open to discussing product design work or partnership opportunities.
        </SectionSubtitle>
      </MotionBox>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
        <MotionBox
          sx={{ width: { xs: "100%", md: "41.66%" } }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MotionGlassBox whileHover={{ y: -10 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{
                color: (theme) => theme.palette.primary.light,
                mb: 3,
              }}
            >
              Schedule a Meeting
            </Typography>
            <Typography variant="body1" mb={3}>
              Interested in discussing opportunities? Book a time slot that works for you:
            </Typography>
            <GradientButton
              variant="contained"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={() => window.open("https://calendly.com/shibashish-sen", "_blank")}
              fullWidth
            >
              Schedule on Calendly
            </GradientButton>
          </MotionGlassBox>
        </MotionBox>

        <MotionBox
          sx={{ width: { xs: "100%", md: "58.33%" } }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MotionGlassBox whileHover={{ y: -10 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{
                color: (theme) => theme.palette.primary.light,
                mb: 3,
              }}
            >
              Send a Message
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)" } }}>
                  <StyledTextField fullWidth label="Name" variant="outlined" required />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "calc(50% - 12px)" } }}>
                  <StyledTextField fullWidth label="Email" variant="outlined" required type="email" />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <StyledTextField fullWidth label="Subject" variant="outlined" />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <StyledTextField fullWidth label="Message" variant="outlined" required multiline rows={4} />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <GradientButton variant="contained" size="large" startIcon={<SendIcon />} fullWidth>
                    Send Message
                  </GradientButton>
                </Box>
              </Box>
            </Box>
          </MotionGlassBox>
        </MotionBox>
      </Box>
    </Container>
  </SectionContainer>
)

export default ContactSection
