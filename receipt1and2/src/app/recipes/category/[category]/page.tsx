import { recipes, categories, type Category } from "@/lib/data";
import { notFound } from "next/navigation";
import RecipeCard from "@/components/RecipeCard";
import Breadcrumbs from "@/components/Breadcrumbs";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!categories.includes(category as Category)) {
    notFound();
  }

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === category
  );

  const categoryColors = {
    dessert: "from-pink-500 to-rose-500",
    soup: "from-orange-500 to-red-500",
    salad: "from-green-500 to-emerald-500",
    main: "from-blue-500 to-indigo-500",
  };

  const categoryColor =
    categoryColors[category as keyof typeof categoryColors] ||
    "from-gray-500 to-gray-600";

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Рецепты", href: "/recipes" },
            { label: category.charAt(0).toUpperCase() + category.slice(1) },
          ]}
        />
      </div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-6">
          <span
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${categoryColor} text-white shadow-lg mr-4`}
          >
            {category}
          </span>
          <span className="text-gray-600 font-medium">
            {filteredRecipes.length} рецептов
          </span>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Рецепты: {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Найдено {filteredRecipes.length} рецептов в категории &quot;{category}
          &quot;
        </p>
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Рецепты не найдены
          </h3>
          <p className="text-gray-500 text-lg">
            В этой категории пока нет рецептов.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <div
              key={recipe.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
