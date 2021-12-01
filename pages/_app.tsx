import '../styles/index.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/layout/layout';
import UiContextProvider from '../components/context/ui';
import ImageModal from '../components/modals/image-modal';

/**
 * @function MyApp
 * @summary MyApp component
 * @description The main app component that defines the structure of the pages.
 * @param { AppProps } props 
 * @returns { JSX }
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ImageModal />
    </UiContextProvider>
  );
}

export default MyApp
