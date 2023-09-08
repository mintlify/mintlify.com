import Head from 'next/head'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { ArrowLeftIcon } from '@/components/blog/ArticleLayout'
import { Button } from '../Button'
import Link from 'next/link'

const AboutSection = ({ title, text }) => {
  return (
    <span className="my-6 flex flex-col gap-2 text-sm">
      <p className="text-zinc-500">{title}</p>
      <p className="text-zinc-700 dark:text-zinc-300">{text}</p>
    </span>
  )
}

export function StoryLayout({ children, meta, about }) {
  return (
    <>
      <Head>
        <title>{`${meta.title} - Mintlify`}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.desktopImageUrl} />
      </Head>
      <Container className="mt-13 lg:mt-24">
        <div className="xl:relative">
          <div className="grid-cols mx-auto grid grid-cols-8 items-start">
            <Link
              className="b-8 group col-span-1 mt-12 flex items-center justify-start space-x-0.5 text-left text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 lg:-left-5 lg:mb-0 xl:-top-0.5 xl:left-0 xl:mt-0"
              href="/customers"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back</span>
            </Link>
            <article className="col-span-6">
              <header className="flex flex-col gap-6">
                <span className="text-primary dark:text-light font-medium text-sm">Customer story</span>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {meta.title}
                </h1>
                <h2 className="font-regular text-xl tracking-tight text-zinc-600 dark:text-zinc-100">
                  {meta.description}
                </h2>
              </header>
              <div className="grid-cols mt-6 grid grid-cols-6 gap-12">
                <div className="sticky top-0 col-span-2 h-screen pr-4 pt-12">
                  <img
                    src={about.imageUrl}
                    className="block w-12 rounded-md object-cover"
                  />
                  <AboutSection title="About" text={about.description} />
                  <Link
                    className="flex items-center gap-2 text-xs text-primary dark:text-light dark:hover:text-primary hover:fill-zinc-900 hover:text-zinc-900"
                    href={about.docsUrl}
                  >
                    {about.docsUrl}
                  </Link>
                  <AboutSection title="Backed by" text={about.backedBy} />
                  <Button type="submit" className="flex-none" href="/start">
                    Get Started
                  </Button>
                </div>
                <Prose className="col-span-4 mt-4">{children}</Prose>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}