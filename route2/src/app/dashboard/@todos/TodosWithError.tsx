"use client";

import { useEffect, useState, useCallback } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

async function getTodos(searchParams?: {
  [key: string]: string | string[] | undefined;
}): Promise<Todo[]> {
  if (searchParams?.todosError === "1") {
    throw new Error("Failed to load todos");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todos = await response.json();
  return todos.slice(0, 10);
}

export default function TodosWithError({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTodos(searchParams);
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load todos");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchTodos();
  }, [searchParams, fetchTodos]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse border-b border-gray-200 pb-3 last:border-b-0"
          >
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

  if (error) {
    return (
      <div className="text-center py-4">
        <div className="text-red-600 mb-2">Failed to load todos</div>
        <button
          onClick={fetchTodos}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-b border-gray-200 pb-3 last:border-b-0"
        >
          <div className="flex items-start gap-2">
            <div
              className={`w-4 h-4 rounded border-2 mt-0.5 flex-shrink-0 ${
                todo.completed
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300"
              }`}
            >
              {todo.completed && (
                <svg
                  className="w-full h-full text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                todo.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {todo.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
