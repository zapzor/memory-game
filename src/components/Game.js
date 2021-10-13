import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState([]);
  const [gameBoard, setGameBoard] = useState([...Array(12).keys()]);

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
    shuffleArray(gameBoard);
  }

  return (
    <div>
      <Score score={score} bestScore={bestScore} />
      <Card handleClick={handleClick} gameBoard={gameBoard} />
    </div>
  );
}
