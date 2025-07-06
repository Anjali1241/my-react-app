import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
} from "@mui/material";

const questions = [
  {
    question: "What's Anjali’s favorite food?",
    options: ["South Indian", "Momos", "Pizza"],
    answer: "South Indian",
  },
  {
    question: "What color looks best on you (her opinion)?",
    options: ["Blue", "Black", "White"],
    answer: "Blue",
  },
  {
    question: "What makes Anjali smile the most?",
    options: ["Your jokes", "Your hugs", "Your voice"],
    answer: "Your voice",
  },
  {
    question: "What does Anjali always say?",
    options: ["Hoshiyarii", "Londiyabaz", "Saurabh Shukla"],
    answer: "Hoshiyarii",
  },
  {
    question: "What is her love language?",
    options: ["Words", "Actions", "Time"],
    answer: "Time",
  },
];

function LoveQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selected === questions[index].answer) setScore(score + 1);
    setIndex(index + 1);
    setSelected("");
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        backgroundColor: "#fff0f5",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: `'Pacifico', cursive`,
          color: "#d81b60",
          mb: 4,
        }}
      >
        Quick Quiz For You 🧠💖
      </Typography>

      <Paper
        elevation={4}
        sx={{
          maxWidth: "600px",
          mx: "auto",
          p: { xs: 3, sm: 4 },
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        {index < questions.length ? (
          <>
            <Typography
              variant="h6"
              sx={{ color: "#4e1c2b", mb: 2, fontWeight: 500 }}
            >
              {questions[index].question}
            </Typography>

            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{ alignItems: "start", gap: 1 }}
            >
              {questions[index].options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={opt}
                  control={<Radio color="secondary" />}
                  label={opt}
                  sx={{
                    textAlign: "left",
                    color: "#6a1b4d",
                    fontSize: "1rem",
                  }}
                />
              ))}
            </RadioGroup>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleNext}
              sx={{
                mt: 3,
                px: 5,
                py: 1,
                borderRadius: "30px",
                fontWeight: "bold",
              }}
              disabled={!selected}
            >
              {index === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#4e1c2b",
              fontWeight: "bold",
              fontSize: "1.2rem",
              mt: 2,
            }}
          >
            You scored {score} out of {questions.length}! 🎉
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default LoveQuiz;
