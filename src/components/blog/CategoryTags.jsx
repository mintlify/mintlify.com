import clsx from 'clsx'
const CATEGORIES = [
  'All',
  'Featured',
  'Product',
  'About',
  'Developer Experience',
]

function Tag({ title, onClick, isSelected }) {
  return (
    <button
      aria-label="Category tags"
      className={clsx(
        'shrink-0 cursor-pointer rounded-full border px-3 py-px text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-green-400/50 ',
        isSelected
          ? 'border-green-600/60 bg-green-100/80 text-green-900 dark:border-green-400/50 dark:bg-green-900/50 dark:text-green-200'
          : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/80 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-500/20'
      )}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export function CategoryTags({ setCategory, selectedCategory }) {
  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {CATEGORIES.map((category) => (
        <Tag
          title={category}
          key={category}
          isSelected={selectedCategory === category}
          onClick={() => setCategory(category)}
        />
      ))}
    </div>
  )
}
