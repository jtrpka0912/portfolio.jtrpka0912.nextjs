import '../styles/index.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/layout/layout';
import Modal from '../components/ui/modal';

/**
 * @function MyApp
 * @summary MyApp component
 * @description The main app component that defines the structure of the pages.
 * @param { AppProps } props 
 * @returns { JSX }
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
