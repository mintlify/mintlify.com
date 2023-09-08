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
import logoDepictAIShowcase from '@/images/logos/showcase/depictai.svg'
import logoElevenLabsShowcase from '@/images/logos/showcase/elevenlabs.svg'
import logoChainlitShowcase from '@/images/logos/showcase/chainlit.svg'
import logoUberduckShowcase from '@/images/logos/showcase/uberduck.svg'
import logoReworkdShowcase from '@/images/logos/showcase/reworkd.svg'
import logoPlaneShowcase from '@/images/logos/showcase/plane.svg'
import logoMontereyShowcase from '@/images/logos/showcase/monterey.svg'
import logoRevenueHeroShowcase from '@/images/logos/showcase/revenuehero.svg'
import logoKoalaShowcase from '@/images/logos/showcase/koala.svg'
import logoResendShowcase from '@/images/logos/showcase/resend.svg'
import logoDeferShowcase from '@/images/logos/showcase/defer.svg'
import logoUpstashShowcase from '@/images/logos/showcase/upstash.svg'
import logoSyndicateShowcase from '@/images/logos/showcase/syndicate.svg'
import logoStationShowcase from '@/images/logos/showcase/station.svg'
import logoDynamicShowcase from '@/images/logos/showcase/dynamic.svg'
import logoEtherspotShowcase from '@/images/logos/showcase/etherspot.svg'
import logoGoodyShowcase from '@/images/logos/showcase/goody.svg'
import logoKarrotMarketShowcase from '@/images/logos/showcase/karrotmarket.svg'
import logoRevocalizeShowcase from '@/images/logos/showcase/revocalize.svg'
import logoVioletShowcase from '@/images/logos/showcase/violet.svg'
import logoLagoShowcase from '@/images/logos/showcase/lago.svg'
import logoGr4vyShowcase from '@/images/logos/showcase/gr4vy.svg'
import logoSequenceShowcase from '@/images/logos/showcase/sequence.svg'
import logoTealShowcase from '@/images/logos/showcase/teal.svg'
import logoLatchBioShowcase from '@/images/logos/showcase/latchbio.svg'
import logoVitalShowcase from '@/images/logos/showcase/vital.svg'
import logoMetriportShowcase from '@/images/logos/showcase/metriport.svg'
import logoOpkitShowcase from '@/images/logos/showcase/opkit.svg'
import logoSpotShowcase from '@/images/logos/showcase/spot.svg'

export const categories = [
  {
    id: 'featured',
    label: 'Featured',
  },
  {
    id: 'devtool',
    label: 'Developer Tools'
  },
  {
    id: 'ai',
    label: 'Artifical Intelligence'
  },
  {
    id: 'saas',
    label: 'SaaS'
  },
  {
    id: 'fintech',
    label: 'Fintech'
  },
  {
    id: 'consumer',
    label: 'Consumer'
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
    description: 'AI Development Cloud Platform',
    link: { href: 'https://docs.mindsdb.com', label: 'docs.mindsdb.com' },
    logo: logoMindsDBShowcase,
    category: ['featured', 'ai']
  },
  {
    name: 'Whop',
    description: 'One-stop-shop for all the latest and greatest digital products',
    link: { href: 'https://dev.whop.com', label: 'dev.whop.com' },
    logo: logoWhopShowcase,
    category: ['featured', 'consumer']
  },
  {
    name: 'Mage',
    description: `Open-source data pipeline tool for transforming and integrating data`,
    link: { href: 'https://docs.mage.ai', label: 'docs.mage.ai' },
    logo: logoMageShowcase,
    category: ['featured', 'devtool']
  },
  {
    name: 'Plane',
    description: 'Modern payroll and HR for startups',
    link: { href: 'https://docs.plane.com', label: 'docs.plane.com' },
    logo: logoPlaneShowcase,
    category: ['featured', 'saas']
  },
  {
    name: 'Loophole Labs',
    description: 'Modern application delivery for developers and DevOps teams',
    link: { href: 'https://frpc.io', label: 'frpc.io' },
    logo: logoLoopholeShowcase,
    category: ['featured', 'devtool']
  },
]

export const showcases = [
  ...featuredShowcases,
  {
    name: 'Resend',
    description:
      'Email for developers',
    link: { href: 'https://resend.com/docs', label: 'resend.com/docs' },
    logo: logoResendShowcase,
    category: ['featured', 'devtool'],
    isCustomerStory: true
  },
  {
    name: 'Elementary',
    description: 'Open-source data observability',
    link: {
      href: 'https://docs.elementary-data.com',
      label: 'docs.elementary-data.com',
    },
    logo: logoElementaryShowcase,
    category: ['devtool']
  },
  {
    name: 'ElevenLabs',
    description: 'Generative Voice AI',
    link: { href: 'https://docs.elevenlabs', label: 'docs.elevenlabs.io' },
    logo: logoElevenLabsShowcase,
    category: ['ai']
  },
  {
    name: 'AgentGPT',
    description:
      'Autonomous AI Agent platform',
    link: { href: 'https://docs.reworkd.ai', label: 'docs.reworkd.ai' },
    logo: logoReworkdShowcase,
    category: ['ai']
  },
  {
    name: 'Chainlit',
    description: 'Open source LLM builder for Python',
    link: { href: 'https://docs.chainlit.io', label: 'docs.chainlit.io' },
    logo: logoChainlitShowcase,
    category: ['ai']
  },
  {
    name: 'Uberduck',
    description: 'Synthetic singing and rapping vocals',
    link: { href: 'https://docs.uberduck.ai', label: 'docs.uberduck.ai' },
    logo: logoUberduckShowcase,
    category: ['ai']
  },
  {
    name: 'Explo',
    description: 'Customer-facing analytics for any platform',
    link: { href: 'https://docs.explo.co', label: 'docs.explo.co' },
    logo: logoExploShowcase,
    category: ['featured', 'saas']
  },
  {
    name: 'Monterey',
    description: 'Copilot for product insights',
    link: { href: 'https://docs.monterey.ai', label: 'docs.monterey.ai' },
    logo: logoMontereyShowcase,
    category: ['saas', 'ai']
  },
  {
    name: 'RevenueHero',
    description: 'Pipeline acceleration platform that qualifies, routes and schedules meetings',
    link: { href: 'https://help.revenuehero.io', label: 'help.revenuehero.io' },
    logo: logoRevenueHeroShowcase,
    category: ['saas']
  },
  {
    name: 'Koala',
    description: 'Customer intent platform',
    link: { href: 'https://getkoala.com', label: 'getkoala.com/docs' },
    logo: logoKoalaShowcase,
    category: ['saas']
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
    name: 'Depict',
    description: 'E-commerce merchandising for fashion',
    link: { href: 'https://docs.depict.ai', label: 'docs.depict.ai' },
    logo: logoDepictAIShowcase,
    category: ['ai']
  },
  {
    name: 'Thanx',
    description: `The #1 guest engagement platform`,
    link: { href: 'https://docs.thanx.com', label: 'docs.thanx.com' },
    logo: logoThanxShowcase,
    category: ['saas']
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
    category: ['fintech']
  },
  {
    name: 'Dots',
    description: `A Single Unified Platform For All Your Payments`,
    link: { href: 'https://docs.dots.dev', label: 'docs.dots.dev' },
    logo: logoDotsShowcase,
    category: ['fintech']
  },
  {
    name: 'Invopop',
    description: `API to automate VAT, complex e-invoicing formats and integrations`,
    link: { href: 'https://docs.invopop.com', label: 'docs.invopop.com' },
    logo: logoInvopopShowcase,
    category: ['fintech']
  },
  {
    name: 'Propelauth',
    description: `End-to-end managed B2B user authentication`,
    link: { href: 'https://docs.propelauth.com', label: 'docs.propelauth.com' },
    logo: logoPropelauthShowcase,
    category: ['devtool']
  },
  {
    name: 'Upstash',
    description:
      'Serverless Data Platform for developers',
    link: { href: 'https://upstash.com/docs', label: 'upstash.com/docs' },
    logo: logoUpstashShowcase,
    category: ['devtool']
  },
  {
    name: 'Defer',
    description:
      'Onboarding flows and rich product integrations',
    link: { href: 'https://docs.defer.run', label: 'docs.defer.run' },
    logo: logoDeferShowcase,
    category: ['devtool']
  },
  {
    name: 'Kaldea',
    description: `The unified analytics platform`,
    link: { href: 'https://docs.kaldea.com', label: 'kaldea.com/docs' },
    logo: logoKaldeaShowcase,
    category: ['saas']
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
  {
    name: 'Sieve',
    description:
      'Build magical video AI functionality into your apps with just a few API calls',
    link: { href: 'https://docs.sievedata.com', label: 'docs.sievedata.com' },
    logo: logoSieveShowcase,
    category: ['ai']
  },
  {
    name: 'Syndicate',
    description:
      'Decentralized asset management platform and social network.',
    link: { href: 'https://docs.syndicate.io', label: 'docs.syndicate.io' },
    logo: logoSyndicateShowcase,
    category: ['web3']
  },
  {
    name: 'GroupOS',
    description:
      'Web3 toolkit for autonomous networks',
    link: { href: 'https://docs.groupos.xyz', label: 'docs.groupos.xyz' },
    logo: logoStationShowcase,
    category: ['web3']
  },
  {
    name: 'Dynamic',
    description:
      'Multi-chain wallet-based authentication and authorization platform',
    link: { href: 'https://docs.dynamic.xyz', label: 'docs.dynamic.xyz' },
    logo: logoDynamicShowcase,
    category: ['web3']
  },
  {
    name: 'Etherspot',
    description:
      'An account abstraction SDK, delivering frictionless Web3 UX.',
    link: { href: 'https://etherspot.fyi', label: 'etherspot.fyi' },
    logo: logoEtherspotShowcase,
    category: ['web3']
  },
  {
    name: 'Goody',
    description:
      'All-in-one platform for business gifting',
    link: { href: 'https://developer.ongoody.com', label: 'developer.ongoody.com' },
    logo: logoGoodyShowcase,
    category: ['consumer']
  },
  {
    name: 'Karrot Market',
    description:
      'Hyperlocal community app which offers a secondhand marketplace',
      link: { href: 'https://docs.karrotmini.com', label: 'docs.karrotmini.com' },
    logo: logoKarrotMarketShowcase,
    category: ['consumer']
  },
  {
    name: 'Bitski',
    description: `The NFT wallet for everyone`,
    link: { href: 'https://docs.bitski.com', label: 'docs.bitski.com' },
    logo: logoBitskiShowcase,
    category: ['consumer', 'web3']
  },
  {
    name: 'Revocalize',
    description:
      'Your personal AI Voice Toolkit',
    link: { href: 'https://docs.revocalize.ai', label: 'docs.revocalize.ai' },
    logo: logoRevocalizeShowcase,
    category: ['consumer']
  },
  {
    name: 'Sequence',
    description:
      'Integrated billing and pricing solution for B2B scaleups',
    link: { href: 'https://docs.sequencehq.com', label: 'docs.sequencehq.com' },
    logo: logoSequenceShowcase,
    category: ['fintech']
  },
  {
    name: 'Violet',
    description:
      'Unified commerce API connecting merchants and channels directly',
    link: { href: 'https://docs.violet.io', label: 'docs.violet.io' },
    logo: logoVioletShowcase,
    category: ['fintech']
  },
  {
    name: 'Gr4vy',
    description:
      'Cloud payment orchestration platform',
    link: { href: 'https://docs.gr4vy.com', label: 'docs.gr4vy.com' },
    logo: logoGr4vyShowcase,
    category: ['fintech']
  },
  {
    name: 'Lago',
    description:
      'Open-source metering and usage-based billing',
    link: { href: 'https://docs.getlago.com', label: 'docs.getlago.com' },
    logo: logoLagoShowcase,
    category: ['fintech']
  },
  {
    name: 'Teal',
    description:
      'Embedded SMB Accounting',
    link: { href: 'https://docs.teal.dev', label: 'docs.teal.dev' },
    logo: logoTealShowcase,
    category: ['fintech']
  },
  {
    name: 'LatchBio',
    description:
      'The Cloud for Biology',
    link: { href: 'https://wiki.latch.bio', label: 'wiki.latch.bio' },
    logo: logoLatchBioShowcase,
    category: ['healthcare']
  },
  {
    name: 'Vital',
    description:
      'API for collecting at-home health data for building privacy-focused applications',
    link: { href: 'https://docs.tryvital.io', label: 'docs.tryvital.io' },
    logo: logoVitalShowcase,
    category: ['healthcare']
  },
  {
    name: 'Metriport',
    description:
      'Medical data management for digital health companies',
    link: { href: 'https://docs.metriport.com', label: 'docs.metriport.com' },
    logo: logoMetriportShowcase,
    category: ['healthcare']
  },
  {
    name: 'Opkit',
    description:
      'Automated health insurance verification platform',
    link: { href: 'https://docs.opkit.co', label: 'docs.opkit.co' },
    logo: logoOpkitShowcase,
    category: ['healthcare']
  },
  {
    name: 'Spot',
    description:
      'At-home tests for telehealth companies',
    link: { href: 'https://docs.spotdx.com', label: 'docs.spotdx.com' },
    logo: logoSpotShowcase,
    category: ['healthcare']
  },
]