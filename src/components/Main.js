import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

export default function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [arr, setArr] = useState([]);
  // const [wasClicked, setWasClicked] = useState({
  //   one: true,
  //   two: true,
  //   three: true,
  //   four: true,
  //   five: true,
  //   six: true,
  //   seven: true,
  //   eight: true,
  //   nine: true,
  //   ten: true,
  //   eleven: true,
  //   twelve: true,
  // });

  // const [arr, setArr] = useState([]);

  useEffect(() => {
    setBestScore(score > bestScore ? score : bestScore);
  }, [score, bestScore]);

  // function checkNumber(event) {
  //   return wasClicked ? setScore(0) : score;
  // }

  function checkNumber(props) {
    console.log(arr.includes(props));
    if (arr.includes(props)) {
      setScore(0);
      setArr([]);
    } else {
      setScore(score + 1);
    }
  }

  // function checkArr(props) {
  //   arr.includes(props.target.value ? setScore(0) : score);
  // }

  function handleClick(event) {
    const name = event.target.getAttribute('name');
    setArr((prevArr) => [...prevArr, name]);

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
