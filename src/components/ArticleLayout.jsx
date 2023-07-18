import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { Author } from '@/pages/blog'
import Link from 'next/link'

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 -9 3 24" {...props}><path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Mintlify`}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.imageUrl} />
      </Head>
      <Container className="mt-13 lg:mt-24">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              className="mt-12 group mb-8 flex items-center justify-center transition lg:absolute lg:-left-5 lg:mb-0 xl:-top-0.5 xl:left-0 xl:mt-0 text-zinc-600 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 text-sm space-x-0.5 font-medium"
              href="/blog"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span>
                Back
              </span>
            </Link>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <span>{meta.date}</span>
                </time>
                <div className="mt-7">
                  <Author name={meta.author} imgUrl={meta.authorImageUrl} role={meta.authorRole} />
                </div>
              </header>
              <Prose className="mt-4">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
