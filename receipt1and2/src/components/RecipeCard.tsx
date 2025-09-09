import Link from "next/link";
import { Recipe } from "@/lib/data";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const categoryColors = {
    dessert: "from-pink-500 to-rose-500",
    soup: "from-orange-500 to-red-500",
    salad: "from-green-500 to-emerald-500",
    main: "from-blue-500 to-indigo-500",
  };

  const categoryColor =
    categoryColors[recipe.category as keyof typeof categoryColors] ||
    "from-gray-500 to-gray-600";

  return (
    <div className="group gradient-card rounded-2xl shadow-modern shadow-hover overflow-hidden border border-white/20">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-3">
            {recipe.title}
          </h3>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColor} text-white shadow-lg`}
          >
            {recipe.category}
          </span>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-2 text-base leading-relaxed">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500 font-medium">
              {recipe.ingredients.length} ингредиентов
            </span>
          </div>

          <Link
            href={`/recipes/${recipe.slug}`}
            className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Подробнее
            <svg
              className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
