import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function FinalMessage() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
        background: 'linear-gradient(to bottom, #fff0f5, #ffe4ec)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 5 },
          maxWidth: 800,
          mx: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: `'Pacifico', cursive`,
            color: '#c2185b',
          }}
        >
          My Final Words 💌
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.9,
            color: '#4e1c2b',
            fontFamily: `'Georgia', serif`,
            whiteSpace: 'pre-line',
          }}
        >
          I may not say it every day, but you are incredibly special to me.

          I want you in my life, forever and always.

          I’ll always pray that you achieve everything you dream of — especially that central government job — because I believe in you.

          Our dreams are meant to be lived together. Let’s make them come true. 💖

          With all my heart,  
          <br />
          <strong style={{ fontFamily: 'Pacifico, cursive', color: '#c2185b', fontSize: '1.2rem' }}>
            Anjali 💕
          </strong>
        </Typography>
      </Paper>
    </Box>
  );
}

export default FinalMessage;
