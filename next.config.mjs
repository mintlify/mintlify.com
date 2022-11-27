import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
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
        source: '/start',
        destination: 'https://1tc7vihvbit.typeform.com/to/pZJ31XZB',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/mintlify/mint',
        permanent: false,
      },
      {
        source: '/community',
        destination: 'https://discord.gg/MPNgtSZkgK',
        permanent: false,
      },
      {
        source: '/cli',
        destination: 'https://www.npmjs.com/package/mintlify',
        permanent: false,
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

export default withMDX(nextConfig)
