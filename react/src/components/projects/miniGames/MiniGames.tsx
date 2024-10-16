import { useNavigate } from "react-router-dom";
import { Text, Box, Flex, SimpleGrid, Button } from '@chakra-ui/react';
import { miniGames } from '../../../data/data.ts';
import React from 'react';
import MiniGameSmallCard from './MiniGameSmallCard.tsx';

const MiniGames: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      height="100vh"
      width="100vw"
      overflow="hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
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

      <Box zIndex={10}>
        {/* Content Overlay */}
        <Button m={4} onClick={() => navigate("/projects")} zIndex={1} background="black">
          Back to Projects
        </Button>
        <Flex justifyContent="center" textAlign="center" zIndex={1} mb={5}>
          <Text m={4} fontSize="x-large" maxW="1000px" minW="700px">
            Welcome to the arcade! Cheaters will be dealt with accordingly.
          </Text>
        </Flex>
        <Flex justifyContent="center" textAlign="center" zIndex={1}>
          <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10} mx={10} overflow="hidden">
            {miniGames.map((miniGame) => (
              <MiniGameSmallCard key={miniGame.detailsUrl} miniGame={miniGame}/>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
}

export default MiniGames;
