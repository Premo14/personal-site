import { Box, Flex, Button, IconButton, useColorModeValue, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
              {/* Hamburger Menu for mobile */}
              <IconButton
                icon={isOpen ? <IoClose /> : <IoMenu />}
                aria-label="Open Menu"
                display={{ base: "block", sm: "none" }}
                onClick={isOpen ? onClose : onOpen}
                bg={useColorModeValue("gray.600", "gray.800")}
                color="white"
              />

              {/* Desktop Menu */}
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

          {/* Mobile Menu */}
          {isOpen && (
            <VStack
              position="absolute"
              top="100%"
              left="0"
              width="100vw"
              bg={useColorModeValue("gray.400", "gray.700")}
              spacing={4}
              py={4}
              display={{ base: "flex", sm: "none" }}
              zIndex={9}
            >
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }} onClick={onClose}>
                    Home
                </Link>
                <Link to="/resume" style={{ textDecoration: 'none', fontWeight: 'bold' }} onClick={onClose}>
                    Resume
                </Link>
                <Link to="/projects" style={{ textDecoration: 'none', fontWeight: 'bold' }} onClick={onClose}>
                    Projects
                </Link>
            </VStack>
          )}
      </Box>
    );
}
