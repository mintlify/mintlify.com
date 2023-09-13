import Script from 'next/script'
import { Head, Html, Main, NextScript } from 'next/document'

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

const googleAnalyticsScript = `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NZ6RFCB9LN');
`

const koalaScript = `
!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_76a6caa274e800f3ceff0b2bc6b9b9d82ab8/sdk.js"),(document.body || document.head).appendChild(n)}();
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
      <script
        id="koala"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: koalaScript }}
      />
      <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
