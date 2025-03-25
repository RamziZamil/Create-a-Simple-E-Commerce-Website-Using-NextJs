export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="relative w-full h-64 mb-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="flex items-center mt-2 mb-6">
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          <div className="ml-4 h-6 w-1/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
