import { Card } from '@/components/Card'
import Head from 'next/head'
import Image from 'next/image'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <Card className="cols-span-1 shadow-lg shadow-zinc-900/5 border rounded-xl dark:border-zinc-800 dark:hover:border-zinc-700 duration-100">
      <article className="cursor-pointer overflow-hidden rounded-lg transition-colors duration-200">
        <a href={`/blog/${article.slug}`}>
          <div className="relative flex w-full justify-center">
            <Image
              src={article.imageUrl}
              width={700}
              height={300}
              objectFit="cover"
              className="rounded-t-xl"
              alt="blog thumbnail"
            />
          </div>
        </a>

        <div className="p-8">
          <div className="group relative">
            <a className="mt-3 text-lg font-semibold tracking-tight leading-6 text-zinc-800 dark:text-zinc-100" href={`/blogs/${article.slug}`}>
              {article.title}
            </a>
            <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-loose">
              {article.description}
            </div>
            <div className="flex mt-6 text-xs">
              <div className="flex-1 text-zinc-500">
                <div>
                  Written By
                </div>
                <div className="mt-0.5 h-6 text-zinc-800 dark:text-zinc-200 flex items-center space-x-2 font-medium">
                  <Image
                    src={article.authorImageUrl}
                    width={20}
                    height={20}
                    objectFit="cover"
                    className="rounded-full border border-zinc-800"
                  />
                  <div>
                    {article.author}
                  </div>
                </div>
              </div>
              <div className="flex-1 text-zinc-500">
                <div>
                  Published on
                </div>
                <div className="mt-0.5 h-6 text-zinc-800 dark:text-zinc-200 font-medium" dateTime={article.date}>
                  {formatDate(article.date)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Card>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Blog - Mintlify</title>
        <meta
          name="Blogs"
          content="Build the documentation you've always wanted. Beautiful out of the box, easy to maintain, and optimized for user engagement."
        />
      </Head>
      <div className="mx-auto">
      <SimpleLayout
        title="Blog"
        intro="We write stuff from time to time that might be interesting"
      >
        <div className="mt-12 grid lg:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </SimpleLayout>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
