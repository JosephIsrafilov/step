"use client";

import { useCar } from "@/context/CarContext";
import CarForm from "@/components/CarForm";
import { CreateCarData, UpdateCarData } from "@/types/car";

export default function AddCarPage() {
  const { addCar } = useCar();

  const handleSubmit = async (data: CreateCarData | UpdateCarData) => {
    if (
      "brand" in data &&
      "model" in data &&
      "year" in data &&
      "color" in data &&
      "price" in data
    ) {
      await addCar(data as CreateCarData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Добавить новый автомобиль
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Заполните форму ниже, чтобы добавить новый автомобиль в ваш
            автопарк. Все поля обязательны для заполнения.
          </p>
        </div>

        <CarForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
