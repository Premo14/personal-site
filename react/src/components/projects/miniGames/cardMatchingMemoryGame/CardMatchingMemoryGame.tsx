import { useState } from 'react';
import { Box, Button, SimpleGrid, Text, Select, Flex } from '@chakra-ui/react';

const cardData = [
  "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥥", "🍑", "🍆", "🥑", "🌽",
  "🥕", "🍋", "🥭", "🍑", "🍐", "🍒", "🍏", "🍉", "🍊", "🍈", "🍇", "🥥",
];

// Shuffle cards
const shuffleArray = (array: string[]) => {
  return array.sort(() => 0.5 - Math.random());
};

// Memory Card Game component
const MemoryCardGame: React.FC = () => {
  const [difficulty, setDifficulty] = useState<number>(4);
  const [cards, setCards] = useState<string[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [firstCardIndex, setFirstCardIndex] = useState<number | null>(null);
  const [secondCardIndex, setSecondCardIndex] = useState<number | null>(null);

  // Handle difficulty selection (dropdown)
  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setDifficulty(value);
  };

  // Start the game and ensure the correct grid is used based on the current dropdown value
  const startGame = () => {
    const currentDifficulty = difficulty; // Ensure we use the latest selected difficulty
    const numPairs = currentDifficulty / 2;
    const selectedCards = shuffleArray(cardData.slice(0, numPairs));
    const allCards = shuffleArray([...selectedCards, ...selectedCards]);

    setCards(allCards); // Set cards based on the selected difficulty
    resetState(); // Reset game state before starting a new game
    setGameStarted(true); // Indicate the game has started
  };

  // Reset the game state
  const resetState = () => {
    setFlippedIndices([]);
    setMatchedCards([]);
    setFirstCardIndex(null);
    setSecondCardIndex(null);
  };

  // Reset the game and stop it
  const resetGame = () => {
    setCards([]); // Clear the current cards
    resetState(); // Reset game state
    setGameStarted(false); // Mark the game as not started
  };

  // Handle card click (for flipping)
  const handleCardClick = (index: number) => {
    if (flippedIndices.includes(index) || matchedCards.includes(index)) {
      return; // Prevent flipping already matched/flipped cards
    }

    setFlippedIndices([...flippedIndices, index]);

    if (firstCardIndex === null) {
      setFirstCardIndex(index); // First card flipped
    } else if (secondCardIndex === null) {
      setSecondCardIndex(index); // Second card flipped

      if (cards[firstCardIndex!] === cards[index]) {
        // Cards match
        setMatchedCards([...matchedCards, firstCardIndex!, index]);
        setFirstCardIndex(null);
        setSecondCardIndex(null);
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          setFlippedIndices(flippedIndices.filter(i => i !== firstCardIndex && i !== index));
          setFirstCardIndex(null);
          setSecondCardIndex(null);
        }, 1000);
      }
    }
  };

  return (
    <Box textAlign="center" p={4} display="flex" flexDirection="column" minHeight="100vh">
      <Text fontSize="2xl" mb={4}>Memory Card Matching Game</Text>

      {!gameStarted && (
        <Box>
          <Flex direction="column" justifyContent="center" alignItems="center" mt={8}>
            <Text mb={2}>Select Difficulty:</Text>
            <Select mb={4} w={200} onChange={handleDifficultyChange} value={difficulty}>
              <option value="4">Easy (2x2)</option>
              <option value="16">Medium (4x4)</option>
              <option value="36">Hard (6x6)</option>
            </Select>

            <Button colorScheme="teal" onClick={startGame}>
              Start Game
            </Button>
          </Flex>
        </Box>
      )}

      {gameStarted && (
        <Box
          height="calc(100vh - 160px)"
          overflowY="auto"
          paddingBottom="20px"
        >
          <SimpleGrid columns={Math.sqrt(difficulty)} spacing={4}>
            {cards.map((card, index) => (
              <Card
                key={index}
                index={index}
                card={card}
                flipped={flippedIndices.includes(index) || matchedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </SimpleGrid>
          <Button mt={4} onClick={resetGame}>Reset Game</Button>
        </Box>
      )}
    </Box>
  );
};

// Card component
interface CardProps {
  card: string;
  index: number;
  flipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, flipped, onClick }) => {
  return (
    <Box
      as="button"
      onClick={onClick}
      height="100px"
      width="100px"
      bg={flipped ? "white" : "gray.400"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="2xl"
      borderRadius="8px"
      boxShadow="md"
    >
      {flipped ? card : ""}
    </Box>
  );
};

export default MemoryCardGame;
