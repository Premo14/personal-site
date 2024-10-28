import { Text, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import ProjectSmallCard from "../projects/ProjectSmallCard";
import { projects } from "../../frontendData/data.ts";
import React from "react";

const Projects: React.FC = () => {
    return (
        <Box mb={5}>
            <Flex justifyContent="center" textAlign="center" zIndex={1} mb={5}>
                <Text m={4} fontSize="x-large" maxW="1000px" minW="700px">
                    These projects are written in many different languages
                    and use various different tools. For that reason, not
                    all projects will run, for said projects, I will have
                    descriptions, photos, and a link to the GitHub repo of
                    each project. I intend on making each project work
                    on this site, but I will be converting them to use the
                    tools specific to this site. Dev Tools: Go, GORM, Gorilla
                    Mux, React, TypeScript, HTML, CSS, ChakraUI, TanStack,
                    and MariaDB
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
