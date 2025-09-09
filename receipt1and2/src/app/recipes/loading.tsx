export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="h-12 bg-gray-200 rounded mb-4 w-96 mx-auto"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Categories skeleton */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-12 bg-gray-200 rounded-xl w-24"></div>
        ))}
      </div>

      {/* Recipes grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="gradient-card rounded-2xl shadow-modern p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            </div>

            <div className="h-4 bg-gray-200 rounded mb-6 w-full"></div>

            <div className="flex items-center justify-between">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded-xl w-24"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer skeleton */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
