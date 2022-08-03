import React from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

import '../styles/index.scss';

import type { AppProps } from 'next/app'

import Layout from '../components/layout/layout';
import UiContextProvider from '../components/context/ui';
import ImageModal from '../components/modals/image-modal';

import * as gtag from '../helpers/api/google-analytics';

/**
 * @function MyApp
 * @summary MyApp component
 * @description The main app component that defines the structure of the pages.
 * @param { AppProps } props 
 * @returns { JSX }
 */
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    <React.Fragment>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <UiContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ImageModal />
      </UiContextProvider>
    </React.Fragment>
  );
}

export default MyApp
