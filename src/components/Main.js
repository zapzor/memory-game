import React from 'react';
import Card from './Card';
import Score from './Score';

export default function Main() {
  return (
    <div>
      <Score />
      <Card />
    </div>
  );
}

// Jumble grid randomly on clicking image
// Increment score on clicking image that hasn't already been clicked
// Reset score on clicking image that has already been clicked
// Track the highest number the score has reached
