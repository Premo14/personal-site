import { useState } from "react";
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleGuess = () => {
    if (guess === null) {
      setFeedback("Please enter a number.");
      return;
    }

    if (guess === targetNumber) {
      setFeedback("Congratulations! You guessed the number.");
      setIsGameOver(true);
    } else if (guess > targetNumber) {
      setFeedback("Too high. Try again.");
    } else {
      setFeedback("Too low. Try again.");
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess(null);
    setFeedback("");
    setIsGameOver(false);
  };

  return (
    <Box textAlign="center" p={4}>
      <Text fontSize="2xl" mb={4}>Guess the Number</Text>
      <Text mb={2}>I'm thinking of a number between 1 and 100. Can you guess it?</Text>

      <VStack spacing={0}>
        <Text>Enter your guess:</Text>
        <Input w={75}
               borderColor="white"
               backgroundColor="#333333"
          type="number"
          value={guess !== null ? guess : ""}
          onChange={(e) => setGuess(parseInt(e.target.value))}
          mt={4}
          isDisabled={isGameOver}
        />
        <Button onClick={handleGuess} mt={4} isDisabled={isGameOver}>Submit Guess</Button>
      </VStack>
      {feedback && <Text mt={4}>{feedback}</Text>}

      {isGameOver && (
        <Button onClick={resetGame} mt={4} colorScheme="teal">Play Again</Button>
      )}
    </Box>
  );
};

export default NumberGuessingGame;
