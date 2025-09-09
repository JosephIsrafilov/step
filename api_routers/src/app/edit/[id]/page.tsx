"use client";

import { useCar } from "@/context/CarContext";
import CarForm from "@/components/CarForm";
import { UpdateCarData } from "@/types/car";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Car } from "@/types/car";

interface EditCarPageProps {
  params: {
    id: string;
  };
}

export default function EditCarPage({ params }: EditCarPageProps) {
  const { getCar, updateCar } = useCar();
  const router = useRouter();
  const [car, setCar] = useState<Car | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCar = getCar(params.id);
    if (foundCar) {
      setCar(foundCar);
    } else {
      router.push("/cars");
    }
    setLoading(false);
  }, [params.id, getCar, router]);

  const handleSubmit = async (data: UpdateCarData) => {
    if (car) {
      await updateCar(car.id, data);
      router.push("/cars");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Загрузка автомобиля...
            </h3>
            <p className="text-slate-600">
              Пожалуйста, подождите, пока загружаются данные
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!car) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Редактировать автомобиль
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Внесите изменения в информацию об автомобиле{" "}
            <span className="font-semibold text-gradient">
              {car.brand} {car.model}
            </span>
          </p>
        </div>

        <CarForm car={car} onSubmit={handleSubmit} isEditing={true} />
      </div>
    </div>
  );
}
