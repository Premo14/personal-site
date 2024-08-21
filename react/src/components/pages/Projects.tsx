import { Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import ProjectSmallCard from "../projects/ProjectSmallCard";
import { projects } from "../../data/projectsData";
import React from "react";

const Projects: React.FC = () => {
    return (
        <Box mb={5}>
            <Flex justifyContent="center" textAlign="center" zIndex={1} mb={5}>
                <Text m={4} fontSize="x-large" maxW="1000px" minW="700px">
                    I want to eventually make each project work directly
                    on this site, as well as add more... but that sounds
                    like a lot of work, so we will see :)
                </Text>
            </Flex>
            <Flex justifyContent="center" textAlign="center">
                <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10} mx={10} overflow="hidden">
                    {projects.map((project) => (
                        <ProjectSmallCard key={project.id} project={project}/>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default Projects;
