import React from 'react';
import {Box, Heading, Text, Divider, VStack, Link} from "@chakra-ui/react";

const Resume: React.FC = () => {
    return (
        <Box p={8} maxW="1200px" mx="auto">
        <VStack spacing={8} align="start">
            {/* Header */}
            <Box>
                <Heading as="h1" size="2xl" mb={4} overflow="hidden">
                    Anthony Premo
                </Heading>
                <Text fontSize="lg">
                    <Link href="tel:+15184814204">
                        (518) 481-4204
                    </Link> |
                    <Link href="mailto:ajaipremo@gmail.com" isExternal ml={1}>
                        ajaipremo@gmail.com
                    </Link> |
                    <Link href="https://www.linkedin.com/in/anthony-premo" isExternal ml={1}>
                        LinkedIn
                    </Link> |
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
                        Innovative software engineer with strong foundations in computer science. Proficient in multiple programming
                        languages and frameworks, with dedication to delivering high-quality software solutions.
                    </Text>
                </Box>

                <Divider />

                {/* Certifications & Licenses */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Certifications & Licenses
                    </Heading>
                    <Text>
                        UpNCoding Golang Bootcamp Certification - Aug 2023
                    </Text>
                </Box>

                <Divider />

                {/* Skills */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Skills
                    </Heading>
                    <Text>
                        Go, PHP, HTML, CSS, JavaScript/TypeScript, Kotlin/Java, C#/C++, Python, MongoDB, MySQL, Laravel, Bootstrap,
                        React, Angular, Vue.js, Express, Spring Boot, ASP.NET Core, Gin, Django, Git, Docker, Linux, Android, Postman, AWS
                    </Text>
                </Box>

                <Divider />

                {/* Academic/Notable projects */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Academic/Notable Projects
                    </Heading>
                    <Text mb={4}>
                        Visit <Link href="/projects" fontWeight="bold">
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
                        <Link href="https://upncoding.com" isExternal fontWeight="bold">
                            UpNCoding
                        </Link> (Remote) - Dec/2023 – Present
                    </Text>
                    <Text mb={4}>
                        • Develop and support a tourist guidance app, enhancing user engagement and experience using Laravel/PHP, Kotlin, Angular, Docker, and MySQL.
                        • Collaborate in a SCRUM team to ensure prompt delivery and continuous improvement through iterative development cycles.
                    </Text>
                    <Text fontWeight="bold">IT Technician</Text>
                    <Text mb={2}>
                        <Link href="https://adirondacktechs.com" isExternal fontWeight="bold">
                            Adirondack Techs
                        </Link> (St Regis Falls, NY) - July/2022 – Sept/2022
                    </Text>
                    <Text mb={4}>
                        • Managed maintenance, installation, and troubleshooting of PCs, networks, and mobile devices, improving operational efficiency.
                        • Delivered technical support and resolved software installation issues, enhancing user satisfaction.
                    </Text>
                    <Text fontWeight="bold">Freelance Software Developer</Text>
                    <Text mb={2}>
                        Self Employment (Remote) - Aug/2019 – Present
                    </Text>
                    <Text>
                        • Developed web and mobile applications using HTML, CSS, JavaScript, and Angular. Managed databases with MySQL and MongoDB. Collaborated with clients, implemented RESTful APIs, conducted manual testing, and used Git for version control.
                    </Text>
                </Box>

                <Divider />

                {/* Education */}
                <Box>
                    <Heading as="h2" size="lg" mb={2}>
                        Education
                    </Heading>
                    <Text fontWeight="bold">Southern New Hampshire University</Text>
                    <Text>
                        BS CS – Software Engineering - Aug/2024
                    </Text>
                    <Text>
                        Relevant coursework: Data Structures, Full Stack Development, Software Security, Software Testing, Client/Server Dev, Secure Coding, and more!
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default Resume;
