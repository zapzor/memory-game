import React from 'react';

export default function Score(props) {
  const { score, bestScore } = props;

  return (
    <div>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
}
