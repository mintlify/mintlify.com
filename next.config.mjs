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
        destination: '/',
        permanent: false,
      },
      {
        source: '/docs',
        destination: 'https://meta.mintlify.com/docs',
        permanent: false,
      },
      {
        source: '/start',
        destination: 'https://1tc7vihvbit.typeform.com/to/pZJ31XZB',
        permanent: false,
      },
      {
        source: 'community',
        destination: 'https://discord.gg/b499CK8P9g',
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
