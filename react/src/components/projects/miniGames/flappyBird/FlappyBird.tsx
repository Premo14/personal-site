import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const CONSTANT_FALL_VELOCITY = 3;  // Constant falling speed for the bird
const FLAP_STRENGTH = -4;  // How much the bird "flaps" up
const BIRD_SIZE = 20;
const PIPE_WIDTH = 60;
const PIPE_GAP = 150;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 400;
const FLAP_COOLDOWN = 150;  // Milliseconds of delay after flapping before falling

const FlappyBirdGame: React.FC = () => {
  const [birdPosition, setBirdPosition] = useState(GAME_HEIGHT / 2);  // Bird starts in the middle
  const [birdVelocity, setBirdVelocity] = useState(0);  // Velocity of the bird
  const [pipes, setPipes] = useState([{ x: GAME_WIDTH, y: Math.random() * (GAME_HEIGHT - PIPE_GAP) }]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);  // New state to track game start
  const [score, setScore] = useState(0);
  const [flapCooldown, setFlapCooldown] = useState(false);  // Track if bird is in flap cooldown
  const gameLoop = useRef<any>(null);

  // Bird flapping mechanism
  const handleFlap = () => {
    if (!isGameOver && !flapCooldown) {
      setBirdVelocity(FLAP_STRENGTH);  // Flap up when clicked
      setFlapCooldown(true);  // Start cooldown to prevent immediate falling

      // Remove cooldown after a short delay
      setTimeout(() => {
        setFlapCooldown(false);
      }, FLAP_COOLDOWN);
    }
  };

  // Main game loop using requestAnimationFrame
  useEffect(() => {
    if (!isGameStarted || isGameOver) return;  // Only start the loop if the game is started

    const startGameLoop = () => {
      gameLoop.current = requestAnimationFrame(gameLoopTick);
    };

    startGameLoop();  // Start the game loop

    return () => cancelAnimationFrame(gameLoop.current);  // Clean up on unmount
  }, [birdPosition, birdVelocity, pipes, isGameStarted]);

  const gameLoopTick = () => {
    if (isGameOver) return;

    // Update bird position based on velocity
    setBirdPosition(prev => Math.max(0, prev + birdVelocity));

    // Set constant downward velocity when the bird is not flapping and cooldown is over
    if (!flapCooldown) {
      if (birdVelocity < 0) {
        setBirdVelocity(prev => prev + 1);  // Gradually reduce upward velocity when flapping
      } else {
        setBirdVelocity(CONSTANT_FALL_VELOCITY);  // Constant downward velocity
      }
    }

    // Move pipes to the left and remove old pipes
    setPipes(prevPipes => {
      const newPipes = prevPipes.map(pipe => ({ ...pipe, x: pipe.x - 2 }));  // Move pipes left
      // Add a new pipe if the previous one is past the center
      if (newPipes[0].x + PIPE_WIDTH < 0) {
        newPipes.shift();  // Remove old pipe
        newPipes.push({ x: GAME_WIDTH, y: Math.random() * (GAME_HEIGHT - PIPE_GAP) });  // Add new pipe
        setScore(score + 1);  // Increment score when passing a pipe
      }
      return newPipes;
    });

    // Check for collisions
    checkCollisions();

    // Continue game loop
    gameLoop.current = requestAnimationFrame(gameLoopTick);
  };

  // Check if the bird collides with any pipes or the ground
  const checkCollisions = () => {
    // Check if the bird hits the ground or top
    if (birdPosition >= GAME_HEIGHT - BIRD_SIZE || birdPosition <= 0) {
      setIsGameOver(true);
      cancelAnimationFrame(gameLoop.current);
    }

    // Check for collisions with pipes
    pipes.forEach(pipe => {
      const birdLeft = 50;  // Bird's constant X position
      const birdRight = birdLeft + BIRD_SIZE;
      const birdTop = birdPosition;
      const birdBottom = birdPosition + BIRD_SIZE;

      const pipeLeft = pipe.x;
      const pipeRight = pipe.x + PIPE_WIDTH;
      const pipeTop = pipe.y;
      const pipeBottom = pipe.y + PIPE_GAP;

      // Check if the bird is within the horizontal range of the pipe
      if (birdRight > pipeLeft && birdLeft < pipeRight) {
        // Check if the bird is above or below the pipe gap (i.e., hits the pipe)
        if (birdTop < pipeTop || birdBottom > pipeBottom) {
          setIsGameOver(true);
          cancelAnimationFrame(gameLoop.current);
        }
      }
    });
  };

  // Reset the game
  const resetGame = () => {
    setBirdPosition(GAME_HEIGHT / 2);
    setBirdVelocity(0);
    setPipes([{ x: GAME_WIDTH, y: Math.random() * (GAME_HEIGHT - PIPE_GAP) }]);
    setIsGameOver(false);
    setIsGameStarted(false);  // Set game as not started
    setScore(0);
  };

  // Start the game
  const startGame = () => {
    setIsGameStarted(true);  // Set the game as started
  };

  // Render the game
  return (
    <Box textAlign="center" mt={4} position="relative" width={`${GAME_WIDTH}px`} height={`${GAME_HEIGHT}px`} bg="blue.200" overflow="hidden">
      <Text fontSize="xl" mb={4}>Flappy Bird Clone</Text>
      <Text>Score: {score}</Text>

      {/* Render the bird */}
      <Box
        position="absolute"
        left="50px"
        top={`${birdPosition}px`}
        width={`${BIRD_SIZE}px`}
        height={`${BIRD_SIZE}px`}
        bg="yellow"
        borderRadius="50%"
      />

      {/* Render the pipes */}
      {pipes.map((pipe, index) => (
        <Box key={index}>
          {/* Top pipe */}
          <Box
            position="absolute"
            left={`${pipe.x}px`}
            top="0"
            width={`${PIPE_WIDTH}px`}
            height={`${pipe.y}px`}
            bg="green"
          />
          {/* Bottom pipe */}
          <Box
            position="absolute"
            left={`${pipe.x}px`}
            top={`${pipe.y + PIPE_GAP}px`}
            width={`${PIPE_WIDTH}px`}
            height={`${GAME_HEIGHT - (pipe.y + PIPE_GAP)}px`}
            bg="green"
          />
        </Box>
      ))}

      {/* Render the game-over screen */}
      {isGameOver && (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="10">
          <Text color="red.500" fontSize="2xl" mb={4}>Game Over!</Text>
          <Button onClick={resetGame}>Restart</Button>
        </Box>
      )}

      {/* Render the play button at the start */}
      {!isGameStarted && !isGameOver && (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex="10">
          <Button onClick={startGame} colorScheme="teal" size="lg">Play</Button>
        </Box>
      )}

      {/* Capture bird flap clicks */}
      {!isGameOver && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          top="0"
          left="0"
          zIndex="1"  // Make sure this is behind the game-over message
          onClick={handleFlap}
        />
      )}
    </Box>
  );
};

export default FlappyBirdGame;