import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Typography, Button, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

import BackgroundMusic from "./components/BackgroundMusic";
import PhotoGallery from "./components/PhotoGallery";
import LoveLetter from "./components/LoveLetter";
import MemoryTimeline from "./components/MemoryTimeline";
import LoveList from "./components/LoveList";
import LoveQuiz from "./components/LoveQuiz";
import FinalMessage from "./components/FinalMessage";
import VideoGallery from "./components/VideoGallery";

function App() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #fff0f3, #ffe4e1)",
        minHeight: "100vh",
        fontFamily: `'Cursive', 'Roboto', sans-serif`,
        color: "#5a1a01",
        overflowX: "hidden",
      }}
    >
      {/* ❤️ Romantic Sticky Header */}
      <Box
        component="header"
        sx={{
          width: "100%",
          backgroundColor: "#fce4ec",
          py: 2,
          px: { xs: 2, sm: 4 },
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: `'Pacifico', cursive`,
              color: "#c2185b",
              fontSize: { xs: "1.5rem", sm: "2rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Anjali ❤️ Saurabh
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              fontSize: "0.95rem",
              color: "#6a1b4d",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <ScrollLink to="gallery" smooth duration={600} offset={-80}>
              📸 Gallery
            </ScrollLink>
            <ScrollLink to="letter" smooth duration={600} offset={-80}>
              💌 Letter
            </ScrollLink>
            <ScrollLink to="timeline" smooth duration={600} offset={-80}>
              🗓️ Timeline
            </ScrollLink>
            <ScrollLink to="quiz" smooth duration={600} offset={-80}>
              🧠 Quiz
            </ScrollLink>
          </Box>
        </Box>
      </Box>

      <BackgroundMusic />

      {/* 🎉 Intro Section */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          py: { xs: 6, sm: 10, md: 12 },
          px: { xs: 2, sm: 4 },
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "24px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          mt: { xs: 4, sm: 6 },
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
            color: "#d32f2f",
            fontWeight: "bold",
            mb: 3,
            fontFamily: `'Pacifico', cursive`,
          }}
        >
          🎉 Happy Birthday Prof. Saurabh Shukla 🎂
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.2rem" },
            lineHeight: 1.8,
            color: "#6d1b1b",
          }}
        >
          On this special day, I want to remind you how precious you are to me.
          May your day be filled with smiles, love, and unforgettable moments.
          💖
        </Typography>

        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{
            borderRadius: "30px",
            px: { xs: 4, sm: 5 },
            py: { xs: 1, sm: 1.5 },
            fontWeight: "bold",
            fontSize: { xs: "0.95rem", sm: "1rem" },
            boxShadow: "0 5px 15px rgba(211, 47, 47, 0.4)",
            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Start Memory Journey ❤️
        </Button>
      </Container>

      {/* 💖 Memory Sections */}
      <Box sx={{ mt: { xs: 6, sm: 10 } }}>
        <Box id="gallery">
          <PhotoGallery />
        </Box>
        <VideoGallery />
        <Box id="letter">
          <LoveLetter />
        </Box>
        <Box id="timeline">
          <MemoryTimeline />
        </Box>
        <LoveList />
        <Box id="quiz">
          <LoveQuiz />
        </Box>
        <FinalMessage />
      </Box>
    </Box>
  );
}

export default App;
