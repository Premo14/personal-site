import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { MiniGame } from '../../../data/data.ts';

interface MiniGameSmallCardProps {
  miniGame: MiniGame;
}

const MiniGameSmallCard: React.FC<MiniGameSmallCardProps> = ({ miniGame }) => {
  const navigate = useNavigate();

  return (
    <Box
      borderWidth="3px"
      borderColor="gray.500"
      borderRadius="lg"
      boxShadow="lg"
      cursor="pointer"
      onClick={() => navigate(`/projects/mini-games/${miniGame.detailsUrl}`)}
      p={4}
      maxW="300px"
      minW="200px"
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      overflow="visible"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.05)",
        zIndex: 10000,
        borderColor: "white"
      }}
    >
      <Image
        src={miniGame.thumbnail}
        alt={miniGame.title}
        boxSize="150px"
        objectFit="cover"
        mb={4}
      />
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {miniGame.title}
      </Text>
      <Text>{miniGame.summary}</Text>
    </Box>
  );
};

export default MiniGameSmallCard;
