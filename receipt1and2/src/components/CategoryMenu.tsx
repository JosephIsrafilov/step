"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/data";

interface CategoryMenuProps {
  className?: string;
}

export default function CategoryMenu({ className = "" }: CategoryMenuProps) {
  const pathname = usePathname();

  const categoryColors = {
    dessert: "from-pink-500 to-rose-500",
    soup: "from-orange-500 to-red-500",
    salad: "from-green-500 to-emerald-500",
    main: "from-blue-500 to-indigo-500",
  };

  const isActiveCategory = (category: string) => {
    return pathname === `/recipes/category/${category}`;
  };

  const isAllRecipesActive = () => {
    return (
      pathname === "/recipes" &&
      !pathname.includes("/category/") &&
      !pathname.includes("/search")
    );
  };

  return (
    <div className={`flex flex-wrap justify-center gap-4 mb-8 ${className}`}>
      <Link
        href="/recipes"
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
          isAllRecipesActive()
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
            : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg"
        }`}
      >
        Все рецепты
      </Link>

      {categories.map((category) => {
        const categoryColor =
          categoryColors[category as keyof typeof categoryColors] ||
          "from-gray-500 to-gray-600";
        const isActive = isActiveCategory(category);

        return (
          <Link
            key={category}
            href={`/recipes/category/${category}`}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 capitalize ${
              isActive
                ? `bg-gradient-to-r ${categoryColor} text-white shadow-lg`
                : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}
