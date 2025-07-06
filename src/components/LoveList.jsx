import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

const favorites = [
  'Your caring nature 🤗',
  'Your look in blue, black and white 💙',
  'How you say "What happened Anjali?" 😅',
  'Your love for me despite my mood swings ❤️',
  'The way you handle my anger and make me feel safe 🛡️',
  'The way you understand me without me saying anything 🧠',
];

function LoveList() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        background: 'linear-gradient(to bottom, #fff0f5, #ffe4ec)',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          fontFamily: `'Pacifico', cursive`,
          color: '#d81b60',
          mb: 4,
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
        }}
      >
        Things I Adore About You 💕
      </Typography>

      <Paper
        elevation={4}
        sx={{
          maxWidth: '900px',
          mx: 'auto',
          p: { xs: 3, sm: 4 },
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {favorites.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                px: 2,
                py: 1.5,
                m: 1,
                backgroundColor: '#fce4ec',
                border: '1.5px solid #ec407a',
                borderRadius: '20px',
                color: '#ad1457',
                fontWeight: 500,
                fontSize: '1rem',
                textAlign: 'center',
                maxWidth: '100%',
                transition: 'all 0.3s ease-in-out',
                wordBreak: 'break-word',
                whiteSpace: 'normal',
                '&:hover': {
                  backgroundColor: '#f8bbd0',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 10px rgba(236, 64, 122, 0.2)',
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

export default LoveList;
