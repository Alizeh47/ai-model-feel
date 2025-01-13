export default function ProductLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4" />
          <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4" />
          <div className="h-24 bg-gray-200 animate-pulse rounded" />
          <div className="h-10 bg-gray-200 animate-pulse rounded w-1/3" />
        </div>
      </div>
    </main>
  )
} 