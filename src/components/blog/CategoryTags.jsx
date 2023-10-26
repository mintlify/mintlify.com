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
    <div
      className={clsx(
        'shrink-0 cursor-pointer rounded-full border px-3 py-px text-xs font-medium transition',
        isSelected
          ? 'border-green-600/60 bg-green-100/80 text-green-900 dark:border-green-400/50 dark:bg-green-900/50 dark:text-green-200'
          : 'border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-500/20'
      )}
      onClick={onClick}
    >
      {title}
    </div>
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
