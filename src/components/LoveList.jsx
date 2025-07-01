import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

const favorites = [
  'Your look in blue 💙',
  'Your caring nature 🤗',
  'How you say "What happened Anjali?" 😅',
  'Your love for me despite my mood swings ❤️'
];

function LoveList() {
  return (
    <Box sx={{ p: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Things I Adore About You 💕
      </Typography>
      <Stack spacing={2} alignItems="center">
        {favorites.map((item, idx) => (
          <Chip key={idx} label={item} color="secondary" variant="outlined" sx={{ fontSize: '1rem', p: 1 }} />
        ))}
      </Stack>
    </Box>
  );
}

export default LoveList;