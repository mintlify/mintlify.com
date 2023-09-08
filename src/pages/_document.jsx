import Script from 'next/script'
import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    // let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)
    let isDarkMode = false;

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

const googleAnalyticsScript = `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NZ6RFCB9LN');
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <script
        src="https://www.googletagmanager.com/gtag/js?id=G-NZ6RFCB9LN"
        strategy="afterInteractive"
      />
      <script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}
      />
      <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
