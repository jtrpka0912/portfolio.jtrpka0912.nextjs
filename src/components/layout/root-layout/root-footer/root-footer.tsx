import { Center } from "@chakra-ui/react"

/**
 * @function RootFooter
 * @summary Root Layout Footer Component
 * @description The footer for the root layout.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const RootFooter = (): React.ReactNode => {
  return (
    <Center as="footer" colorPalette="blue" bgColor="blue.solid" py="10" color="blue.subtle">
      <p>Hello, World!</p>
    </Center>
  );
};

export default RootFooter;