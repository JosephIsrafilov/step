'use client';

import { useEffect } from 'react';

export default function PostsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Posts error:', error);
  }, [error]);

  return (
    <div className="text-center py-4">
      <div className="text-red-600 mb-2">Failed to load posts</div>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
