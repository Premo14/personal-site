import React from 'react';
import {Stack, Text, Box} from "@chakra-ui/react";

const Home: React.FC = () => {
    return (
        <Stack pt={20} display="flex" flexDirection="column" alignItems="center"
               textAlign="center" w="100vw" spacing={4}
        >
            <Box maxW="900px" w="100%" px={4}>
                <Text fontSize="xxx-large" as="b">
                    Welcome to my personal website!
                </Text>
            </Box>
            <Box maxW="800px" w="100%" px={4}>
                <Text>
                    My name is Anthony Premo and this site was created to showcase
                    my skills, projects, and experiences. You can navigate around
                    the website by using the navigation bar at the top of the page.
                    Not really sure what else to put here so for now here is a meme
                    I found on the internet.
                </Text>
            </Box>
            <img src="/public/meme.jpg" alt="meme" />
        </Stack>
    );
};

export default Home;
