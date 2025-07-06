import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const events = [
  '28 Jan 2025 - First meet after job 🎉',
  '14 Feb 2025 - Expressed feelings 💌',
  'Night ride & dinner with cousins 🍽️',
  'Sweet silly fights & cute conversations 😄',
  'Every time I got angry, you were the first to come close and calm me down 😡❤️',
  'I cherish every moment with you — whether we’re laughing, fighting, having romantic talks, enjoying our favorite bike rides, or those special car rides, especially the surprise video you made for me. 🚗🎁',
];

function MemoryTimeline() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        backgroundColor: '#fff0f3',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          fontFamily: `'Pacifico', cursive`,
          color: '#c2185b',
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
        }}
      >
        Our Memory Timeline 🗓️
      </Typography>

      <Box
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 },
        }}
      >
        {events.map((event, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: '16px',
              backgroundColor: '#ffffff',
              position: 'relative',
              pl: { xs: 5, sm: 6 },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '16px',
                top: '20px',
                width: '12px',
                height: '12px',
                backgroundColor: '#e91e63',
                borderRadius: '50%',
                boxShadow: '0 0 0 4px #fff0f5',
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                lineHeight: 1.7,
                color: '#4e1c2b',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'unset',
                wordBreak: 'break-word',
              }}
            >
              {event}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MemoryTimeline;
