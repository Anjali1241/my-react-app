import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";

const photos = [img3, img2, img1, img4, img8, img7];

function PhotoGallery() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        backgroundColor: "#fff0f5",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          fontFamily: `'Pacifico', cursive`,
          color: "#d81b60",
          mb: 4,
        }}
      >
        Memories Together 📸
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {photos.map((src, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper
              elevation={6}
              sx={{
                overflow: "hidden",
                borderRadius: "16px",
                height: { xs: 250, sm: 300 },
              }}
            >
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PhotoGallery;
