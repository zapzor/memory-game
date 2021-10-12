import React from 'react';

export default function Card(props) {
  const { handleClick } = props;

  return (
    <div>
      <ul className='cards'>
        <li className='card' onClick={handleClick}>
          1
        </li>
        <li className='card' onClick={handleClick}>
          2
        </li>
        <li className='card' onClick={handleClick}>
          3
        </li>
        <li className='card' onClick={handleClick}>
          4
        </li>
        <li className='card' onClick={handleClick}>
          5
        </li>
        <li className='card' onClick={handleClick}>
          6
        </li>
        <li className='card' onClick={handleClick}>
          7
        </li>
        <li className='card' onClick={handleClick}>
          8
        </li>
        <li onClick={handleClick}>9</li>
        <li className='card' onClick={handleClick}>
          10
        </li>
        <li className='card' onClick={handleClick}>
          11
        </li>
        <li className='card' onClick={handleClick}>
          12
        </li>
      </ul>
    </div>
  );
}

// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
