"use client";

import { useState } from "react";
import { Car } from "@/types/car";
import Link from "next/link";

interface CarCardProps {
  car: Car;
  onDelete: (id: string) => Promise<void>;
}

export default function CarCard({ car, onDelete }: CarCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm("Вы уверены, что хотите удалить этот автомобиль?")) {
      setIsDeleting(true);
      try {
        await onDelete(car.id);
      } catch (error) {
        console.error("Ошибка при удалении:", error);
        alert("Ошибка при удалении автомобиля");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="modern-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-gradient transition-colors duration-200">
            {car.brand} {car.model}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-slate-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {car.year}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {car.color}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gradient mb-1">
            ${car.price.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500">USD</div>
        </div>
      </div>

      <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
        <span className="text-2xl">🚗</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 rounded-xl p-3">
          <div className="text-xs text-slate-500 mb-1">Год выпуска</div>
          <div className="font-semibold text-slate-900">{car.year}</div>
        </div>
        <div className="bg-slate-50 rounded-xl p-3">
          <div className="text-xs text-slate-500 mb-1">Цвет</div>
          <div className="font-semibold text-slate-900">{car.color}</div>
        </div>
      </div>

      <div className="flex space-x-3 mb-4">
        <Link
          href={`/edit/${car.id}`}
          className="modern-button modern-button-primary flex-1 py-3 px-4 text-center"
        >
          <span className="text-lg mr-2">✏️</span>
          Редактировать
        </Link>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="modern-button modern-button-destructive flex-1 py-3 px-4 flex items-center justify-center"
        >
          {isDeleting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              Удаление...
            </>
          ) : (
            <>
              <span className="text-lg mr-2">🗑️</span>
              Удалить
            </>
          )}
        </button>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
              Создано: {car.createdAt.toLocaleDateString("ru-RU")}
            </span>
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
            Обновлено: {car.updatedAt.toLocaleDateString("ru-RU")}
          </div>
        </div>
      </div>
    </div>
  );
}
