import React from 'react';
import './card-grid.css';
import './card.css';

export default function Card(props) {
  const { handleClick, gameBoard } = props;

  //Maps numbers array to list
  const mappedBoard = gameBoard.map(() => {
    const number = Math.round(Math.random() * 99);

    return (
      <li id={number} className='card' onClick={handleClick}>
        {number}
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
      <ul className='cards'>{mappedBoard}</ul>
    </div>
  );
}
