import { useEffect, useRef } from 'react'

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

export default function App({ Component, pageProps, router }) {
  const { pathname } = useRouter();
  const previousPathname = usePrevious(router.pathname);
  const isLoadingPage = pathname === '/loading';

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        {
          !isLoadingPage && <Header />
        }
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        {
          !isLoadingPage && <Footer />
        }
      </div>
    </>
  )
}
