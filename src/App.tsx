import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import ProfileSection from './components/ProfileSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Box>
          <ProfileSection />
          <PublicationsSection />
          <ContactSection />
        </Box>
      </Container>
    </>
  );
}

export default App;
