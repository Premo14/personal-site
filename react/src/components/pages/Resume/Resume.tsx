import React from 'react';
import {
    Box,
    Heading,
    Text,
    Divider,
    VStack,
    Link
} from "@chakra-ui/react";
import Courses from './Courses.tsx';

const Resume: React.FC = () => {
    return (
      <Box p={8} maxW="1200px" mx="auto">
          <VStack spacing={8} align="start">
              {/* Header */}
              <Box>
                  <Heading as="h1" size="2xl" mb={4} overflow="hidden">
                      Anthony Premo
                  </Heading>
                  <Heading as="h1" size="lg" mb={4}>
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
                      Full Stack Software Engineer with a solid foundation in computer science
                      and hands-on experience in full-stack development. Proficient in Go, React,
                      TypeScript, and AWS, with expertise in databases such as MySQL and MongoDB.
                      Skilled in developing and maintaining web applications, collaborating within
                      SCRUM teams, and implementing agile methodologies to deliver scalable and
                      efficient solutions. Certified in Golang Bootcamp and holding a BS in
                      Software Engineering. Committed to learning and eager to contribute to
                      innovative projects.
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
                      <Text as="span" fontWeight="bold">
                          Most Familiar Tools:
                      </Text>{' '}
                      Go, Java, Spring/Boot, React, Angular, Node.js, TypeScript, JavaScript, HTML, CSS, SQL DBs, GitHub, Docker, Postman, AWS, Terraform, CI/CD, Jira, RESTful APIs
                      <br />
                      <Text as="span" fontWeight="bold">
                          Less Familiar Tools:
                      </Text>{' '}
                      Python, PHP, Kotlin, Mobile Dev, C-like, Laravel, Testing, NoSQL DBs
                  </Text>
              </Box>

              <Divider />

              {/* Academic/Notable Projects */}
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
                  <Text fontWeight="bold">Full Stack Software Engineer</Text>
                  <Text mb={2}>
                      <Link
                        href="https://revature.com"
                        isExternal
                        fontWeight="bold"
                      >
                          Revature
                      </Link>{' '}
                      (Location Varies) - Dec/2024 - Present
                  </Text>
                  <Text mb={4}>
                      <Text>• Develop and maintain full-stack applications for a variety of clients across different industries, utilizing a wide range of programming languages, frameworks, and tools.</Text>
                      <Text>• Collaborate with cross-functional teams to deliver high-quality software solutions, adapting to diverse project requirements and client specifications.</Text>
                      <Text>• Manage end-to-end development processes, from requirements gathering to deployment, while ensuring scalability, performance, and security.</Text>
                  </Text>

                  <Text fontWeight="bold">Senior Full Stack Engineer</Text>
                  <Text mb={2}>
                      <Link
                        href="https://www.linkedin.com/company/impression.artwork/posts/?feedView=all"
                        isExternal
                        fontWeight="bold"
                      >
                          Revature
                      </Link>{' '}
                      (Location Varies) - May/2024 - Present
                  </Text>
                  <Text mb={4}>
                      <Text>• Helped streamline development by implementing tools like Docker and Terraform.</Text>
                      <Text>• Oversee developer progress, help where help is needed, and assign tasks to developers.</Text>
                      <Text>• Setup project working environments using MERN stack (Mongo, Express, React/React Native, Node.js).</Text>
                  </Text>

                  <Text fontWeight="bold">Software Development Tutoring</Text>
                  <Text mb={2}>Self Employment (Remote) - Aug/2019 – Aug/2024</Text>
                  <Text mb={4}>
                      <Text as="span" fontWeight="bold">
                          • Frontend Development:
                      </Text>{' '}
                      Designed and built responsive user interfaces using HTML, CSS, JavaScript/TypeScript, and React, improving UI/UX and engagement for web applications.
                      <br />
                      <Text as="span" fontWeight="bold">
                          • Backend Development:
                      </Text>{' '}
                      Developed and maintained server-side logic and RESTful APIs, ensuring seamless integration with frontend components.
                      <br />
                      <Text as="span" fontWeight="bold">
                          • Database Management:
                      </Text>{' '}
                      Managed and optimized relational and non-relational databases using SQL and No-SQL databases, ensuring data integrity, security, and high performance.
                  </Text>

                  <Text fontWeight="bold">Software Engineer</Text>
                  <Text mb={2}>
                      <Link
                        href="https://upncoding.com"
                        isExternal
                        fontWeight="bold"
                      >
                          UpNCoding
                      </Link>{' '}
                      (Remote) - Dec/2023 – June/2024
                  </Text>
                  <Text mb={4}>
                      <Text>• Develop and support a tourist guidance app, enhancing user
                          engagement and experience using Laravel/PHP, Kotlin, Angular,
                          Docker, and MySQL.</Text>
                      <Text>• Collaborate in a SCRUM team to ensure prompt delivery and
                          continuous improvement through iterative development cycles.</Text>
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
                      <Text>• Managed maintenance, installation, and troubleshooting of PCs,
                          networks, and mobile devices, improving operational efficiency.</Text>
                      <Text>• Delivered technical support and resolved software installation
                          issues, enhancing user satisfaction.</Text>
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

                  <Courses />
              </Box>
          </VStack>
      </Box>
    );
};

export default Resume;
