import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { useState, useEffect } from 'react'
import { getAllArticles } from '@/lib/getAllArticles'
import Link from 'next/link'
import { CategoryTags } from '@/components/blog/CategoryTags'

export function Author({ name, role, imgUrl }) {
  return (
    <div className="relative flex items-center gap-x-4">
      <img src={imgUrl} alt="" className="h-10 w-10 rounded-full" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-zinc-900 dark:text-zinc-200">{name}</p>
        <p className="text-zinc-600 dark:text-zinc-400">{role}</p>
      </div>
    </div>
  )
}

function ArticlePreview({ article }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${article.slug}`}
        className="relative flex cursor-pointer flex-col gap-10 lg:flex-row"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-inset ring-zinc-900/10 dark:ring-white/10 sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          <img
            src={article.mobileImageUrl}
            alt={article.title}
            className="absolute inset-0 block h-full w-full object-cover transition duration-150 group-hover:scale-105 lg:hidden"
          />
          <img
            src={article.desktopImageUrl}
            alt={article.title}
            className="absolute inset-0 hidden h-full w-full object-cover transition duration-150 group-hover:scale-105 lg:block"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={article.date} className="text-zinc-500">
              {article.date}
            </time>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-4 text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-200">
              {article.title}
            </h3>
            <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>
          </div>
          <div className="mt-6 flex border-t border-zinc-900/5 pt-6 dark:border-white/5">
            <Author
              name={article.author}
              imgUrl={article.authorImageUrl}
              role={article.authorRole}
            />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const [articlesToShow, setArticlesToShow] = useState(articles)
  const [category, setCategory] = useState('Featured')

  useEffect(() => {
    setArticlesToShow(
      articles.filter(
        (article) => category === 'All' || article.categories.includes(category)
      )
    )
  }, [category])
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
        <SimpleLayout title="Blog">
          <CategoryTags
            setCategory={(category) => setCategory(category)}
            selectedCategory={category}
          />
          <div className="mt-8 sm:mt-10">
            <div className="mt-16 space-y-20 lg:space-y-20">
              {articlesToShow.map((article) => (
                <ArticlePreview key={article.slug} article={article} />
              ))}
            </div>
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
