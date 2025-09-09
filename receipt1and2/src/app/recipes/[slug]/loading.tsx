export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Breadcrumbs skeleton */}
      <div className="flex space-x-3">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-4"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>

      {/* Main content skeleton */}
      <div className="gradient-card rounded-3xl shadow-modern p-10">
        <div className="mb-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="h-10 bg-gray-200 rounded mb-4 w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded-full w-20 ml-6"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ingredients skeleton */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-3 h-3 bg-gray-200 rounded-full mr-4"></div>
                  <div className="h-5 bg-gray-200 rounded w-40"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps skeleton */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <div className="h-6 bg-gray-200 rounded w-48"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-6"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="h-12 bg-gray-200 rounded-xl w-48"></div>
        </div>
      </div>
    </div>
  );
}
