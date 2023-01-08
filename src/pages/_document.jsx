import Script from 'next/script';
import { Head, Html, Main, NextScript } from 'next/document';

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NZ6RFCB9LN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            // GA
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-NZ6RFCB9LN');

            // Segment
            !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="AxmMlFE7EFIobCdh1eFxP3ja2bRRelMi";;analytics.SNIPPET_VERSION="4.15.3";
              analytics.load("AxmMlFE7EFIobCdh1eFxP3ja2bRRelMi");
              analytics.page();
            }}();
          `}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
