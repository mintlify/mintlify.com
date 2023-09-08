export function StoryQuote({ quote, person, imgUrl }) {
  return (
    <div className="relative flex py-2 space-x-8">
      <div className="rounded-full w-2 bg-primary"></div>
      <div className="py-2">
        <div className="text-lg dark:text-zinc-100">
          {quote}
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <img className="h-6 w-6" src={imgUrl} />
          <div>
            {person}
          </div>
        </div>
      </div>
    </div>
  )
}