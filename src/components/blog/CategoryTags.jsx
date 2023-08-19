import clsx from 'clsx'
const CATEGORIES = ['Featured', 'Product', 'About', 'Developer Experience']

function Tag({ title, onClick, isSelected }) {
  return (
    <div
      className={clsx(
        'cursor-pointer rounded-md border border-zinc-200 px-2 py-1 text-xs hover:bg-zinc-100',
        isSelected ? 'bg-zinc-100' : ''
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export function CategoryTags({ setCategory, selectedCategory }) {
  return (
    <div className="mt-6 flex gap-2">
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
