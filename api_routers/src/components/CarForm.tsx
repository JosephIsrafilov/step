"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Car, CreateCarData, UpdateCarData } from "@/types/car";

interface CarFormProps {
  car?: Car;
  onSubmit: (data: CreateCarData | UpdateCarData) => Promise<void>;
  isEditing?: boolean;
}

export default function CarForm({
  car,
  onSubmit,
  isEditing = false,
}: CarFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateCarData>({
    brand: "",
    model: "",
    year: new Date().getFullYear(),
    color: "",
    price: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (car && isEditing) {
      setFormData({
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color,
        price: car.price,
      });
    }
  }, [car, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "year" || name === "price" ? Number(value) : value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(formData);
      if (!isEditing) {
        router.push("/cars");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="modern-card p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-white">
              {isEditing ? "✏️" : "🚗"}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {isEditing
              ? "Редактировать автомобиль"
              : "Добавить новый автомобиль"}
          </h2>
          <p className="text-slate-600">
            {isEditing
              ? "Внесите изменения в информацию об автомобиле"
              : "Заполните форму ниже, чтобы добавить новый автомобиль в ваш автопарк"}
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-destructive font-medium">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label
                htmlFor="brand"
                className="block text-sm font-semibold text-slate-700"
              >
                Марка *
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="modern-input w-full px-4 py-3"
                placeholder="Например: Toyota"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="model"
                className="block text-sm font-semibold text-slate-700"
              >
                Модель *
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="modern-input w-full px-4 py-3"
                placeholder="Например: Camry"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="year"
                className="block text-sm font-semibold text-slate-700"
              >
                Год выпуска *
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                min="1900"
                max={new Date().getFullYear() + 1}
                disabled={isSubmitting}
                className="modern-input w-full px-4 py-3"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="color"
                className="block text-sm font-semibold text-slate-700"
              >
                Цвет *
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="modern-input w-full px-4 py-3"
                placeholder="Например: Белый"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-semibold text-slate-700"
              >
                Цена (USD) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                  $
                </span>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="100"
                  disabled={isSubmitting}
                  className="modern-input w-full pl-12 pr-4 py-3"
                  placeholder="Например: 25000"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="modern-button modern-button-primary flex-1 py-4 px-8 text-lg"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                  {isEditing ? "Сохранение..." : "Добавление..."}
                </>
              ) : (
                <>
                  <span className="text-xl">{isEditing ? "💾" : "➕"}</span>
                  {isEditing ? "Сохранить изменения" : "Добавить автомобиль"}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="modern-button modern-button-secondary flex-1 py-4 px-8 text-lg"
            >
              <span className="text-xl">❌</span>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
