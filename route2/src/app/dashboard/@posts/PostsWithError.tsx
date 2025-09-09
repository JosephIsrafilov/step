"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts(searchParams?: {
  [key: string]: string | string[] | undefined;
}): Promise<Post[]> {
  if (searchParams?.postsError === "1") {
    throw new Error("Failed to load posts");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default function PostsWithError({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPosts(searchParams);
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPosts();
  }, [searchParams, fetchPosts]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
        <div className="text-gray-500 text-sm">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-600 mb-2">Failed to load posts</div>
        <button
          onClick={fetchPosts}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border-b border-gray-200 pb-3 last:border-b-0"
        >
          <Link
            href={`/dashboard/posts/${post.id}`}
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
