import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-12 sm:mt-24">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-xl text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      <div className="mt-8 sm:mt-14">{children}</div>
    </Container>
  )
}
