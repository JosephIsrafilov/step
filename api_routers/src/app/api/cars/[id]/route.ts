import { NextRequest, NextResponse } from "next/server";
import { Car, UpdateCarData } from "@/types/car";

let cars: Car[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Белый",
    price: 25000,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    year: 2022,
    color: "Серебристый",
    price: 22000,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const car = cars.find((c) => c.id === params.id);

    if (!car) {
      return NextResponse.json(
        { error: "Автомобиль не найден" },
        { status: 404 }
      );
    }

    return NextResponse.json({ car }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при получении автомобиля" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body: UpdateCarData = await request.json();
    const carIndex = cars.findIndex((c) => c.id === params.id);

    if (carIndex === -1) {
      return NextResponse.json(
        { error: "Автомобиль не найден" },
        { status: 404 }
      );
    }

    const updatedCar: Car = {
      ...cars[carIndex],
      ...body,
      updatedAt: new Date(),
    };

    cars[carIndex] = updatedCar;

    return NextResponse.json({ car: updatedCar }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при обновлении автомобиля" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const carIndex = cars.findIndex((c) => c.id === params.id);

    if (carIndex === -1) {
      return NextResponse.json(
        { error: "Автомобиль не найден" },
        { status: 404 }
      );
    }

    const deletedCar = cars[carIndex];
    cars.splice(carIndex, 1);

    return NextResponse.json(
      { message: "Автомобиль успешно удален", car: deletedCar },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при удалении автомобиля" },
      { status: 500 }
    );
  }
}
