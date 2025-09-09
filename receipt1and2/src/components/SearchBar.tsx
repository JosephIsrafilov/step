"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({
  className = "",
  placeholder = "Поиск рецептов...",
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSearch = (searchQuery: string) => {
    startTransition(() => {
      if (searchQuery.trim()) {
        router.push(
          `/recipes/search?query=${encodeURIComponent(searchQuery.trim())}`
        );
      } else {
        router.push("/recipes/search");
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Debounced search - поиск при вводе с задержкой
    const timeoutId = setTimeout(() => {
      if (value.trim()) {
        handleSearch(value);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          disabled={isPending}
        />

        {isPending && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </form>
  );
}
