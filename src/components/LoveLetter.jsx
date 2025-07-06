import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const fullText = `Our journey started on 28th January 2025 — the first day of my job. 
You asked funny and cringy questions 😄, but they made me smile.

Slowly, I started noticing how kind and caring you are. 
You understand me, handle my mood swings, and make me feel safe. 
I began to feel something special.

On Valentine’s Day, I told you, “I like you” — not love — because I don’t say big words unless I truly mean them.

You became an important part of my life. 
I feel lucky to know you, and I wish for a future where we stay together, support each other, and grow together. 💖`;

function LoveLetter() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6 },
        backgroundColor: '#fff0f5',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          fontFamily: `'Pacifico', cursive`,
          color: '#c2185b',
          mb: 4,
        }}
      >
        A Letter from My Heart 💌
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 4 },
          maxWidth: '900px',
          mx: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.8,
            whiteSpace: 'pre-line',
            color: '#4e1c2b',
            fontFamily: `'Georgia', serif`,
          }}
        >
          {displayedText}
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoveLetter;
