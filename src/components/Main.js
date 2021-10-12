import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

export default function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  function checkNumber(props) {
    if (gameState.includes(props)) {
      setScore(0);
      setGameState([]);
    } else {
      setScore(score + 1);
    }
  }

  function handleClick(event) {
    const name = event.target.getAttribute('name');
    setGameState((prevArr) => [...prevArr, name]);

    checkNumber(name);
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
