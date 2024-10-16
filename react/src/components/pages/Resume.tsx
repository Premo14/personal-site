import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Divider,
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
    Button
} from "@chakra-ui/react";

const Resume: React.FC = () => {
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

    const [selectedCourse, setSelectedCourse] = useState<{ title: string, description: string }>({ title: '', description: '' });

    const courses: { [course: string]: string } = {
        'Full Stack Development I & II': 'Full Stack Development I:<br/>Students will design and develop a full stack application through the utilization of programming language frameworks. In creating a full stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. This course is the first course in a two-course sequence.<br/><br/>Full Stack Development II:<br/>In this course, students will develop a full stack application that runs in the cloud. Through the application of cloud-based development principles and best practices, students will take their software stack from Full Stack Development I and utilize frameworks to build the cloud architecture upon which the software stack application will run. In addition, students will also demonstrate their career-readiness by articulating highly technical content to various audiences and in various formats. This course is the second course in a two-course sequence.',
        'Software Reverse Engineering': 'Students will learn the basics of reverse engineering specific to software systems. Learn how reverse engineering is used to recreate missing documentation to support legacy software code. Examine how reverse engineering is used to make new software products, enhance the functionality and efficiency of software components, and recreate the code for applications. Apply fundamental reverse engineering technologies and practices for maintainability and security-related use cases.',
        'Secure Coding': 'Students will focus on common security vulnerabilities that are found in software. Students will learn techniques and strategies to develop robust and secure code, leveraging secure programming principles. Students will gain authentic experience identifying security vulnerabilities and writing secure code to mitigate risks to software and frontendData.',
        'Emerging Sys Arch & Tech': 'Students will explore emerging systems, architectures and technologies. Students will be provided with an in-depth evaluation of emerging system architecture focusing on performance and the software/hardware interface. Emphasis is on analyzing fundamental issues in architecture design and the impact on application performance to enable better understanding of the concepts. Students will learn to evaluate software architectures, both established and emerging, and gain experience in determining when to implement architectures and technologies to fulfill business needs.',
        'Mobile Arch & Programming': 'Students will apply mobile development principles and best practices to develop mobile applications using user-centered design principles and industry standards. Upon completion of a fully-functional mobile application, students will conduct security, product assuredness, and compatibility checks before launching the application.',
        'DSA: Analysis and Design': 'This course covers commonly used abstract frontendData structures such as lists, stacks, queues, trees and graphs. The implementation and time-space analysis of these frontendData structures is discussed in the context of recursion, sorting and searching algorithms.',
        'Client/Server Development': 'Students will learn how to apply database systems concepts and principles to develop client/server applications that interface client-side code with databases.',
        'Software Testing, Automation, and Quality Assurance': 'Students will apply software engineering testing strategies and practices as part of the software development lifecycle, including requirements analysis, verification and validation, and quality management. The creation of unit tests and analysis of various testing approaches will also be covered.',
        'Computational Graphics and Visualization': 'Students will create realistic, interactive three-dimensional objects through the use of application programming interface (API) libraries and best practices. Students will also develop fully formed graphic applications that meet project requirements.',
        'UI/UX Design and Development': 'Students will explore User Interface (UI) and User experience (UX) design concepts and development techniques with an emphasis on user-centric and contemporary design patterns and techniques. Students will learn to conduct and evaluate user testing to inform user experience design. Use a variety of software tools to create wireframes and visual prototypes. This course provides students with authentic experiences in designing and developing user interfaces for embedded, cloud-based, and mobile systems.',
        'Software Security': 'Through the analysis of advanced security concepts, students will learn how to develop secure code that complies with security testing protocols. In addition to exploring and implementing security concepts through code, students will also learn why and how to apply encryption technologies and techniques to communicate securely.',
        'System Analysis and Design': 'Students will explore the principles, methods, and techniques used in systems development so that they can create system models using appropriate industry tools. As a part of creating system models, students will also learn to effectively communicate technical concepts and design decisions to various audiences in a professional manner.',
        'Operating Platforms': 'Students will develop a deeper understanding of operating platforms and architectures through the analysis and evaluation of the characteristics, advantages, and weaknesses of each. Students will learn the value of utilizing software design templates as well as how to utilize them to solve problems.',
        'Software Development Lifecycle': 'Students will explore the stages of the Software Development Lifecycle (SDLC) through the lens of developers and testers to examine the characteristics, documentation, and purpose of each stage. Through applying SDLC stages within an agile development environment, students will learn the principles and best practices used to develop high quality software while also assessing the impact of communication, documentation, and ethics on the SDLC.',
        'Programming Languages': 'Students will develop functional programs that comply with industry regulations and best practices using various programming languages. Special attention will be paid to the importance of developing code that is not only functional, but also secure, efficient, and professional.',
        'Foundation in Application Development': 'Students will use programming as a problem-solving technique in business and engineering applications. In writing computer code in a logical, structured, and organized manner, students will learn how to incorporate the key concepts of object orientation into their programming. Additionally, students will learn to write, review, and document interactive applications and work with Software Development Kits and Integrated Development Environment tools.',
        'Introduction to Scripting': 'Students will learn the fundamentals of programming concepts including frontendData types, variables, decision statements, loops, functions and file handling. By developing simple scripts, students will understand how to use common scripting language constructs including lists, literals, and regular expressions to build useful applications.',
        'Intro to Computer Science': 'This course first introduces with the elementary concepts of computer science such as CPU, memory, I/O devices and binary number system. It then focuses on developing basic programming skills. The topics include input and output frontendData, frontendData types, control structures, functions/methods, arrays, procedural and object-oriented programming concepts, and program debugging and compilation.',
    };

    const handleCourseClick = (course: string) => {
        setSelectedCourse({ title: course, description: courses[course] });
        onDescriptionModalOpen();
    };

    return (
        <Box p={8} maxW="1200px" mx="auto">
            <VStack spacing={8} align="start">
                {/* Header */}
                <Box>
                    <Heading as="h1" size="2xl" mb={4} overflow="hidden">
                        Anthony Premo
                    </Heading>
                    <Heading as="h1" size="lg" mb={4} overflow="hidden">
                        Full Stack Developer
                    </Heading>
                    <Text fontSize="lg">
                        <Link href="tel:+15184814204">(518) 481-4204</Link> |
                        <Link href="mailto:ajaipremo@gmail.com" isExternal ml={1}>
                            ajaipremo@gmail.com
                        </Link>{' '}
                        |
                        <Link
                            href="https://www.linkedin.com/in/anthony-premo"
                            isExternal
                            ml={1}
                        >
                            LinkedIn
                        </Link>{' '}
                        |
                        <Link href="https://github.com/premo14" isExternal ml={1}>
                            GitHub
                        </Link>
                    </Text>
                </Box>

                <Divider />

                {/* Professional Summary */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Professional Summary
                    </Heading>
                    <Text>
                        Innovative software engineer with strong foundations in computer
                        science. Proficient in multiple programming languages and
                        frameworks, with dedication to delivering high-quality software
                        solutions.
                    </Text>
                </Box>

                <Divider />

                {/* Certifications & Licenses */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Certifications & Licenses
                    </Heading>
                    <Text>UpNCoding Golang Bootcamp Certification - Aug 2023</Text>
                </Box>

                <Divider />

                {/* Skills */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Skills
                    </Heading>
                    <Text>
                        Go, TypeScript/JavaScript, HTML, CSS, Gorilla Mux, GORM, ChakraUI,
                        React, TanStack, Vite, NodeJS, MySQL, Docker, Git, Linux, AWS,
                        Postman
                    </Text>
                </Box>

                <Divider />

                {/* Academic/Notable projects */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Academic/Notable Projects
                    </Heading>
                    <Text mb={4}>
                        Visit{' '}
                        <Link href="/projects" fontWeight="bold">
                            Projects
                        </Link>
                    </Text>
                </Box>

                <Divider />

                {/* Professional Experience */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Professional Experience
                    </Heading>
                    <Text fontWeight="bold">Software Engineer</Text>
                    <Text mb={2}>
                        <Link
                            href="https://upncoding.com"
                            isExternal
                            fontWeight="bold"
                        >
                            UpNCoding
                        </Link>{' '}
                        (Remote) - Dec/2023 – Present
                    </Text>
                    <Text mb={4}>
                        • Develop and support a tourist guidance app, enhancing user
                        engagement and experience using Laravel/PHP, Kotlin, Angular,
                        Docker, and MySQL. • Collaborate in a SCRUM team to ensure prompt
                        delivery and continuous improvement through iterative development
                        cycles.
                    </Text>
                    <Text fontWeight="bold">IT Technician</Text>
                    <Text mb={2}>
                        <Link
                            href="https://adirondacktechs.com"
                            isExternal
                            fontWeight="bold"
                        >
                            Adirondack Techs
                        </Link>{' '}
                        (St Regis Falls, NY) - July/2022 – Sept/2022
                    </Text>
                    <Text mb={4}>
                        • Managed maintenance, installation, and troubleshooting of PCs,
                        networks, and mobile devices, improving operational efficiency. •
                        Delivered technical support and resolved software installation
                        issues, enhancing user satisfaction.
                    </Text>
                    <Text fontWeight="bold">Freelance Software Developer</Text>
                    <Text mb={2}>Self Employment (Remote) - Aug/2019 – Present</Text>
                    <Text>
                        • Developed web and mobile applications using HTML, CSS,
                        JavaScript, and Angular. Managed databases with MySQL and MongoDB.
                        Collaborated with clients, implemented RESTful APIs, conducted
                        manual testing, and used Git for version control.
                    </Text>
                </Box>

                <Divider />

                {/* Education */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Education
                    </Heading>
                    <Text fontWeight="bold">
                        Southern New Hampshire University
                    </Text>
                    <Text>
                        Bachelors of Computer Science – Software Engineering - Aug/2024
                    </Text>
                    <Text>
                        Relevant coursework: Data Structures, Full Stack Development,
                        Software Security, Software Testing, Client/Server Dev, Secure
                        Coding, and{' '}
                        <Link onClick={onMainModalOpen} fontWeight="bold" >
                            more!
                        </Link>
                    </Text>
                </Box>
            </VStack>

            {/* Main Modal Popup for Course List */}
            <Modal isOpen={isMainModalOpen} onClose={onMainModalClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Relevant Coursework</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack align="start" spacing={3}>
                            {Object.keys(courses).map((course, index) => (
                                <Link
                                    key={index}
                                    fontWeight="bold"
                                    color="teal.500"
                                    onClick={() => handleCourseClick(course)}
                                >
                                    {course}
                                </Link>
                            ))}
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onMainModalClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Description Modal Popup for Selected Course */}
            <Modal isOpen={isDescriptionModalOpen} onClose={onDescriptionModalClose} size="md">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedCourse.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text dangerouslySetInnerHTML={{ __html: selectedCourse.description || 'No description available.' }} />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onDescriptionModalClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Resume;
