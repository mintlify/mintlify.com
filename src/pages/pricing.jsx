import Head from 'next/head'
import { useState, forwardRef } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { RadioGroup } from '@headlessui/react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonials } from '@/components/Testimonials'
import { trackStartOnboarding } from '@/analytics'

const IS_SCREENSHOT_MODE = false

const plans = [
  {
    name: 'Open Source',
    featured: false,
    price: { Monthly: 'Free', Annually: 'Free' },
    description: 'Simple and powerful for OS projects',
    button: {
      label: 'Get started for free',
      href: '/start',
    },
    features: [
      'Full access to the documentation platform for one project',
      'Third-party analytics integrations',
      'Out of the box in-app search',
      'Integrations with third-party analytics providers',
    ],
  },
  {
    name: 'Startup',
    featured: true,
    price: { Monthly: '$150', Annually: '$120' },
    description: 'Built for growing companies',
    button: {
      label: 'Try for free',
      href: '/start',
    },
    features: [
      'Everything from the Free plan',
      'Custom subdomains',
      'Advanced analytics and user insights',
      'White-glove documentation migration',
      'Workflow automations',
      'Slack Connect customer support',
    ],
  },
  {
    name: 'Enterprise',
    featured: false,
    price: { Monthly: 'Custom', Annually: 'Custom' },
    description: 'Fully tailored for your business',
    button: {
      label: 'Contact us',
      href: 'mailto:hi@mintlify.com',
    },
    features: [
      'Everything from the Pro plan',
      'Custom subpaths - /docs',
      'Custom authentication and gated content',
      'Custom workflow automations and integrations',
      'Translation management',
      'Priority customer support',
    ],
  },
]

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    primary:
      'relative overflow-hidden bg-primary text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured
          ? 'order-first bg-zinc-900 dark:bg-slate-50 lg:order-none'
          : 'border border-zinc-100 dark:border-zinc-800'
      )}
    >
      <h3
        className={clsx(
          'flex items-center',
          featured
            ? 'text-white dark:text-zinc-900'
            : 'text-gray-900 dark:text-zinc-100',
          IS_SCREENSHOT_MODE
            ? 'text-2xl font-medium tracking-tight'
            : 'text-sm font-semibold'
        )}
      >
        <span>{name}</span>
      </h3>
      {!IS_SCREENSHOT_MODE && (
        <p
          className={clsx(
            'relative flex tracking-tight',
            featured
              ? 'text-white dark:text-zinc-900'
              : 'text-zinc-900 dark:text-zinc-100',
            'mt-5 text-3xl'
          )}
        >
          {price.Monthly === price.Annually ? (
            price.Monthly
          ) : (
            <>
              <span
                aria-hidden={activePeriod === 'Annually'}
                className={clsx(
                  'space-x-1 transition duration-300',
                  activePeriod === 'Monthly' &&
                    'pointer-events-none translate-x-6 select-none opacity-0'
                )}
              >
                <span>{price.Annually}</span>
                <span className="text-sm tracking-normal text-zinc-300 dark:text-zinc-500">
                  /month
                </span>
              </span>
              <span
                aria-hidden={activePeriod === 'Annually'}
                className={clsx(
                  'absolute left-0 top-0 space-x-1 transition duration-300',
                  activePeriod === 'Annually' &&
                    'pointer-events-none -translate-x-6 select-none opacity-0'
                )}
              >
                <span>{price.Monthly}</span>
                <span className="text-sm tracking-normal text-zinc-300 dark:text-zinc-500">
                  /month
                </span>
              </span>
            </>
          )}
        </p>
      )}
      <p
        className={clsx(
          'mt-3 text-sm',
          featured
            ? 'text-gray-300 dark:text-zinc-700'
            : 'text-zinc-700 dark:text-zinc-300'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-zinc-800 text-zinc-300 dark:divide-zinc-200 dark:text-zinc-700'
              : 'divide-zinc-200 text-zinc-700 dark:divide-zinc-800 dark:text-zinc-300'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white dark:text-primary' : 'text-primary'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {!IS_SCREENSHOT_MODE && (
        <Button
          href={button.href}
          color={featured ? 'primary' : 'gray'}
          className="mt-6"
          aria-label={`Get started with the ${name} plan for ${price}`}
          onClick={() => trackStartOnboarding('Pricing')}
        >
          {button.label}
        </Button>
      )}
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Annually')

  return (
    <section id="pricing" aria-labelledby="pricing-title">
      <div className="flex justify-center">
        <div className="relative">
          <RadioGroup
            value={activePeriod}
            onChange={setActivePeriod}
            className="grid grid-cols-2"
          >
            {['Annually', 'Monthly'].map((period) => (
              <RadioGroup.Option
                key={period}
                value={period}
                className={clsx(
                  'cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-zinc-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 dark:text-zinc-200',
                  period === 'Annually' ? 'rounded-l-lg' : '-ml-px rounded-r-lg'
                )}
              >
                {period}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
          <div
            aria-hidden="true"
            className={clsx(
              'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-primary transition-all duration-300',
              activePeriod === 'Annually'
                ? '[clip-path:inset(0_50%_0_0)]'
                : '[clip-path:inset(0_0_0_calc(50%-1px))]'
            )}
          >
            {['Annually', 'Monthly'].map((period) => (
              <div
                key={period}
                className={clsx(
                  'py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none',
                  period === 'Monthly' && '-ml-px'
                )}
              >
                {period}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 p-4 sm:mt-6 lg:max-w-none lg:grid-cols-3">
        {plans.map((plan) => (
          <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
        ))}
      </div>
    </section>
  )
}

export default function ArticlesIndex() {
  return (
    <>
      <Head>
        <title>Pricing - Mintlify</title>
        <meta name="description" content="Pricing on your terms" />
      </Head>
      <SimpleLayout
        title="Pricing on your terms"
        intro="Whichever plan you pick, it's free until you love your docs. That's our promise"
      >
        <Pricing />
        <Testimonials />
      </SimpleLayout>
    </>
  )
}
