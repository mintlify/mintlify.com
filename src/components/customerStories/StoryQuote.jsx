export function StoryQuote({ quote, imgUrl, person }) {
  return (
    <div className="border-1 flex flex-col items-center gap-4 rounded-md border border-zinc-200 p-6 text-center">
      <div class="flex items-center justify-center">
        <div class="w-full rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-green-200 p-1">
          <img
            src={imgUrl}
            className="border-1 flex h-14 w-14 rounded-full border grayscale "
          />
        </div>
      </div>
      <span className="px-8 text-lg font-semibold text-zinc-800">
        "{quote}"
      </span>
      <span className="text-sm">{person}</span>
    </div>
  )
}
