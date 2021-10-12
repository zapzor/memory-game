import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

export default function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  function handleClick() {
    setScore(score + 1);
  }

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <Card handleClick={handleClick} />
    </div>
  );
}

// Jumble grid randomly on clicking image
// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
// Track the highest number the score has reached
