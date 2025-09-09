"use client";

import { useCar } from "@/context/CarContext";
import Link from "next/link";

export default function HomePage() {
  const { state, refreshCars } = useCar();
  const { cars, loading, error } = state;

  const totalCars = cars.length;
  const totalValue = cars.reduce((sum, car) => sum + car.price, 0);
  const averagePrice = totalCars > 0 ? Math.round(totalValue / totalCars) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Добро пожаловать в{" "}
              <span className="text-gradient">АвтоПродажа</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Управляйте вашим автопарком с легкостью. Добавляйте, редактируйте
              и удаляйте автомобили с помощью нашего интуитивного интерфейса.
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 animate-fade-in">
          <div className="modern-card p-6 border-l-4 border-destructive">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-destructive"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-destructive font-medium">{error}</p>
              </div>
              <button
                onClick={refreshCars}
                className="text-destructive hover:text-destructive/80 underline text-sm"
              >
                Попробовать снова
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="modern-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              {loading ? (
                <div className="animate-pulse bg-slate-200 h-12 w-20 rounded mx-auto"></div>
              ) : (
                totalCars
              )}
            </div>
            <div className="text-slate-600 font-medium">Всего автомобилей</div>
          </div>

          <div className="modern-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              {loading ? (
                <div className="animate-pulse bg-slate-200 h-12 w-32 rounded mx-auto"></div>
              ) : (
                `$${totalValue.toLocaleString()}`
              )}
            </div>
            <div className="text-slate-600 font-medium">Общая стоимость</div>
          </div>

          <div className="modern-card p-8 text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              {loading ? (
                <div className="animate-pulse bg-slate-200 h-12 w-24 rounded mx-auto"></div>
              ) : (
                `$${averagePrice.toLocaleString()}`
              )}
            </div>
            <div className="text-slate-600 font-medium">Средняя цена</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="modern-card p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Быстрые действия
            </h2>
            <div className="space-y-4">
              <Link
                href="/add"
                className="modern-button modern-button-primary w-full py-4 px-6 text-lg"
              >
                <span className="text-2xl">➕</span>
                Добавить новый автомобиль
              </Link>
              <Link
                href="/cars"
                className="modern-button modern-button-success w-full py-4 px-6 text-lg"
              >
                <span className="text-2xl">🚗</span>
                Просмотреть все автомобили
              </Link>
            </div>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Последние добавления
            </h2>
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-16 bg-slate-200 rounded-lg"></div>
                  </div>
                ))}
              </div>
            ) : cars.length > 0 ? (
              <div className="space-y-4">
                {cars
                  .slice(-3)
                  .reverse()
                  .map((car) => (
                    <div
                      key={car.id}
                      className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-900">
                            {car.brand} {car.model}
                          </div>
                          <div className="text-sm text-slate-600">
                            {car.year} • {car.color}
                          </div>
                        </div>
                        <div className="text-xl font-bold text-gradient">
                          ${car.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">
                  Пока нет автомобилей
                </h3>
                <p className="text-slate-600 mb-6">
                  Начните с добавления первого автомобиля в ваш автопарк
                </p>
                <Link
                  href="/add"
                  className="modern-button modern-button-primary inline-flex"
                >
                  <span className="text-xl">➕</span>
                  Добавить первый автомобиль
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="modern-card p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Начните прямо сейчас
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Создайте свой первый автомобиль и начните управлять автопарком
            </p>
            <Link
              href="/add"
              className="modern-button modern-button-secondary text-lg py-4 px-8 hover:scale-105 transition-transform duration-200"
            >
              <span className="text-xl">🚀</span>
              Добавить автомобиль
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
