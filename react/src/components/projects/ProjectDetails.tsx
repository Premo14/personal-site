import {
  Box,
  Text,
  Link,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from "../../data/data.ts";
import React, { useState } from "react";
import projectMappings from "./projectMappings.ts";

const ProjectDetails: React.FC = () => {
    const { detailsUrl } = useParams<{ detailsUrl: string }>();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const navigate = useNavigate();

    const project = detailsUrl ? projects.find(p => p.detailsUrl === detailsUrl) : undefined;

    if (!project) return <div>Project not found</div>

    // Get the component based on the componentKey
    const ProjectComponent = project.componentKey ? projectMappings[project.componentKey] : null;

    return (
        <Box p={4} width="100vw" overflowX="hidden">
          <Button mb={2} onClick={() => navigate("/projects")} zIndex={1} background="black">
            Back to Projects
          </Button>
            <Text fontSize="2xl" fontWeight="bold" maxW="800px">{project.title}</Text>
            <Text my={2} maxW="800px">Tools Used: {project.tools}</Text>
            <Text mb={2} maxW="800px">{project.description}</Text>
            <Link href={project.githubUrl} isExternal mt={4} maxW="800px">
                View on GitHub
            </Link>
            {ProjectComponent && <ProjectComponent/>}
            {project.images.length > 0 && (
                <Flex wrap="wrap" mt={4} gap={4} overflow="hidden">
                    {project.images.map((img, index) => (
                        <Box
                            key={index}
                            position="relative"
                            width="300px"
                            height="100px"
                            pb="1"
                            overflow="clip"
                            borderRadius="md"
                        >
                            <Image
                                src={img}
                                alt={`${project.title} image ${index}`}
                                transition="transform 0.2s, box-shadow 0.2s"
                                cursor="pointer"
                                onClick={() => {
                                    setSelectedImage(img);
                                    onOpen();
                                }}
                                _hover={{
                                    transform: "scale(1.05)",
                                    zIndex: 10000,
                                }}
                            />
                        </Box>
                    ))}
                </Flex>
            )}
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent w="90vw">
                    <ModalCloseButton />
                    <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                objectFit="contain"
                                maxW="90vw"
                                maxH="90vh"
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProjectDetails;
