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
import logoWhopShowcase from '@/images/logos/showcase/whop.svg'
import logoFliptShowcase from '@/images/logos/showcase/flipt.svg'
import logoRadiantShowcase from '@/images/logos/showcase/radiant.svg'
import logoTriggerShowcase from '@/images/logos/showcase/trigger.svg'
import logoFlatfileShowcase from '@/images/logos/showcase/flatfile.svg'
import { Card } from './Card'
import Image from 'next/future/image'

export const featuredShowcases = [
  {
    name: 'Flatfile',
    description: 'Smart APIs for file-based data import',
    link: { href: 'https://flatfile.com/docs', label: 'flatfile.com/docs' },
    logo: logoFlatfileShowcase,
  },
  {
    name: 'MindsDB',
    description: 'Introducing AI to your database',
    link: { href: 'https://docs.mindsdb.com', label: 'docs.mindsdb.com' },
    logo: logoMindsDBShowcase,
  },
  {
    name: 'Loophole Labs',
    description: 'Modern application delivery for developers and DevOps teams',
    link: { href: 'https://frpc.io', label: 'frpc.io' },
    logo: logoLoopholeShowcase,
  },
  {
    name: 'Whop',
    description: 'One-stop-shop for all the latest and greatest digital products',
    link: { href: 'https://dev.whop.com', label: 'dev.whop.com' },
    logo: logoWhopShowcase,
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

export const showcases = [
  ...featuredShowcases,
  {
    name: 'Explo',
    description: 'Customer-facing analytics for any platform',
    link: { href: 'https://docs.explo.co', label: 'docs.explo.co' },
    logo: logoExploShowcase,
  },
  {
    name: 'Infisical',
    description:
      'Automatically sync your environment variables easily, securely',
    link: { href: 'https://infisical.com/docs', label: 'infisical.com/docs' },
    logo: logoInfisicalShowcase,
  },
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
    link: { href: 'https://kaldea.com/docs', label: 'kaldea.com/docs' },
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

function ShowcaseCard({ showcase }) {
  return (
    <Card as="li" key={showcase.name}>
      <Card.Link
        href={showcase.link.href}
        className="relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 sm:gap-y-8"
      >
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={showcase.logo}
            alt=""
            className="h-8 w-8 rounded-full"
            unoptimized
          />
        </div>
        <h2 className="mt-6 text-base font-medium text-zinc-800 dark:text-zinc-100">
          {showcase.name}
        </h2>
        <Card.Description>{showcase.description}</Card.Description>
      </Card.Link>
    </Card>
  )
}

export function Showcase() {
  return (
    <section
      id="showcase"
      aria-label="Our favorite docs"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Beautiful docs you need
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Check out some of our favorite documentations for yourself
        </p>
      </div>
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {showcases.map((showcase) => (
          <ShowcaseCard showcase={showcase} />
        ))}
      </ul>
    </section>
  )
}
