import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import '../App.css'

const AboutUs = () => {
  return (
    <Box className="about-section"
    >
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#1f1f1f', color: '#fff', '&:hover': { backgroundColor: '#333' } }}
        >
          Read More
        </Button>
      </Container>
    </Box>
  );
};

export default AboutUs;
