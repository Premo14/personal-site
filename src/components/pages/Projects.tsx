// components/pages/projects.tsx
import {Text, SimpleGrid, Box, Flex} from "@chakra-ui/react";
import ProjectSmallCard from "../projects/ProjectSmallCard";
import { projects } from "../../data/projectsData";
import React from "react";

const Projects: React.FC = () => {
    return (
        <Box>
            <Flex justifyContent="center" textAlign="center">
                <Text m={4} fontSize="x-large" maxW="1000px" minW="700px">
                    Projects that can run in React are hosted on this site, but because
                    I have projects using many different languages, frameworks and
                    databases, I can only show so much here. Everything else will have
                    links to their repos and descriptions on each page. I want to
                    eventually make each project work directly on this site... but
                    that sounds like a lot of work, so we will :)
                </Text>
            </Flex>
                <Flex justifyContent="center" textAlign="center">
                <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10} mx={10}>
                    {projects.map((project) => (
                        <ProjectSmallCard key={project.id} project={project}/>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
};

export default Projects;
