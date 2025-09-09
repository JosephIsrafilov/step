"use client";

import { useCar } from "@/context/CarContext";
import CarCard from "@/components/CarCard";
import Link from "next/link";

export default function CarsPage() {
  const { state, deleteCar, refreshCars } = useCar();
  const { cars, loading, error } = state;

  const handleDelete = async (id: string) => {
    await deleteCar(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Управление автопарком
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Просматривайте, редактируйте и управляйте всеми автомобилями в вашем
            автопарке
          </p>
        </div>

        <div className="modern-card p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-gradient mb-2">
                {loading ? "..." : cars.length}
              </div>
              <div className="text-slate-600 font-medium">
                Всего автомобилей в автопарке
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={refreshCars}
                disabled={loading}
                className="modern-button modern-button-secondary px-6 py-3"
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Обновление...
                  </div>
                ) : (
                  <>
                    <span className="text-lg">🔄</span>
                    Обновить
                  </>
                )}
              </button>

              <Link
                href="/add"
                className="modern-button modern-button-primary px-6 py-3"
              >
                <span className="text-lg">➕</span>
                Добавить автомобиль
              </Link>
            </div>
          </div>
        </div>

        {error && (
          <div className="modern-card p-6 border-l-4 border-destructive mb-8 animate-fade-in">
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
        )}

        {loading ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Загрузка автомобилей...
            </h3>
            <p className="text-slate-600">
              Пожалуйста, подождите, пока загружаются данные
            </p>
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-6xl">🚗</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Пока нет автомобилей
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
              Начните с добавления первого автомобиля в ваш автопарк. Это займет
              всего несколько минут!
            </p>
            <Link
              href="/add"
              className="modern-button modern-button-primary text-lg py-4 px-8 inline-flex"
            >
              <span className="text-2xl mr-3">➕</span>
              Добавить первый автомобиль
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} onDelete={handleDelete} />
            ))}
          </div>
        )}

        {cars.length > 0 && (
          <div className="text-center mt-16 animate-fade-in">
            <div className="modern-card p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Хотите добавить еще один автомобиль?
              </h3>
              <p className="text-blue-100 mb-6">
                Расширяйте ваш автопарк и увеличивайте прибыль
              </p>
              <Link
                href="/add"
                className="modern-button modern-button-secondary text-lg py-3 px-6 hover:scale-105 transition-transform duration-200"
              >
                <span className="text-xl mr-2">🚀</span>
                Добавить автомобиль
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
