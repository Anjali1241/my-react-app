import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function FinalMessage() {
  return (
    <Box sx={{ p: 5 }}>
      <Paper elevation={4} sx={{ p: 4, maxWidth: 800, mx: 'auto', backgroundColor: '#ffe0e6' }}>
        <Typography variant="h5" gutterBottom textAlign="center">
          My Final Words 💌
        </Typography>
        <Typography variant="body1" lineHeight={1.8}>
          I may not say it every day, but you are incredibly special to me.
          I want you in my life, forever and always.
          I’ll pray that you achieve everything you deserve — especially that central government job — so our dreams can become reality.
          ❤️ With all my heart, Anjali
        </Typography>
      </Paper>
    </Box>
  );
}

export default FinalMessage;