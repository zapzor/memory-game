import React, { useState, useEffect } from 'react';
import Score from './score';
import CardGrid from './game-grid';

export default function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState([]);
  const [gameBoard, setGameBoard] = useState([...Array(12).keys()]);

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  function shuffleArray(array) {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    setGameBoard(shuffledArray);
  }

  function restartGame() {
    setScore(0);
    setGameState([]);
  }

  function continueGame(number) {
    setScore((prevScore) => prevScore + 1);
    setGameState((prevArr) => [...prevArr, number]);
  }

  function checkGameState(number) {
    if (gameState.includes(number)) {
      restartGame();
    } else {
      continueGame();
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
      <CardGrid handleClick={handleClick} gameBoard={gameBoard} />
    </div>
  );
}
