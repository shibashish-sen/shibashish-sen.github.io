import React from 'react';
import { Avatar, Box, Typography, Paper } from '@mui/material';

const ProfileSection: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center', mb: 4 }}>
    <Avatar sx={{ width: 96, height: 96, mr: 4 }}>
      SS
    </Avatar>
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Shibashish Sen
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Product Management & AI Product Management Aspirant
      </Typography>
      <Typography variant="body1">
        7+ years of experience as an ML Engineer, Product Developer, and Frontend Team Lead. Passionate about building impactful products at the intersection of AI and user experience.
      </Typography>
    </Box>
  </Paper>
);

export default ProfileSection; 