import React from 'react';
import NumberGuessingGame from './numberGuessingGame/NumberGuessingGame.tsx';
import CardMatchingMemoryGame from './cardMatchingMemoryGame/CardMatchingMemoryGame.tsx';

const miniGameMappings: { [key: string]: React.ComponentType<any> } = {
  'number-guessing-game': NumberGuessingGame,
  'card-matching-memory-game': CardMatchingMemoryGame
}

export default miniGameMappings;