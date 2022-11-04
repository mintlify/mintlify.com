import Link from 'next/link'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { Container } from '@/components/Container'
import { navigation } from './Header'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary dark:hover:text-light"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-5 w-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6">
                <SocialLink
                  href="https://twitter.com/mintlify"
                  aria-label="Follow on Twitter"
                  icon={TwitterIcon}
                />
                <SocialLink
                  href="https://github.com/mintlify"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/company/mintsearch"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigation.map((nav) => (
                  <NavLink href={nav.href}>{nav.name}</NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Mintlify, Inc. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
