import Head from 'next/head'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { ArrowLeftIcon } from '@/components/blog/ArticleLayout'
import Link from 'next/link'
import { Button } from '../Button'

const AboutSection = ({ title, text }) => {
  return (
    <span className="my-6 flex flex-col gap-2 text-sm">
      <p className="text-zinc-500">{title}</p>
      <p className="text-zinc-700">{text}</p>
    </span>
  )
}

const OpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      height="1em"
      viewBox="0 0 512 512"
    >
      <path d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" />
    </svg>
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
              className="b-8 group col-span-1 mt-12 flex justify-start space-x-0.5 text-left text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-300 lg:-left-5 lg:mb-0 xl:-top-0.5 xl:left-0 xl:mt-0"
              href="/customers"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <span>Back</span>
            </Link>
            <article className="col-span-7">
              <header className="flex max-w-2xl flex-col gap-6">
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
                    className="block w-2/3 rounded-md object-cover"
                  />
                  <AboutSection title="About" text={about.description} />
                  <Link
                    className="flex items-center gap-2 fill-zinc-500 text-xs text-zinc-500 hover:fill-zinc-900 hover:text-zinc-900"
                    href={about.docsUrl}
                  >
                    {about.docsUrl}
                    <OpenIcon />
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
