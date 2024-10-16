import { useParams, useNavigate } from 'react-router-dom';
import { miniGames } from '../../../frontendData/data.ts';
import miniGameMappings from './miniGameMappings.ts';
import { Box, Text, Link, Button } from '@chakra-ui/react';

const MiniGameDetails = () => {
  const navigate = useNavigate();
  const { detailsUrl } = useParams<{ detailsUrl: string }>();

  const miniGame = detailsUrl ? miniGames.find(m => m.detailsUrl === detailsUrl) : undefined;

  if (!miniGame) return <div>Mini Game not found</div>;

  const ProjectComponent = miniGame.componentKey ? miniGameMappings[miniGame.componentKey] : null;

  return (
    <Box
      p={4}
      width="100vw"
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      overflowY="auto"
      backgroundColor="black"
    >
      <Button m={4} w={200} onClick={() => navigate("/projects/mini-games")}>Back to Arcade</Button>
      <Text fontSize="2xl" fontWeight="bold" maxW="800px">{miniGame.title}</Text>
      <Text mb={2} maxW="800px">{miniGame.description}</Text>
      <Link href={miniGame.githubUrl} isExternal mt={4} maxW="800px">
        View on GitHub
      </Link>

      {/* Render the mini-game component */}
      {ProjectComponent && (
        <Box
          flex="1"
          mt={4}
          overflowY="auto"
        >
          <ProjectComponent />
        </Box>
      )}
    </Box>
  );
};

export default MiniGameDetails;
