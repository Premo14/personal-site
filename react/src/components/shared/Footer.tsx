import { Box, useColorModeValue, Text, Stack, Button } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.400", "gray.700")}
            w="100%"
            p="2"
            position="relative"
            bottom="0"
            overflow="hidden"
            zIndex={10}
        >
            <Box>
                <Text fontSize="lg" fontWeight="bold" textAlign="center" pb="1">
                    Connect with me:
                </Text>
                <Stack direction="row" spacing={3} justifyContent="center">
                    <Button as="a" href="https://linkedin.com/in/anthony-premo" target="_blank" colorScheme="linkedin">
                        LinkedIn
                    </Button>
                    <Button as="a" href="https://github.com/premo14" target="_blank" colorScheme="gray">
                        GitHub
                    </Button>
                    <Button as="a" href="mailto:ajaipremo@gmail.com" colorScheme="blue">
                        Email
                    </Button>
                </Stack>
            </Box>
            <Text color={useColorModeValue("black", "white")} textAlign="center" pt="4">
                &copy; {new Date().getFullYear()} Anthony Premo
            </Text>
        </Box>
    );
}
