import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoBracketShowcase from '@/images/logos/showcase/bracket.svg'
import logoCloudanixShowcase from '@/images/logos/showcase/cloudanix.svg'
import logoCodeCraftersShowcase from '@/images/logos/showcase/codecrafters.svg'
import logoCorrilyShowcase from '@/images/logos/showcase/corrily.svg'
import logoElementaryShowcase from '@/images/logos/showcase/elementary.svg'
import logoExploShowcase from '@/images/logos/showcase/explo.svg'
import logoHyperbeamShowcase from '@/images/logos/showcase/hyperbeam.svg'
import logoIntunedShowcase from '@/images/logos/showcase/intuned.svg'
import logoKanaShowcase from '@/images/logos/showcase/kana.svg'
import logoLoopholeShowcase from '@/images/logos/showcase/loophole.svg'
import logoRampayShowcase from '@/images/logos/showcase/rampay.svg'
import logoRelateShowcase from '@/images/logos/showcase/relate.svg'
import logoSieveShowcase from '@/images/logos/showcase/sieve.svg'
import logoTolstoyShowcase from '@/images/logos/showcase/tolstoy.svg'
import logoVesselShowcase from '@/images/logos/showcase/vessel.svg'
import logoVitalShowcase from '@/images/logos/showcase/vital.svg'
import logoWebappShowcase from '@/images/logos/showcase/webapp.svg'
import logoContraxShowcase from '@/images/logos/showcase/contrax.svg'
import logoInvezoShowcase from '@/images/logos/showcase/invezo.svg'
import logoMundiShowcase from '@/images/logos/showcase/mundi.svg'
import logoInfisicalShowcase from '@/images/logos/showcase/infisical.svg'
import logoSlaiShowcase from '@/images/logos/showcase/slai.svg'
import logoFunctionaryShowcase from '@/images/logos/showcase/functionary.svg'
import logoAlpacaShowcase from '@/images/logos/showcase/alpaca.svg'
import logoCerebriumShowcase from '@/images/logos/showcase/cerebrium.svg'
import logoMirageMLShowcase from '@/images/logos/showcase/mirageml.svg'
import logoOpkitShowcase from '@/images/logos/showcase/opkit.svg'
import logoPelmShowcase from '@/images/logos/showcase/pelm.svg'
import logoShuttleShowcase from '@/images/logos/showcase/shuttle.svg'
import logoMindsDBShowcase from '@/images/logos/showcase/mindsdb.svg'
import logoThanxShowcase from '@/images/logos/showcase/thanx.svg'
import logoMageShowcase from '@/images/logos/showcase/mage.svg'
import logoReactEmailShowcase from '@/images/logos/showcase/reactemail.svg'
import logoHopioShowcase from '@/images/logos/showcase/hopio.svg'
import logoLotusShowcase from '@/images/logos/showcase/lotus.svg'
import logoDotsShowcase from '@/images/logos/showcase/dots.svg'
import logoInvopopShowcase from '@/images/logos/showcase/invopop.svg'
import logoBitskiShowcase from '@/images/logos/showcase/bitski.svg'
import logoPropelauthShowcase from '@/images/logos/showcase/propelauth.svg'
import logoArchitectShowcase from '@/images/logos/showcase/architect.svg'
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
    name: 'React Email',
    description: `Build and send emails using React and TypeScript`,
    link: { href: 'https://react.email/docs', label: 'react.email/docs' },
    logo: logoReactEmailShowcase,
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
    name: 'Architect',
    description: `Continuous delivery platform for modern, scalable cloud applications`,
    link: { href: 'https://docs.architect.io', label: 'docs.architect.io' },
    logo: logoArchitectShowcase,
  },
  {
    name: 'Kaldea',
    description: `The unified analytics platform`,
    link: { href: 'https://docs.kaldea.com', label: 'docs.kaldea.com' },
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
  {
    name: 'Vessel',
    description: `Integrate with your customer's CRM through one API`,
    link: { href: 'https://docs.vessel.land', label: 'docs.vessel.land' },
    logo: logoVesselShowcase,
  },
  {
    name: 'Vital',
    description: 'Wearables and lab test API for digital health companies',
    link: {
      href: 'https://docs.tryvital.io',
      label: 'docs.tryvital.io',
    },
    logo: logoVitalShowcase,
  },
  {
    name: 'Shuttle',
    description:
      'A Rust-native cloud development platform that lets you deploy your Rust apps for free',
    link: {
      href: 'https://docs.shuttle.rs',
      label: 'docs.shuttle.rs',
    },
    logo: logoShuttleShowcase,
  },
  {
    name: 'Hyperbeam',
    description: 'Embed virtual computers in your web app',
    link: { href: 'https://docs.hyperbeam.com', label: 'docs.hyperbeam.com' },
    logo: logoHyperbeamShowcase,
  },
  {
    name: 'Cerebrium',
    description:
      'AWS Sagemaker alternative providing all the features you need to quickly build a ML product',
    link: {
      href: 'https://docs.cerebrium.ai',
      label: 'docs.cerebrium.ai',
    },
    logo: logoCerebriumShowcase,
  },
  {
    name: 'Kana',
    description: 'API-first platform to improve how you monetize your product',
    link: { href: 'https://docs.usekana.com', label: 'docs.usekana.com' },
    logo: logoKanaShowcase,
  },
  {
    name: 'Alpaca',
    description: 'Combining Human skill and AI generative power',
    link: {
      href: 'https://docs.getalpaca.io',
      label: 'docs.getalpaca.io',
    },
    logo: logoAlpacaShowcase,
  },
  {
    name: 'Relate.so',
    description: 'The collaborative CRM your whole team uses',
    link: { href: 'https://relate.so/docs', label: 'relate.so/docs' },
    logo: logoRelateShowcase,
  },
  {
    name: 'Rampay',
    description:
      'APIs to empower seamless conversion between fiat and crypto on exchanges, wallets, NFT marketplaces',
    link: { href: 'https://docs.rampay.io', label: 'docs.rampay.io' },
    logo: logoRampayShowcase,
  },
  {
    name: 'CodeCrafters',
    description: 'Practice writing complex software',
    link: {
      href: 'https://docs.codecrafters.io',
      label: 'docs.codecrafters.io',
    },
    logo: logoCodeCraftersShowcase,
  },
  {
    name: 'webapp.io',
    description: 'The serverless VM platform',
    link: { href: 'https://docs.webapp.io', label: 'docs.webapp.io' },
    logo: logoWebappShowcase,
  },
  {
    name: 'Contrax',
    description: 'No-code dev tools & auto-compounding vaults on Arbitrum',
    link: {
      href: 'https://docs.contrax.finance',
      label: 'docs.contrax.finance',
    },
    logo: logoContraxShowcase,
  },
  {
    name: 'Bracket',
    description: 'Sync data across your business. One-time setup. No code',
    link: { href: 'https://docs.usebracket.com', label: 'docs.usebracket.com' },
    logo: logoBracketShowcase,
  },
  {
    name: 'Invezo',
    description: 'All-in-one crypto data platform',
    link: { href: 'https://docs.invezo.com', label: 'docs.invezo.com' },
    logo: logoInvezoShowcase,
  },
  {
    name: 'Mundi',
    description: 'Framework for Python spatial data analysis',
    link: { href: 'https://docs.mundi.ai', label: 'docs.mundi.ai' },
    logo: logoMundiShowcase,
  },
  {
    name: 'Slai',
    description: 'The fastest way to add production-ready ML into an app',
    link: { href: 'https://docs.slai.io', label: 'docs.slai.io' },
    logo: logoSlaiShowcase,
  },
  {
    name: 'Functionary',
    description: 'Trigger Alerts & Webhooks on User Events',
    link: {
      href: 'https://docs.functionary.run',
      label: 'docs.functionary.run',
    },
    logo: logoFunctionaryShowcase,
  },
  {
    name: 'MirageML',
    description: 'Generate 3D Design, Fast',
    link: {
      href: 'https://docs.mirageml.com',
      label: 'docs.mirageml.com',
    },
    logo: logoMirageMLShowcase,
  },
  {
    name: 'Opkit',
    description:
      'Platform for collecting and verifying patient health insurance details',
    link: {
      href: 'https://docs.opkit.co',
      label: 'docs.opkit.co',
    },
    logo: logoOpkitShowcase,
  },
  {
    name: 'Pelm',
    description: 'The developer API for energy data',
    link: {
      href: 'https://pelm.com/docs',
      label: 'pelm.com/docs',
    },
    logo: logoPelmShowcase,
  },
  {
    name: 'Cloudanix',
    description:
      'A central dashboard to secures your AWS, Azure, GCP, DigitalOcean and Kubernetes platforms',
    link: { href: 'https://docs.cloudanix.com', label: 'docs.cloudanix.com' },
    logo: logoCloudanixShowcase,
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
