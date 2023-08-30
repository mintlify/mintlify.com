import clsx from 'clsx'
const CATEGORIES = ['All', 'Featured', 'Product', 'About', 'Developer Experience']

function Tag({ title, onClick, isSelected }) {
  return (
    <div
      className={clsx(
        'cursor-pointer rounded-md border px-3 py-px text-xs hover:bg-zinc-50',
        isSelected ? 'border-green-700 text-green-800' : 'border-zinc-200'
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export function CategoryTags({ setCategory, selectedCategory }) {
  return (
    <div className="mt-8 flex gap-2">
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
