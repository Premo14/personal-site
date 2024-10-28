import { useEffect, useRef } from "react";
import {
    Box,
    Flex,
    Button,
    IconButton,
    useColorModeValue,
    useColorMode,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    // Colors based on the requested changes
    const bgColor = useColorModeValue("gray.400", "gray.700");
    const buttonBgColor = "transparent";
    const sidebarBgColor = "#1a1a1a"; // Very dark gray, almost black

    // Close sidebar on Escape key press or outside click
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
      <Box
        bg={bgColor}
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
                display={{ base: "flex", sm: "none" }}
                onClick={isOpen ? onClose : onOpen}
                bg={buttonBgColor}
                color="white"
                _hover={{ color: "blue.400", bg: "transparent" }} // Change icon color to blue on hover, remove bg
                padding={1} // Reduce padding for better centering
                alignItems="center"
                justifyContent="center"
                fontSize="1.5rem" // Increase icon size if necessary
              />

              {/* Desktop Menu */}
              <Flex
                justifyContent="center"
                alignItems="center"
                gap={3}
                display={{ base: "none", sm: "flex" }}
              >
                  <RouterLink to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
                      Home
                  </RouterLink>
                  <RouterLink
                    to="/resume"
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                  >
                      Resume
                  </RouterLink>
                  <RouterLink
                    to="/projects"
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                  >
                      Projects
                  </RouterLink>
              </Flex>

              <Flex alignItems="center" gap={3}>
                  <RouterLink to="https://github.com/premo14/personal-site" target="_blank">
                      Source Code
                  </RouterLink>
                  <Button onClick={toggleColorMode}>
                      {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                  </Button>
              </Flex>
          </Flex>

          {/* Background Blur Overlay */}
          {isOpen && (
            <Box
              position="fixed"
              top="0"
              left="0"
              width="100vw"
              height="100vh"
              bg="rgba(0, 0, 0, 0.3)"
              backdropFilter="blur(5px)"
              zIndex={15}
              onClick={onClose}
            />
          )}

          {/* Mobile Sidebar Menu */}
          {isOpen && (
            <VStack
              ref={sidebarRef}
              position="fixed"
              top="0"
              left="0"
              height="100vh"
              width="60vw"
              maxWidth="300px"
              bg={sidebarBgColor}
              spacing={4}
              py={8}
              px={4}
              display={{ base: "flex", sm: "none" }}
              zIndex={20}
              align="start"
              boxShadow="lg"
              transform={isOpen ? "translateX(0)" : "translateX(-100%)"}
              transition="transform 0.3s ease"
            >
                {/* Full-width Buttons with Hover Border */}
                <Button
                  as={RouterLink}
                  to="/"
                  onClick={onClose}
                  variant="ghost"
                  width="100%"
                  justifyContent="flex-start"
                  _hover={{ borderLeft: "4px solid blue", bg: "gray.800" }}
                >
                    Home
                </Button>
                <Button
                  as={RouterLink}
                  to="/resume"
                  onClick={onClose}
                  variant="ghost"
                  width="100%"
                  justifyContent="flex-start"
                  _hover={{ borderLeft: "4px solid blue", bg: "gray.800" }}
                >
                    Resume
                </Button>
                <Button
                  as={RouterLink}
                  to="/projects"
                  onClick={onClose}
                  variant="ghost"
                  width="100%"
                  justifyContent="flex-start"
                  _hover={{ borderLeft: "4px solid blue", bg: "gray.800" }}
                >
                    Projects
                </Button>
            </VStack>
          )}
      </Box>
    );
}
