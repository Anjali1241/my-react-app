import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // 👈 only pagination
import 'swiper/css';
import 'swiper/css/pagination';

import video1 from '../assets/Video1.mp4';
import video2 from '../assets/Video2.mp4';
import video3 from '../assets/Video3.mp4';
import video4 from '../assets/Video4.mp4';

const videos = [
  { src: video1, caption: 'Our Beautiful Evening with Shivji’s Savaari 💖' },
  { src: video2, caption: 'A Peaceful Stroll at Alembic City 🌇' },
  { src: video3, caption: 'That Sweet and Fun Train Journey Together 🚆💘' },
  { src: video4, caption: 'Rainy Moments at Anand — Unforgettable 🌧️💌' },
];

function VideoGallery() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        background: 'linear-gradient(to bottom, #ffe4ec, #fff0f5)',
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
        }}
      >
        Special Videos for You 🎥💖
      </Typography>

      <Swiper
        modules={[Pagination]} // ✅ removed Navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        style={{ paddingBottom: '30px' }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                mx: 'auto',
                maxWidth: 600,
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                backgroundColor: '#fff',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                }}
              >
                <video
                  src={video.src}
                  controls
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  p: 1,
                  textAlign: 'center',
                  backgroundColor: '#fce4ec',
                  color: '#880e4f',
                  fontWeight: 500,
                }}
              >
                {video.caption}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default VideoGallery;
