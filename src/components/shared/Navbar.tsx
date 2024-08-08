import {Box, Flex, Button, useColorModeValue, useColorMode, Container} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import {Link} from "react-router-dom";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"900px"}>
            <Box bg={useColorModeValue("gray.400", "gray.700")}
                 px={4} my={4} borderRadius={"5"} width="90vw" mx="auto">
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    {/* LEFT SIDE */}
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            Home
                        </Link>
                        <Link to="/resume" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            Resume
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            Contact
                        </Link>
                        <Link to="/projects" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                            Projects
                        </Link>
                    </Flex>

                    {/* RIGHT SIDE */}
                    <Flex alignItems={"center"} gap={3}>
                        {/* Toggle Color Mode */}
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}
