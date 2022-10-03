import Image from 'next/future/image'

import maayan from '@/images/testimonials/maayan.jpeg'
import ian from '@/images/testimonials/ian.jpeg'
import andrej from '@/images/testimonials/andrej.jpeg'
import mok from '@/images/testimonials/mok.jpeg'
import declan from '@/images/testimonials/declan.jpeg'
import zach from '@/images/testimonials/zach.jpeg'
import maitham from '@/images/testimonials/maitham.jpeg'
import philip from '@/images/testimonials/philip.jpeg'
import brendan from '@/images/testimonials/brendan.jpeg'

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
      content: `We love what Mintlify has done for our API docs. We're an API-first company, so our documentation is an extension of our main product. We honestly couldn't be happier with how our docs are turning out, and I haven't seen any other companies offering a product even close to Mintlify's. Great work!`,
      author: {
        name: 'Declan Goncalves',
        role: 'Co-Founder, Hyperbeam',
        image: declan,
      },
    },
    {
      content: `Best docs creator I've ever used.`,
      author: {
        name: 'Philip Scott',
        role: 'Co-Founder, Hyperbeam',
        image: philip,
      },
    },
  ],
  [
    {
      content: `We've used Redocly, Gitbook, Docusaurus AND Readme and found all of them to be lacking. Mintlify's API reference pages (reminiscent of Stripe's) are exactly what we were looking for. Throw in the amazing support and you've got a documentation page we couldn't be happier with!`,
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
        'The docs look beautiful and way happier with the result than any of the other alternatives we checked out.',
      author: {
        name: 'Brendan Ashworth',
        role: 'Founder, Bunting Labs',
        image: brendan,
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Loved by businesses worldwide.
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          See what other developer-focused companies like yours have to say
          about us
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
                  <figure className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-gray-900/5 dark:border-zinc-800 dark:bg-zinc-900 sm:gap-y-8">
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
