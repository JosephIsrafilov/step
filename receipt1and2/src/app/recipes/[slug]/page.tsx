import { recipes } from "@/lib/data";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  const categoryColors = {
    dessert: "from-pink-500 to-rose-500",
    soup: "from-orange-500 to-red-500",
    salad: "from-green-500 to-emerald-500",
    main: "from-blue-500 to-indigo-500",
  };

  const categoryColor =
    categoryColors[recipe.category as keyof typeof categoryColors] ||
    "from-gray-500 to-gray-600";

  // Искусственно добавляем ошибку для демонстрации error.tsx
  if (slug === "error-demo") {
    throw new Error("Демонстрационная ошибка для тестирования error.tsx");
  }

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <Breadcrumbs
          items={[
            { label: "Рецепты", href: "/recipes" },
            { label: recipe.title },
          ]}
        />
      </div>

      <div className="gradient-card rounded-3xl shadow-modern p-10">
        <div className="mb-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {recipe.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {recipe.description}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${categoryColor} text-white shadow-lg ml-6`}
            >
              {recipe.category}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Ингредиенты</h2>
            </div>
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center group">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg text-gray-700 font-medium">
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 19 16.5 19c-1.746 0-3.332-.477-4.5-1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Шаги приготовления
              </h2>
            </div>
            <ol className="space-y-6">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-gray-700 leading-relaxed">
                      {step}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/recipes"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Назад к рецептам
          </Link>
        </div>
      </div>
    </div>
  );
}
