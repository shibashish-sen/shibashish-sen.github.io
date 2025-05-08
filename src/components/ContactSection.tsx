import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ContactSection: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
    <Box display="flex" alignItems="center" mb={2}>
      <CalendarMonthIcon color="primary" sx={{ mr: 1 }} />
      <Typography variant="h5" fontWeight={600}>
        Contact
      </Typography>
    </Box>
    <Typography variant="body1" mb={2}>
      Interested in connecting or discussing opportunities? Schedule a meeting with me:
    </Typography>
    <Button
      variant="contained"
      color="primary"
      href="https://calendly.com/YOUR_CALENDLY_USERNAME"
      target="_blank"
    >
      Book a Meeting on Calendly
    </Button>
  </Paper>
);

export default ContactSection; 