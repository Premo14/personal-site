import {Box, Container, useColorModeValue, Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box bg={useColorModeValue("gray.400", "gray.700")}
             as="footer" position="fixed" bottom="0" left="0" w="100%"
             p="4"
        >
            <Text color={useColorModeValue("black", "white")} textAlign="center">
                &copy; {new Date().getFullYear()} Anthony Premo
            </Text>
        </Box>
    )
}
