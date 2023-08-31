import Head from 'next/head'
import { getAllStories } from '@/lib/getAllStories'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonials } from '@/components/Testimonials'
import { Showcase } from '@/components/Showcase'
import { Card } from '@/components/Card'
import Image from 'next/future/image'

const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      className=" fill-zinc-600 transition duration-200 dark:text-zinc-200"
      viewBox="0 0 448 512"
    >
      <path d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z" />
    </svg>
  )
}

function StoryPreview({ story }) {
  return (
    <Card as="li" key={story.slug}>
      <Card.Link
        href={`/customers/${story.slug}`}
        className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 sm:gap-y-8"
      >
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={story.logoImageUrl}
            alt=""
            width="8"
            height="8"
            className="h-8 w-8 rounded-full"
            unoptimized
          />
        </div>
        <h2 className="mt-6 text-base font-medium text-zinc-800 dark:text-zinc-100">
          {story.company}
        </h2>
        <Card.Description className="h-24">"{story.quote}"</Card.Description>
        <div className="mt-6 flex items-center gap-2">
          <span className="text-xs text-zinc-600 dark:text-zinc-200">
            Read more
          </span>
          <ArrowRightIcon className="h-4 w-4" />
        </div>
      </Card.Link>
    </Card>
  )
}

export default function ShowcaseIndex({ stories }) {
  return (
    <>
      <Head>
        <title>Showcase - Mintlify</title>
        <meta
          name="description"
          content="Mintlify enables teams of all sizes to create world-class documentation."
        />
      </Head>
      <SimpleLayout
        title="Meet our Customers"
        intro="Mintlify enables teams of all sizes to create world-class documentation."
      >
        <div className="flex flex-col gap-6">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {stories.map((story) => (
              <StoryPreview story={story} />
            ))}
          </ul>
          <Testimonials />
          <Showcase />
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      stories: (await getAllStories()).map(({ component, ...meta }) => meta),
    },
  }
}
