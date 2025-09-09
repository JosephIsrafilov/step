export default function TodosLoading() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="animate-pulse border-b border-gray-200 pb-3 last:border-b-0">
          <div className="flex items-start gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded border-2 mt-0.5 flex-shrink-0"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      ))}
      <div className="text-gray-500 text-sm">Loading todos...</div>
    </div>
  );
}
