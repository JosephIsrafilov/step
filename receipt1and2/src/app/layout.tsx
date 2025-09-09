import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Сайт с рецептами",
  description: "Коллекция вкусных рецептов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        <header className="gradient-header sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link
                href="/recipes"
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300 animate-pulse-slow"
              >
                🍳 Кулинарная Книга
              </Link>
              <nav className="flex space-x-8">
                <Link
                  href="/recipes"
                  className="relative text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/50 backdrop-blur-sm"
                >
                  Все рецепты
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/recipes/search"
                  className="relative text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/50 backdrop-blur-sm"
                >
                  Поиск
                </Link>
                <div className="relative group">
                  <button className="relative text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/50 backdrop-blur-sm">
                    Категории
                    <svg
                      className="w-4 h-4 ml-1 inline transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-56 glass rounded-xl shadow-modern py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/recipes/category/${category}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-purple-600 hover:bg-white/30 transition-all duration-200 capitalize"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-fade-in-up">{children}</div>
        </main>

        <footer className="gradient-header mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-gray-600 font-medium">
                &copy; 2024 Кулинарная Книга. Все права защищены.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Создано с ❤️ для любителей готовить
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
