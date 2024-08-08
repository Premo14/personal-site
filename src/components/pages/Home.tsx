import React from 'react';
import {Box, Text} from "@chakra-ui/react";

const Home: React.FC = () => {
    return (
        <Box pt={20} display="flex" flexDirection="column" alignItems="center"
             textAlign="center" px={4}
        >
            <Text fontSize="xxx-large" pl="10px" pt="10px" as="b">
                Welcome to my personal website!
            </Text>
            <Text pl="10px">
                My name is Anthony Premo and this page was created to showcase
                my skills, projects, and experiences. You can navigate around
                the website by using the navigation bar at the top of the page.
            </Text>
        </Box>
    );
};

export default Home;
