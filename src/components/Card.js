import React from 'react';

export default function Card(props) {
  const { handleClick, gameBoard } = props;
  const bar = gameBoard.map((number) => {
    return (
      <li id={number} key={number} className='card' onClick={handleClick}>
        {number}
      </li>
    );
  });

  return (
    <div>
      <ul className='cards'>{bar}</ul>
    </div>
  );
}
