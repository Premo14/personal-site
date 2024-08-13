// components/pages/ProjectDetails.tsx
import { Box, Text, Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { projects } from "../../data/projectsData";
import React from "react";

const ProjectDetails: React.FC = () => {
    const { detailsUrl } = useParams<{ detailsUrl: string }>();

    // Find the project by detailsUrl
    const project = detailsUrl ? projects.find(p => p.detailsUrl === detailsUrl) : undefined;

    if (!project) return <div>Project not found</div>

    return (
        <Box p={4} maxW="800px" mx="auto">
            <Text fontSize="2xl" fontWeight="bold">{project.title}</Text>
            <Text mt={4}>{project.description}</Text>
            <Link href={project.githubUrl} isExternal mt={4} >
                View on GitHub
            </Link>
            {/*{project.images.length > 0 && (*/}
            {/*    <Flex wrap="wrap" mt={4} gap={4}>*/}
            {/*        {project.images.map((img, index) => (*/}
            {/*            <Image*/}
            {/*                key={index}*/}
            {/*                src={img}*/}
            {/*                alt={`${project.title} image ${index}`}*/}
            {/*                boxSize="150px"*/}
            {/*                objectFit="cover"*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </Flex>*/}
            {/*)}*/}
        </Box>
    );
};

export default ProjectDetails;
