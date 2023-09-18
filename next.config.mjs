import { withSentryConfig } from '@sentry/nextjs'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/writer',
        destination: 'https://writer.mintlify.com',
        permanent: false,
      },
      {
        source: '/login',
        destination: 'https://dashboard.mintlify.com',
        permanent: false,
      },
      {
        source: '/start',
        destination: 'https://dashboard.mintlify.com/signup',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/mintlify/mint',
        permanent: false,
      },
      {
        source: '/community',
        destination:
          'https://join.slack.com/t/mintlify-users/shared_invite/zt-23qwna8sg-R9PbdUo6jX3rujUfQ9q_gA',
        permanent: false,
      },
      {
        source: '/cli',
        destination: 'https://www.npmjs.com/package/mintlify',
        permanent: false,
      },
      {
        source: '/careers',
        destination:
          'https://mintlify.notion.site/Careers-Mintlify-d5bc6b6e72ff4bbeb8b20d6d372ac111',
        permanent: false,
      },
      {
        source: '/showcase',
        destination: '/customers',
        permanent: false,
      },
      {
        source: '/enterprise',
        destination: 'https://calendly.com/mintlify/mintlify-enterprise',
        permanent: false,
      },
      {
        source: '/i/:slug',
        destination: '/?i=:slug',
        permanent: false,
      },
      {
        source: '/upgrade/startup',
        destination: 'https://buy.stripe.com/7sI4khba69AT0uI3d9',
        permanent: false,
      },
      {
        source: '/upgrade/startup-trial',
        destination: 'https://buy.stripe.com/3cs185ceaaEX3GUcNH',
        permanent: false,
      },
      {
        source: '/code-of-conduct',
        destination:
          'https://mintlify.notion.site/Celo-Code-of-Conduct-02f83bbe9c8645698fa7640e1442d94f',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/schema.json',
        destination: '/api/schema',
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withSentryConfig(
  withMDX(nextConfig),
  {
    org: 'mintlify',
    project: 'mintlify-dot-com',
    dist: '1',
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
  }
)
