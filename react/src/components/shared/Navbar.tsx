import { Box, Flex, Button, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            bg={useColorModeValue("gray.400", "gray.700")}
            position="relative"
            top="0"
            left="0"
            width="100vw"
            px={4}
            py={2}
            zIndex={10}
            overflow="hidden"
        >
            <Flex alignItems="center" justifyContent="space-between">
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    gap={3}
                    display={{ base: "none", sm: "flex" }}
                >
                    <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                        Home
                    </Link>
                    <Link to="/resume" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                        Resume
                    </Link>
                    <Link to="/projects" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                        Projects
                    </Link>
                </Flex>
                <Flex alignItems="center" gap={3}>
                    <Link to="https://github.com/premo14/personal-site" target="_blank">
                        Source Code
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
