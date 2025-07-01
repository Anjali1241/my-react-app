import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const fullText = `Our journey began on 28th January 2025, the first day of my job... You asked cringy questions 😄 but they made me smile.
Slowly, I realized you are the kind of man I want in my life. You understand me, you handle my attitude, you are my safe place.
On Valentine’s Day, I expressed my feelings. I said “I like you, not love you,” because I mean everything when I say something.
I want a future with you. I pray for your success and that we stay together forever. 💖`;

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
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        A Letter From My Heart 💌
      </Typography>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto', backgroundColor: '#fff5f7' }}>
        <Typography variant="body1" lineHeight={1.8}>
          {displayedText}
        </Typography>
      </Paper>
    </Box>
  );
}

export default LoveLetter;