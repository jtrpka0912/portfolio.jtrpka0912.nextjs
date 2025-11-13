import { Box, Link as ChakraLink } from "@chakra-ui/react"
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
            <ChakraLink asChild>
                <Link href="/">
                    <FontAwesomeIcon
                        icon={faHouse}
                        size="lg"
                        widthAuto
                        aria-label="Return to Home Page"
                    />
                </Link>
            </ChakraLink>
        </Box>
    );
};

export default MainHeader;