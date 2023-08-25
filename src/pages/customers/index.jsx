import Head from 'next/head'
import { getAllStories } from '@/lib/getAllStories'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonials } from '@/components/Testimonials'
import { Showcase } from '@/components/Showcase'

function StoryPreview({ story }) {
  return (
    <div className="border-1 group w-full rounded-2xl border border-zinc-200">
      <Link
        href={`/customers/${story.slug}`}
        className="relative flex cursor-pointer flex-col pb-4"
      >
        <img
          src={story.logoImageUrl}
          alt={story.title}
          className="block h-full w-full rounded-t-2xl object-cover opacity-80 transition duration-150 group-hover:opacity-100"
        />
        <div className="group-hover:scale-102 flex h-72 flex-col p-6">
          <h3 className="text-md mt-4 flex-grow leading-6 text-zinc-900 dark:text-zinc-200">
            "{story.quote}"
          </h3>
          <div>
            <p className="font-bold">{story.person}</p>
            <p>{story.role}</p>
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
