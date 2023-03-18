import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCorrilyShowcase from '@/images/logos/showcase/corrily.svg'
import logoElementaryShowcase from '@/images/logos/showcase/elementary.svg'
import logoExploShowcase from '@/images/logos/showcase/explo.svg'
import logoLoopholeShowcase from '@/images/logos/showcase/loophole.svg'
import logoSieveShowcase from '@/images/logos/showcase/sieve.svg'
import logoTolstoyShowcase from '@/images/logos/showcase/tolstoy.svg'
import logoInfisicalShowcase from '@/images/logos/showcase/infisical.svg'
import logoMindsDBShowcase from '@/images/logos/showcase/mindsdb.svg'
import logoThanxShowcase from '@/images/logos/showcase/thanx.svg'
import logoMageShowcase from '@/images/logos/showcase/mage.svg'
import logoHopioShowcase from '@/images/logos/showcase/hopio.svg'
import logoLotusShowcase from '@/images/logos/showcase/lotus.svg'
import logoDotsShowcase from '@/images/logos/showcase/dots.svg'
import logoInvopopShowcase from '@/images/logos/showcase/invopop.svg'
import logoBitskiShowcase from '@/images/logos/showcase/bitski.svg'
import logoPropelauthShowcase from '@/images/logos/showcase/propelauth.svg'
import logoKaldeaShowcase from '@/images/logos/showcase/kaldea.svg'
import logoFliptShowcase from '@/images/logos/showcase/flipt.svg'
import logoRadiantShowcase from '@/images/logos/showcase/radiant.svg'
import logoTriggerShowcase from '@/images/logos/showcase/trigger.svg'

export const featuredShowcases = [
  {
    name: 'Loophole Labs',
    description: 'Modern application delivery for developers and DevOps teams',
    link: { href: 'https://frpc.io', label: 'frpc.io' },
    logo: logoLoopholeShowcase,
  },
  {
    name: 'Explo',
    description: 'Customer-facing analytics for any platform',
    link: { href: 'https://docs.explo.co', label: 'docs.explo.co' },
    logo: logoExploShowcase,
  },
  {
    name: 'MindsDB',
    description: 'Introducing AI to your database',
    link: { href: 'https://docs.mindsdb.com', label: 'docs.mindsdb.com' },
    logo: logoMindsDBShowcase,
  },
  {
    name: 'Infisical',
    description:
      'Automatically sync your environment variables easily, securely',
    link: { href: 'https://infisical.com/docs', label: 'infisical.com/docs' },
    logo: logoInfisicalShowcase,
  },
  {
    name: 'Elementary',
    description: 'Open-source data observability',
    link: {
      href: 'https://docs.elementary-data.com',
      label: 'docs.elementary-data.com',
    },
    logo: logoElementaryShowcase,
  },
]

const showcases = [
  ...featuredShowcases,
  {
    name: 'Trigger.dev',
    description: 'Effortless automation built for developers',
    link: {
      href: 'https://docs.trigger.dev',
      label: 'docs.trigger.com',
    },
    logo: logoTriggerShowcase,
  },
  {
    name: 'Tolstoy',
    description: 'A new way to communicate, with interactive video',
    link: {
      href: 'https://developers.gotolstoy.com',
      label: 'developers.gotolstoy.com',
    },
    logo: logoTolstoyShowcase,
  },
  {
    name: 'Corrily',
    description:
      'Know exactly what to price your products, services, and subscriptions',
    link: { href: 'https://docs.corrily.com', label: 'docs.corrily.com' },
    logo: logoCorrilyShowcase,
  },
  {
    name: 'Sieve',
    description:
      'Build magical video AI functionality into your apps with just a few API calls',
    link: { href: 'https://docs.sievedata.com', label: 'docs.sievedata.com' },
    logo: logoSieveShowcase,
  },
  {
    name: 'Thanx',
    description: `The #1 guest engagement platform`,
    link: { href: 'https://docs.thanx.com', label: 'docs.thanx.com' },
    logo: logoThanxShowcase,
  },
  {
    name: 'Mage',
    description: `Open-source data pipeline tool for transforming and integrating data`,
    link: { href: 'https://docs.mage.ai', label: 'docs.mage.ai' },
    logo: logoMageShowcase,
  },
  {
    name: 'Hop',
    description: `Automatically detects your environment and builds your code`,
    link: { href: 'https://docs.hop.io', label: 'docs.hop.io' },
    logo: logoHopioShowcase,
  },
  {
    name: 'Lotus',
    description: `A real-time engine for your pricing & packaging`,
    link: { href: 'https://docs.uselotus.io', label: 'docs.uselotus.io' },
    logo: logoLotusShowcase,
  },
  {
    name: 'Dots',
    description: `A Single Unified Platform For All Your Payments`,
    link: { href: 'https://docs.dots.dev', label: 'docs.dots.dev' },
    logo: logoDotsShowcase,
  },
  {
    name: 'Invopop',
    description: `API to automate VAT, complex e-invoicing formats and integrations with local tax authorities`,
    link: { href: 'https://docs.invopop.com', label: 'docs.invopop.com' },
    logo: logoInvopopShowcase,
  },
  {
    name: 'Bitski',
    description: `The NFT wallet for everyone`,
    link: { href: 'https://docs.bitski.com', label: 'docs.bitski.com' },
    logo: logoBitskiShowcase,
  },
  {
    name: 'Propelauth',
    description: `End-to-end managed user authentication specializing in B2B use cases`,
    link: { href: 'https://docs.propelauth.com', label: 'docs.propelauth.com' },
    logo: logoPropelauthShowcase,
  },
  {
    name: 'Kaldea',
    description: `The unified analytics platform`,
    link: { href: 'https://docs.kaldea.com', label: 'kaldea.com/docs' },
    logo: logoKaldeaShowcase,
  },
  {
    name: 'Flipt',
    description: `Open source feature flag infrastructure`,
    link: { href: 'https://flipt.io/docs', label: 'flipt.io/docs' },
    logo: logoFliptShowcase,
  },
  {
    name: 'Radiant',
    description: `Web3 no-code automation`,
    link: { href: 'https://docs.radiant.so', label: 'docs.radiant.so' },
    logo: logoRadiantShowcase,
  },
]

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
  return (
    <>
      <Head>
        <title>Showcase - Mintlify</title>
        <meta
          name="description"
          content="Discover how we help hundreds of developer-focused companies win with documentation."
        />
      </Head>
      <SimpleLayout
        title="Customer showcase"
        intro="Discover how we help hundreds of developer-focused companies win with documentation."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {showcases.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-medium text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-4 flex text-sm text-zinc-400 transition group-hover:text-primary dark:text-zinc-200 dark:group-hover:text-light">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
