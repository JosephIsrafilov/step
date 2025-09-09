"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Главная", icon: "🏠" },
    { href: "/cars", label: "Автомобили", icon: "🚗" },
    { href: "/add", label: "Добавить авто", icon: "➕" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-200">
              🚗
            </div>
            <div>
              <div className="text-xl font-bold text-gradient">АвтоПродажа</div>
              <div className="text-xs text-muted-foreground">
                Управление автопарком
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                    : "text-muted-foreground hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
