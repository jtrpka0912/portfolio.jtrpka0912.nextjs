import { Box, Heading } from "@chakra-ui/react"

/**
 * @function MainHeader
 * @summary Main Header Component
 * @description The main header for the NextJS root layout
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns { React.ReactNode }
 */
const MainHeader = () => {
    return (
        <Box as="header" backgroundColor="teal.muted" p="2">
            <Heading as="h1">Hello, World!</Heading>
        </Box>
    );
};

export default MainHeader;