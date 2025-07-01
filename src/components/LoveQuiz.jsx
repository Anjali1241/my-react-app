import React, { useState } from 'react';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const questions = [
  {
    question: "What's Anjali’s favorite food?",
    options: ['Pasta', 'Paneer', 'Ice Cream'],
    answer: 'Paneer'
  },
  {
    question: "What color looks best on you (her opinion)?",
    options: ['Blue', 'Black', 'Red'],
    answer: 'Blue'
  }
];

function LoveQuiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selected === questions[index].answer) setScore(score + 1);
    setIndex(index + 1);
    setSelected('');
  };

  return (
    <Box sx={{ p: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Quick Quiz For You 🧠
      </Typography>
      {index < questions.length ? (
        <Box>
          <Typography variant="h6" gutterBottom>
            {questions[index].question}
          </Typography>
          <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
            {questions[index].options.map((opt, idx) => (
              <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} />
            ))}
          </RadioGroup>
          <Button variant="contained" onClick={handleNext} sx={{ mt: 2 }} disabled={!selected}>
            Next
          </Button>
        </Box>
      ) : (
        <Typography variant="h6">
          You scored {score} out of {questions.length}! 🎉
        </Typography>
      )}
    </Box>
  );
}

export default LoveQuiz;