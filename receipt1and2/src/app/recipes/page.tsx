import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";
import CategoryMenu from "@/components/CategoryMenu";

export default function RecipesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Вкусные рецепты
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Откройте для себя новые кулинарные шедевры и создавайте незабываемые
          блюда
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </div>

      {/* Категории */}
      <CategoryMenu />

      {/* Рецепты */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center space-x-2 text-gray-500">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">
            Всего рецептов: {recipes.length}
          </span>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
