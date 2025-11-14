import RootLayout from '@/components/layout/root-layout/root-layout';
import contentful from '@/services/contentful';
import { Heading } from '@chakra-ui/react';

/**
 * @function Home
 * @summary Home page component
 * @description The home page component
 * @description This will likely be removed once I start creating pages in the page directory
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
