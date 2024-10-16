import React from 'react';
import NumberGuessingGame from './numberGuessingGame/NumberGuessingGame.tsx';
import CardMatchingMemoryGame from './cardMatchingMemoryGame/CardMatchingMemoryGame.tsx';
import SnakeGame from './snakeGame/SnakeGame.tsx';

const miniGameMappings: { [key: string]: React.ComponentType<any> } = {
  'number-guessing-game': NumberGuessingGame,
  'card-matching-memory-game': CardMatchingMemoryGame,
  'snake-game': SnakeGame,
}

export default miniGameMappings;