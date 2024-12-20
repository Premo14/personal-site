import { useNavigate } from "react-router-dom";
import { Text, Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { miniGames } from '../../../frontendData/data.ts';
import React from 'react';
import MiniGameSmallCard from './MiniGameSmallCard.tsx';

const MiniGames: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      minHeight="100vh"
      width="100%"
      overflow="visible"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <source src="/miniGames/arcade_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box zIndex={10} overflowY="scroll">
        {/* Content Overlay */}
        <Button m={4} onClick={() => navigate("/projects")} zIndex={1} background="black">
          Back to Projects
        </Button>
        <Flex justifyContent="center" textAlign="center" zIndex={1} mb={5}>
          <Text m={4} fontSize="x-large" maxW="1000px">
            Welcome to the arcade! Cheaters will be dealt with accordingly.
          </Text>
        </Flex>
        <Flex justifyContent="center" textAlign="center" zIndex={1}>
          <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10} mx={10} overflow="hidden">
            {miniGames.map((miniGame) => (
              <MiniGameSmallCard key={miniGame.detailsUrl} miniGame={miniGame} />
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default MiniGames;
