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
        videoBackground: -10,
        content: 1,
        modal: 1000,
    },
});

export default theme;
