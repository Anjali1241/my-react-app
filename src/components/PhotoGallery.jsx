import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const photos = [
  '/assets/photo1.jpg',
  '/assets/photo2.jpg',
  '/assets/photo3.jpg'
];

function PhotoGallery() {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Memories Together 📸
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {photos.map((src, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={4}>
              <img src={src} alt={`Memory ${index + 1}`} style={{ width: '100%', borderRadius: 8 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotoGallery;