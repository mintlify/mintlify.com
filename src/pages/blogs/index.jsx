import { Card } from '@/components/Card'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <Card>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl gap-x-8 gap-y-20">
          <article className="flex flex-col items-start justify-between">
            <a href={`/blogs/${article.slug}`}>
              <div className="relative w-full">
                <img
                  alt="blog photo"
                  src={article.imageUrl.src}
                  className=" aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
            </a>

            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time datetime={article.date} className="text-gray-500">
                  {formatDate(article.date)}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6  ">
                  <a href={`/blogs/${article.slug}`}>
                    <Card.Title>
                      <span className="absolute inset-0"></span>
                      {article.title}
                    </Card.Title>
                  </a>
                </h3>
                <Card.Description>
                  <div className="line-clamp-3 mt-5 text-sm leading-6 ">
                    {article.description}
                  </div>
                </Card.Description>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Card>
  )
}

// <article className="md:grid md:grid-cols-4 md:items-baseline">
//   <Card className="md:col-span-3">
//     <div className="relative w-full">
//       <img
//         src={article.imageUrl}
//         alt=""
//         className="aspect-[16/9] w-full rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2]"
//       />
//       <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
//     </div>
//     <Card.Title href={`/blogs/${article.slug}`}>{article.title}</Card.Title>
//     <Card.Eyebrow
//       as="time"
//       dateTime={article.date}
//       className="md:hidden"
//       decorate
//     >
//       {formatDate(article.date)}
//     </Card.Eyebrow>
//     <Card.Description>{article.description}</Card.Description>
//     <Card.Cta>Read more</Card.Cta>
//   </Card>
//   <Card.Eyebrow
//     as="time"
//     dateTime={article.date}
//     className="mt-1 hidden md:block"
//   >
//     {formatDate(article.date)}
//   </Card.Eyebrow>
// </article>

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Blogs - Beautiful documentation that converts users</title>
        <meta
          name="Blogs"
          content="Build the documentation you've always wanted. Beautiful out of the box, easy to maintain, and optimized for user engagement."
        />
      </Head>
      <SimpleLayout
        title="Blogs"
        intro="Mintlify Chronicles: Navigating the World of Technical Documentation"
      >
        <div>
          <div>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
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
