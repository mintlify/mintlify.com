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

export const categories = [
  {
    id: 'featured',
    label: 'Featured'
  },
  {
    id: 'ai',
    label: 'Artifical Intelligence'
  },
  {
    id: 'devtool',
    label: 'Developer Tools'
  },
  {
    id: 'saas',
    label: 'SaaS'
  },
  {
    id: 'consumer',
    label: 'Consumer'
  },
  {
    id: 'fintech',
    label: 'Fintech'
  },
  {
    id: 'web3',
    label: 'Web3'
  },
  {
    id: 'healthcare',
    label: 'Healthcare'
  },
]

export const featuredShowcases = [
  {
    name: 'Flatfile',
    description: 'Smart APIs for file-based data import',
    link: { href: 'https://flatfile.com/docs', label: 'flatfile.com/docs' },
    logo: logoFlatfileShowcase,
    category: ['featured', 'devtool']
  },
  {
    name: 'MindsDB',
    description: 'Introducing AI to your database',
    link: { href: 'https://docs.mindsdb.com', label: 'docs.mindsdb.com' },
    logo: logoMindsDBShowcase,
    category: ['featured', 'ai', 'devtool']
  },
  {
    name: 'Loophole Labs',
    description: 'Modern application delivery for developers and DevOps teams',
    link: { href: 'https://frpc.io', label: 'frpc.io' },
    logo: logoLoopholeShowcase,
    category: ['featured', 'devtool']
  },
  {
    name: 'Whop',
    description: 'One-stop-shop for all the latest and greatest digital products',
    link: { href: 'https://dev.whop.com', label: 'dev.whop.com' },
    logo: logoWhopShowcase,
    category: ['featured', 'consumer']
  },
  {
    name: 'Elementary',
    description: 'Open-source data observability',
    link: {
      href: 'https://docs.elementary-data.com',
      label: 'docs.elementary-data.com',
    },
    logo: logoElementaryShowcase,
    category: ['featured', 'devtool']
  },
]

export const showcases = [
  ...featuredShowcases,
  {
    name: 'Explo',
    description: 'Customer-facing analytics for any platform',
    link: { href: 'https://docs.explo.co', label: 'docs.explo.co' },
    logo: logoExploShowcase,
    category: ['featured', 'devtool', 'saas']
  },
  {
    name: 'Infisical',
    description:
      'Automatically sync your environment variables easily, securely',
    link: { href: 'https://infisical.com/docs', label: 'infisical.com/docs' },
    logo: logoInfisicalShowcase,
    category: ['devtool', 'saas']
  },
  {
    name: 'Trigger.dev',
    description: 'Effortless automation built for developers',
    link: {
      href: 'https://docs.trigger.dev',
      label: 'docs.trigger.com',
    },
    logo: logoTriggerShowcase,
    category: ['devtool']
  },
  {
    name: 'Tolstoy',
    description: 'A new way to communicate, with interactive video',
    link: {
      href: 'https://developers.gotolstoy.com',
      label: 'developers.gotolstoy.com',
    },
    logo: logoTolstoyShowcase,
    category: ['consumer']
  },
  {
    name: 'Corrily',
    description:
      'Know exactly what to price your products, services, and subscriptions',
    link: { href: 'https://docs.corrily.com', label: 'docs.corrily.com' },
    logo: logoCorrilyShowcase,
    category: ['fintech']
  },
  {
    name: 'Sieve',
    description:
      'Build magical video AI functionality into your apps with just a few API calls',
    link: { href: 'https://docs.sievedata.com', label: 'docs.sievedata.com' },
    logo: logoSieveShowcase,
    category: ['devtool', 'ai']
  },
  {
    name: 'Thanx',
    description: `The #1 guest engagement platform`,
    link: { href: 'https://docs.thanx.com', label: 'docs.thanx.com' },
    logo: logoThanxShowcase,
    category: ['saas']
  },
  {
    name: 'Mage',
    description: `Open-source data pipeline tool for transforming and integrating data`,
    link: { href: 'https://docs.mage.ai', label: 'docs.mage.ai' },
    logo: logoMageShowcase,
    category: ['featured', 'ai', 'devtool']
  },
  {
    name: 'Hop',
    description: `Automatically detects your environment and builds your code`,
    link: { href: 'https://docs.hop.io', label: 'docs.hop.io' },
    logo: logoHopioShowcase,
    category: ['devtool']
  },
  {
    name: 'Lotus',
    description: `A real-time engine for your pricing & packaging`,
    link: { href: 'https://docs.uselotus.io', label: 'docs.uselotus.io' },
    logo: logoLotusShowcase,
    category: ['fintech', 'devtool']
  },
  {
    name: 'Dots',
    description: `A Single Unified Platform For All Your Payments`,
    link: { href: 'https://docs.dots.dev', label: 'docs.dots.dev' },
    logo: logoDotsShowcase,
    category: ['fintech', 'devtool']
  },
  {
    name: 'Invopop',
    description: `API to automate VAT, complex e-invoicing formats and integrations`,
    link: { href: 'https://docs.invopop.com', label: 'docs.invopop.com' },
    logo: logoInvopopShowcase,
    category: ['devtool', 'fintech']
  },
  {
    name: 'Bitski',
    description: `The NFT wallet for everyone`,
    link: { href: 'https://docs.bitski.com', label: 'docs.bitski.com' },
    logo: logoBitskiShowcase,
    category: ['consumer', 'web3']
  },
  {
    name: 'Propelauth',
    description: `End-to-end managed B2B user authentication`,
    link: { href: 'https://docs.propelauth.com', label: 'docs.propelauth.com' },
    logo: logoPropelauthShowcase,
    category: ['devtool', 'saas']
  },
  {
    name: 'Kaldea',
    description: `The unified analytics platform`,
    link: { href: 'https://docs.kaldea.com', label: 'kaldea.com/docs' },
    logo: logoKaldeaShowcase,
    category: ['devtool']
  },
  {
    name: 'Flipt',
    description: `Open source feature flag infrastructure`,
    link: { href: 'https://flipt.io/docs', label: 'flipt.io/docs' },
    logo: logoFliptShowcase,
    category: ['devtool']
  },
  {
    name: 'Radiant',
    description: `Web3 no-code automation`,
    link: { href: 'https://docs.radiant.so', label: 'docs.radiant.so' },
    logo: logoRadiantShowcase,
    category: ['web3']
  },
]