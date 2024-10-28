// Courses.tsx
import React, { useState } from 'react';
import {
  Box,
  VStack,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { Course, courses } from '../../../frontendData/data.ts';

const Courses: React.FC = () => {
  const {
    isOpen: isMainModalOpen,
    onOpen: onMainModalOpen,
    onClose: onMainModalClose,
  } = useDisclosure();

  const {
    isOpen: isDescriptionModalOpen,
    onOpen: onDescriptionModalOpen,
    onClose: onDescriptionModalClose,
  } = useDisclosure();

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    onDescriptionModalOpen();
  };

  // Responsive modal sizes
  const modalSize = useBreakpointValue({ base: "xs", md: "lg" });

  return (
    <Box>
      <Text>
        <Link onClick={onMainModalOpen} fontWeight="bold" color="teal.500">
          Course List
        </Link>
      </Text>

      {/* Main Modal Popup for Course List */}
      <Modal isOpen={isMainModalOpen} onClose={onMainModalClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="auto">
          <ModalHeader fontSize={["lg", "xl"]}>Relevant Coursework</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={3}>
              {courses.map((course) => (
                <Link
                  key={course.id}
                  fontWeight="bold"
                  color="teal.500"
                  onClick={() => handleCourseClick(course)}
                  fontSize={["sm", "md"]}
                >
                  {course.title}
                </Link>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onMainModalClose} size="sm">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Description Modal Popup for Selected Course */}
      <Modal isOpen={isDescriptionModalOpen} onClose={onDescriptionModalClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="auto">
          <ModalHeader fontSize={["lg", "xl"]}>{selectedCourse?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontSize={["sm", "md"]}
              dangerouslySetInnerHTML={{ __html: selectedCourse?.description || 'No description available.' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onDescriptionModalClose} size="sm">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Courses;
