import React from 'react';

export default function Score(props) {
  const { score, bestScore } = props;

  return (
    <div>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}

// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
// Track the highest number the score has reached
