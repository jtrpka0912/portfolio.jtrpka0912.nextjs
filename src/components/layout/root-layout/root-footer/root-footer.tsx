import { Box } from "@chakra-ui/react"

/**
 * @function RootFooter
 * @summary Root Layout Footer Component
 * @description The footer for the root layout.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const RootFooter = (): React.ReactNode => {
  return (
    <Box as="footer">
      <p>Hello, World!</p>
    </Box>
  );
};

export default RootFooter