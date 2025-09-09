"use client";

import { useEffect, useState, useCallback } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function getPost(id: string): Promise<Post> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
}

async function getUser(userId: number): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export default function PostWithError({ postId }: { postId: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const postData = await getPost(postId);
      const userData = await getUser(postData.userId);

      setPost(postData);
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load post");
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [postId, fetchData]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>

        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>

        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="bg-gray-50 p-3 rounded">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <div className="text-gray-500 text-sm">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-600 mb-2">Failed to load post</div>
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!post || !user) {
    return <div className="text-center py-4 text-gray-500">Post not found</div>;
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Заголовок</h3>
        <p className="text-gray-700">{post.title}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Тело поста</h3>
        <p className="text-gray-700">{post.body}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Автор</h3>
        <div className="bg-gray-50 p-3 rounded">
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  );
}
