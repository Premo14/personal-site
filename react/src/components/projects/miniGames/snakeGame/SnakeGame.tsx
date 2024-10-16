import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

// Constants
const BOARD_SIZE = 20;  // 20x20 grid
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };

// Utility function to generate random food position
const generateFoodPosition = () => {
  return {
    x: Math.floor(Math.random() * BOARD_SIZE),
    y: Math.floor(Math.random() * BOARD_SIZE),
  };
};

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFoodPosition());
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const gameInterval = useRef<any>(null);

  // Handle movement input
  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 's':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'a':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'd':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  // Initialize key event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  // Move the snake at regular intervals
  useEffect(() => {
    if (isGameOver) return;  // Stop the game if it's over

    gameInterval.current = setInterval(() => {
      moveSnake();
    }, 100);  // Speed of the snake (200ms interval)

    return () => clearInterval(gameInterval.current);
  }, [snake, direction]);

  // Move the snake
  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    head.x += direction.x;
    head.y += direction.y;

    // Check for collision with walls
    if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
      setIsGameOver(true);
      clearInterval(gameInterval.current);
      return;
    }

    // Check for collision with itself
    if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setIsGameOver(true);
      clearInterval(gameInterval.current);
      return;
    }

    newSnake.unshift(head);  // Add new head position
    if (head.x === food.x && head.y === food.y) {
      // Snake eats food
      setScore(score + 1);
      setFood(generateFoodPosition());
    } else {
      newSnake.pop();  // Remove tail unless eating food
    }

    setSnake(newSnake);
  };

  // Reset the game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFoodPosition());
    setIsGameOver(false);
    setScore(0);
  };

  // Render the game board
  const renderBoard = () => {
    const grid = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const isSnakeSegment = snake.some(segment => segment.x === col && segment.y === row);
        const isFood = food.x === col && food.y === row;

        grid.push(
          <Box
            key={`${row}-${col}`}
            w="20px"
            h="20px"
            bg={isSnakeSegment ? "green" : isFood ? "red" : "gray.200"}
            border="1px solid black"
          />
        );
      }
    }
    return grid;
  };

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="2xl" mb={4}>Classic Snake Game</Text>
      <Text mb={2}>Score: {score}</Text>
      <Box display="grid" gridTemplateColumns={`repeat(${BOARD_SIZE}, 20px)`} justifyContent="center">
        {renderBoard()}
      </Box>
      {isGameOver && (
        <Text color="red.500" fontSize="xl" mt={4}>Game Over!</Text>
      )}
      <Button mt={4} colorScheme="teal" onClick={resetGame}>
        {isGameOver ? 'Restart Game' : 'Reset Game'}
      </Button>
    </Box>
  );
};

export default SnakeGame;
