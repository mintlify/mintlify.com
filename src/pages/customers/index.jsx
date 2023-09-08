import Image from 'next/future/image'
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonials } from '@/components/Testimonials'
import { useState } from 'react'
import clsx from 'clsx'
import { categories, showcases } from '@/lib/customers'
import { ChevronRightIcon } from '@/components/Card'
import Link from 'next/link'


export function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState({
    id: 'featured',
    label: 'Featured'
  });

  const filteredShowcases = showcases.filter((showcase) => showcase.category?.includes(activeCategory.id)).sort((a, b) => (a.isCustomerStory) ? -1 : 1);

  return (
    <>
      <Head>
        <title>Showcase - Mintlify</title>
        <meta
          name="description"
          content="Discover how we help developer-focused companies win with documentation."
        />
      </Head>
      <SimpleLayout
        title="Customer showcase"
        intro="Discover how we help developer-focused companies win with documentation."
      >
        <ul className="not-prose mb-6 pb-[1px] flex-none min-w-full overflow-auto space-x-6 flex border-b dark:border-zinc-800/50">
          {
            categories.map((category) => (
              <li className="cursor-pointer" onClick={() => setActiveCategory(category)}>
                <h2 className={clsx("flex text-sm leading-6 font-medium whitespace-nowrap pt-3 pb-3 -mb-px max-w-max",
                  category.id === activeCategory.id
                    ? 'border-b text-primary dark:text-light border-current'
                    : 'text-zinc-900 border-transparent hover:border-b hover:border-zinc-300 dark:text-zinc-200 dark:hover:border-zinc-700')}>
                  {category.label}
                </h2>
              </li>
            ))
          }
        </ul>
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredShowcases.map((project) => (
            <div key={project.name} className="relative flex flex-col rounded-xl border border-zinc-100 bg-white p-6 shadow-xl shadow-zinc-300/10 dark:shadow-none dark:border-zinc-800/80 dark:bg-gradient-to-bl dark:bg-zinc-900 dark:from-zinc-950/5 dark:to-zinc-950/30 dark:hover:bg-zinc-800/50" target="_blank">
              <div className="flex items-center space-x-3.5">
                <div className="border dark:border-zinc-800 rounded-full">
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-7 w-7 rounded-full"
                    unoptimized
                  />
                </div>
                <h2 className="text-base text-zinc-800 dark:text-zinc-100 font-medium">
                  {project.name}
                </h2>
                {
                  project.isCustomerStory && <span className="inline-flex items-center leading-none rounded-full bg-green-50 dark:bg-light/5 px-2 py-1 text-xs font-medium text-dark dark:text-light ring-1 ring-inset ring-primary/20 dark:ring-light/20">
                  Customer story
                </span>
                }
              </div>
              <p className='flex-1 mt-4 mb-1 text-sm text-zinc-600 dark:text-zinc-400'>{project.description}</p>
                <Link href={project.link.href} target={project.isCustomerStory ? "_self" : "_blank"} className="flex items-center space-x-1 mt-4 rounded-full dark:border dark:border-zinc-800 dark:hover:border-zinc-700 bg-zinc-100/70 dark:bg-transparent hover:bg-zinc-100 dark:text-white font-medium w-fit px-4 py-1 text-sm">
                  {project.isCustomerStory ? 'Read more' : 'View docs'}
                <ChevronRightIcon className="ml-1 h-auto w-4 stroke-current" />
              </Link>
            </div>
          ))}
        </ul>
        <Testimonials />
      </SimpleLayout>
    </>
  )
}
