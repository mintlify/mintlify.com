import Head from 'next/head'
import { getAllStories } from '@/lib/getAllStories'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonials } from '@/components/Testimonials'
import { Showcase } from '@/components/Showcase'

const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      className="fill-zinc-600 transition duration-200 group-hover:-rotate-45"
      viewBox="0 0 448 512"
    >
      <path d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z" />
    </svg>
  )
}

function StoryPreview({ story }) {
  return (
    <div className="border-1 group w-full rounded-2xl border border-zinc-100 shadow transition duration-150 hover:shadow-lg">
      <Link
        href={`/customers/${story.slug}`}
        className="relative flex cursor-pointer flex-col pb-4"
      >
        <img
          src={story.logoImageUrl}
          alt={story.title}
          className="block h-full max-h-32 w-full rounded-t-2xl object-cover"
        />
        <div className="group-hover:scale-102 flex h-72 flex-col p-6">
          <h3 className="text-md mt-4 flex-grow leading-6 text-zinc-900 dark:text-zinc-200">
            "{story.quote}"
          </h3>
          <div className="flex items-center">
            <div className="flex-grow">
              <p className="font-bold">{story.person}</p>
              <p>{story.role}</p>
            </div>
            <div className="border-1 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 transition duration-200 group-hover:scale-110 group-hover:bg-zinc-100/50">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </Link>
    </div>
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
