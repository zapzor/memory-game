import React from 'react';

export default function Card(props) {
  const { handleClick, gameBoard } = props;
  const bar = gameBoard.map(() => {
    const test = Math.round(Math.random() * 99);
    return (
      <li id={test} className='card' onClick={handleClick}>
        {test}
      </li>
    );
  });

  return (
    <div>
      <br />
      <div>
        Gain points by clicking on a number, but don't click on any more than
        once!
      </div>
      <ul className='cards'>{bar}</ul>
    </div>
  );
}
