import { NextRequest, NextResponse } from "next/server";
import { Car, CreateCarData } from "@/types/car";

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

export async function GET() {
  try {
    return NextResponse.json({ cars }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при получении автомобилей" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateCarData = await request.json();

    if (
      !body.brand ||
      !body.model ||
      !body.year ||
      !body.color ||
      !body.price
    ) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }

    const newCar: Car = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    cars.push(newCar);

    return NextResponse.json({ car: newCar }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при создании автомобиля" },
      { status: 500 }
    );
  }
}
