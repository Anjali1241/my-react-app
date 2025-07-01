import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const events = [
  '28 Jan 2025 - First meet after job 🎉',
  '14 Feb 2025 - Expressed feelings 💌',
  'Night ride & dinner with cousins 🍽️',
  'Sweet silly fights & cute conversations 😄'
];

function MemoryTimeline() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Our Memory Timeline 🗓️
      </Typography>
      <List>
        {events.map((event, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={event} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MemoryTimeline;