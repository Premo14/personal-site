import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Project } from "../../frontendData/data.ts";
import React from "react";

interface ProjectSmallCardProps {
    project: Project;
}

const ProjectSmallCard: React.FC<ProjectSmallCardProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <Box
            borderWidth="1px"
            borderColor="gray.500"
            borderRadius="lg"
            boxShadow="lg"
            cursor="pointer"
            onClick={() => navigate(`/projects/${project.detailsUrl}`)}
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
                src={project.thumbnail}
                alt={project.title}
                boxSize="150px"
                objectFit="cover"
                mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                {project.title}
            </Text>
            <Text>{project.summary}</Text>
        </Box>
    );
};

export default ProjectSmallCard;
