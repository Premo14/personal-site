import React from 'react';
import NumberGuessingGame from './numberGuessingGame/NumberGuessingGame.tsx';
import CardMatchingMemoryGame from './cardMatchingMemoryGame/CardMatchingMemoryGame.tsx';
import SnakeGame from './snakeGame/SnakeGame.tsx';
import FlappyBird from './flappyBird/FlappyBird.tsx';

const miniGameMappings: { [key: string]: React.ComponentType<any> } = {
  'number-guessing-game': NumberGuessingGame,
  'card-matching-memory-game': CardMatchingMemoryGame,
  'snake-game': SnakeGame,
  'flappy-bird': FlappyBird,
}

export default miniGameMappings;