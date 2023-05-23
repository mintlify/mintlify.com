import { useEffect, useRef } from 'react'

import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import { useRouter } from 'next/router'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

const TWO_WEEKS_IN_MILLISECONDS = 12096e5

export default function App({ Component, pageProps, router }) {
  const { pathname, query } = useRouter()
  const previousPathname = usePrevious(router.pathname)
  const isLoadingPage = pathname === '/loading'

  const referredBy = query['i']

  if (referredBy) {
    document.cookie = `mintlifyReferral=${referredBy};domain=mintlify.com;expires=${new Date(
      Date.now() + TWO_WEEKS_IN_MILLISECONDS
    )}`
  }

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mintlify" />
        <meta name="twitter:creator" content="@mintlify" />
        <meta name="og:image" content="https://mintlify.com/thumbnail.png" />
        <meta name="og:image:alt" content="Mintlify" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
      </Head>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="max-w-8xl flex w-full lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        {!isLoadingPage && <Header />}
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        {!isLoadingPage && <Footer />}
      </div>
    </>
  )
}
