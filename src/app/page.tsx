import RootLayout from '@/components/layout/root-layout/root-layout';
import { Heading } from '@chakra-ui/react';

/**
 * @function Home
 * @summary Home page component
 * @description The home page component.
 * @author NextJS
 * @returns {React.ReactNode}
 */
const Home = (): React.ReactNode => {
  return (
    <RootLayout>
      <Heading>Hello World</Heading>
    </RootLayout>
  );
};

export default Home;
