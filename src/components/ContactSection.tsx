import type React from "react"
import { Box, Typography, Paper, Button, TextField, Stack, Divider } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import SendIcon from "@mui/icons-material/Send"

const ContactSection: React.FC = () => (
  <Paper elevation={1} sx={{ p: 4, mb: 4 }}>
    <Box display="flex" alignItems="center" mb={3}>
      <EmailIcon color="primary" sx={{ mr: 1 }} />
      <Typography variant="h5" fontWeight={700}>
        Get In Touch
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          I'm always open to discussing product design work or partnership opportunities.
        </Typography>

        <Stack spacing={2} sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:your.email@example.com"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            your.email@example.com
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            linkedin.com/in/your-profile
          </Button>
          <Button
            variant="outlined"
            startIcon={<TwitterIcon />}
            href="https://twitter.com/your-twitter"
            target="_blank"
            fullWidth
            sx={{ justifyContent: "flex-start" }}
          >
            @your_twitter_handle
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" fontWeight={600} gutterBottom>
          Schedule a Meeting
        </Typography>
        <Typography variant="body1" mb={2}>
          Interested in discussing opportunities? Book a time slot that works for you:
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CalendarMonthIcon />}
          href="https://calendly.com/YOUR_CALENDLY_USERNAME"
          target="_blank"
          fullWidth
        >
          Schedule on Calendly
        </Button>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Send a Message
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth label="Name" variant="outlined" margin="normal" required />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" required type="email" />
          <TextField fullWidth label="Subject" variant="outlined" margin="normal" />
          <TextField fullWidth label="Message" variant="outlined" margin="normal" required multiline rows={4} />
          <Button variant="contained" color="primary" startIcon={<SendIcon />} sx={{ mt: 2 }} fullWidth>
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  </Paper>
)

export default ContactSection
