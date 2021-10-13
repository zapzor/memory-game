import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

export default function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState([]);
  const [gameBoard, setGameBoard] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  function shuffleArray(array) {
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    setGameBoard(shuffledArray);
  }

  function checkGameState(props) {
    if (gameState.includes(props)) {
      setScore(0);
      setGameState([]);
    } else {
      setScore(score + 1);
      setGameState((prevArr) => [...prevArr, props]);
    }
  }

  function handleClick(event) {
    const number = event.target.id;
    checkGameState(number);
  }

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <Card handleClick={handleClick} gameBoard={gameBoard} />
    </div>
  );
}
