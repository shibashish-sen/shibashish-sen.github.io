import React from 'react';
import { Box, Typography, Paper, Button, Link, List, ListItem, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const PublicationsSection: React.FC = () => (
  <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
    <Box display="flex" alignItems="center" mb={2}>
      <SchoolIcon color="primary" sx={{ mr: 1 }} />
      <Typography variant="h5" fontWeight={600}>
        Publications & Patents
      </Typography>
    </Box>
    <List>
      <ListItem>
        <ListItemText primary="[Your publication or patent title here]" secondary="Journal/Conference, Year" />
      </ListItem>
      {/* Add more ListItem components for each publication/patent */}
    </List>
    <Button
      variant="contained"
      color="primary"
      href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
      target="_blank"
      sx={{ mt: 2 }}
    >
      View on Google Scholar
    </Button>
  </Paper>
);

export default PublicationsSection; 