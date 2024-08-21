import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Project } from "../../data/projectsData";
import React from "react";

interface ProjectSmallCardProps {
    project: Project;
}

const ProjectSmallCard: React.FC<ProjectSmallCardProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <Box
            borderWidth="1px"
            borderColor="gray.500" // Default border color
            borderRadius="lg"
            boxShadow="lg"
            cursor="pointer"
            onClick={() => navigate(`/project/${project.id}`)}
            p={4}
            maxW="300px" // Set max width to ensure proper wrapping
            minW="200px" // Set min width to ensure cards don’t shrink too much
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between" // Ensures spacing between elements
            overflow="hidden" // Prevents overflow of content
            transition="transform 0.2s, box-shadow 0.2s" // Smooth transition for scaling and shadow
            _hover={{
                transform: "scale(1.05)",
                zIndex: 10000, // Ensures the card is on top of other elements
                borderColor: "white" // Change border color on hover
            }}
        >
            <Image
                src={project.thumbnail}
                alt={project.title}
                boxSize="150px" // Fixed size for the image
                objectFit="cover" // Ensures the image covers the space without distortion
                mb={4} // Margin bottom to separate from title
            />
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                {project.title}
            </Text>
            <Text>{project.summary}</Text>
        </Box>
    );
};

export default ProjectSmallCard;
