import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const theme = extendTheme({
    config,
    styles: {
        global: (props: any) => ({
            body: {
                backgroundColor: mode("gray.500", "")(props),
                zIndex: 0
            },

        }),
    },
    components: {
        Link: {
            baseStyle: (props: any) => ({
                color: mode("blue.700", "teal.500")(props),
            }),
        },
    },
    zIndices: {
        videoBackground: -10, // Custom z-index for the video background
        content: 1,           // Content z-index
        modal: 1000,          // Example of a modal z-index if needed
    },
});

export default theme;
