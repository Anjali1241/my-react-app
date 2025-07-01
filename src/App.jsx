import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import BackgroundMusic from './components/BackgroundMusic';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import MemoryTimeline from './components/MemoryTimeline';
import LoveList from './components/LoveList';
import LoveQuiz from './components/LoveQuiz';
import FinalMessage from './components/FinalMessage';

function App() {
  return (
    <Box sx={{ backgroundColor: '#fff0f3' }}>
      <BackgroundMusic />
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h3" color="error" fontWeight="bold" gutterBottom>
          Happy Birthday Prof. Saurabh Shukla 🎂
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          On this special day, I want to remind you how precious you are to me.
          May your day be filled with smiles, love, and unforgettable moments. 💖
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Start Memory Journey ❤️
        </Button>
      </Container>

      <PhotoGallery />
      <LoveLetter />
      <MemoryTimeline />
      <LoveList />
      <LoveQuiz />
      <FinalMessage />
    </Box>
  );
}

export default App;