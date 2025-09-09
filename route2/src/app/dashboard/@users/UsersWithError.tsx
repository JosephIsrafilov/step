"use client";

import { useEffect, useState, useCallback } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

async function getUsers(searchParams?: {
  [key: string]: string | string[] | undefined;
}): Promise<User[]> {
  if (searchParams?.usersError === "1") {
    throw new Error("Failed to load users");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export default function UsersWithError({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getUsers(searchParams);
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load users");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchUsers();
  }, [searchParams, fetchUsers]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse border-b border-gray-200 pb-3 last:border-b-0"
          >
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
        <div className="text-gray-500 text-sm">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-600 mb-2">Failed to load users</div>
        <button
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="border-b border-gray-200 pb-3 last:border-b-0"
        >
          <div className="font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-600">@{user.username}</div>
          <div className="text-xs text-gray-500">{user.email}</div>
        </div>
      ))}
    </div>
  );
}
