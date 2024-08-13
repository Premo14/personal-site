import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Image, Text, Flex } from "@chakra-ui/react";
import { projects } from "../../data/projectsData";
import React from "react";

const ProjectLargeCard: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id || "", 10));

    if (!project) return <div>Project not found</div>;

    return (
        <Box p={6}>
            <Button mb={4} onClick={() => navigate("/projects")}>Back</Button>
            <Flex justify="center" mb={4}>
                <Image src={project.thumbnail} alt={project.title} h="100vh" w="100vw" maxH="800px" maxW="1200px"/>
            </Flex>
            <Text mt={4} fontSize="2xl" fontWeight="bold">
                {project.title}
            </Text>
            <Text mt={2}>{project.description}</Text>
            <Button mt={4} onClick={() => navigate(project.detailsUrl)}>
                View More Details
            </Button>
        </Box>
    );
};

export default ProjectLargeCard;
