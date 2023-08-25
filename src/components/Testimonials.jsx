import Image from 'next/future/image'

import maayan from '@/images/testimonials/maayan.jpeg'
import ian from '@/images/testimonials/ian.jpeg'
import andrej from '@/images/testimonials/andrej.jpeg'
import mok from '@/images/testimonials/mok.jpeg'
import zach from '@/images/testimonials/zach.jpeg'
import maitham from '@/images/testimonials/maitham.jpeg'
import emmett from '@/images/testimonials/emmett.jpeg'
import vlad from '@/images/testimonials/vlad.jpeg'
import torben from '@/images/testimonials/torben.jpeg'

const testimonials = [
  [
    {
      content:
        'Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project - moving the docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it.',
      author: {
        name: 'Maayan Salom',
        role: 'Co-Founder, Elementary',
        image: maayan,
      },
    },
    {
      content: 'Mintlify is great. Super sexy docs with zero effort.',
      author: {
        name: 'Mokshith Voodarla',
        role: 'CEO, Sieve',
        image: mok,
      },
    },
    {
      content:
        'The team is amazing, best looking docs on the market and team is super receptive on feedback!',
      author: {
        name: 'Maitham Dib',
        role: 'Founder at Vital',
        image: maitham,
      },
    },
  ],
  [
    {
      content:
        'Started with Gitbook, saw the Mintlify demo, never looked back. Our docs are 10x better now. Plus the team is incredibly responsive and proactive. No brainer for us.',
      author: {
        name: 'Ian Yanusko',
        role: 'Co-Founder, Bracket',
        image: ian,
      },
    },
    {
      content: `Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!`,
      author: {
        name: 'Vlad Matsiiako',
        role: 'Co-Founder, Infisical',
        image: vlad,
      },
    },
    {
      content:
        'Han and the team set up our documentation extremely quickly and they are BEAUTIFUL. They moved extremely quickly and the product is great.',
      author: {
        name: 'Emmett Miller',
        role: 'Founder at Invezo',
        image: emmett,
      },
    },
  ],
  [
    {
      content: `We've used Redocly, Gitbook, Docusaurus AND Readme and found all of them to be lacking. Mintlify's API reference pages (reminiscent of Stripe's) are exactly what we were looking for. Throw in amazing support and we couldn't be happier!`,
      author: {
        name: 'Andrej Zukov-Gregoric',
        role: 'CEO, Corrily',
        image: andrej,
      },
    },
    {
      content:
        'Sleek, extensible, and easy to use - what more could you ask for? I highly recommend checking out Mintlify!',
      author: {
        name: 'Zachary Kirby',
        role: 'Co-Founder, Vessel',
        image: zach,
      },
    },
    {
      content:
        'I love how Mintlify made our documentation look 10 times better with minimum effort on our side. We just provided our documentation, and they did all the rest. I highly recommend working with them.',
      author: {
        name: 'Torben Friehe',
        role: 'Co-Founder, Wingback',
        image: torben,
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="pt-20 sm:pt-32"
    >
      <div className="mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Loved by teams worldwide
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          See what developer-focused companies like yours have to say about us.
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        {testimonials.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="flex flex-col gap-y-6">
              {column.map((testimonial, testimonialIndex) => (
                <li key={testimonialIndex}>
                  <figure className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 sm:gap-y-8">
                    <blockquote className="relative">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {testimonial.content}
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-zinc-100 pt-6 dark:border-zinc-800">
                      <div>
                        <div className="font-display text-base text-zinc-900 dark:text-zinc-100">
                          {testimonial.author.name}
                        </div>
                        <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          {testimonial.author.role}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-zinc-50">
                        <Image
                          className="h-12 w-12 object-cover"
                          src={testimonial.author.image}
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
