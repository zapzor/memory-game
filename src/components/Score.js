import React, { useState, useEffect } from 'react';

export default function Score() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function scoreIncrement() {
    setBestScore(score > bestScore ? score : bestScore);
  }

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  return (
    <div>
      <button onClick={() => setScore(score + 1)}>helloguys</button>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}

// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
// Track the highest number the score has reached
