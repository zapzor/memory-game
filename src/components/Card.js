import React from 'react';

export default function Card(props) {
  const { handleClick } = props;

  return (
    <div>
      <ul className='cards'>
        <div className='card' onClick={handleClick} name='one'>
          1
        </div>
        <li className='card' onClick={handleClick} name='two'>
          2
        </li>
        <li className='card' onClick={handleClick} name='three'>
          3
        </li>
        <li className='card' onClick={handleClick} name='four'>
          4
        </li>
        <li className='card' onClick={handleClick} name='five'>
          5
        </li>
        <li className='card' onClick={handleClick} name='six'>
          6
        </li>
        <li className='card' onClick={handleClick} name='seven'>
          7
        </li>
        <li className='card' onClick={handleClick} name='eight'>
          8
        </li>
        <li className='card' onClick={handleClick} name='nine'>
          9
        </li>
        <li className='card' onClick={handleClick} name='ten'>
          10
        </li>
        <li className='card' onClick={handleClick} name='eleven'>
          11
        </li>
        <li className='card' onClick={handleClick} name='twelve'>
          12
        </li>
      </ul>
    </div>
  );
}

// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
