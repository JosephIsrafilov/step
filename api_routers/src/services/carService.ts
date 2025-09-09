import { Car, CreateCarData, UpdateCarData } from "@/types/car";

const API_BASE_URL = "/api/cars";

export class CarService {
  static async getAllCars(): Promise<Car[]> {
    try {
      const response = await fetch(API_BASE_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.cars;
    } catch (error) {
      console.error("Ошибка при получении автомобилей:", error);
      throw error;
    }
  }

  static async getCarById(id: string): Promise<Car> {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Автомобиль не найден");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.car;
    } catch (error) {
      console.error(`Ошибка при получении автомобиля ${id}:`, error);
      throw error;
    }
  }

  static async createCar(carData: CreateCarData): Promise<Car> {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      return data.car;
    } catch (error) {
      console.error("Ошибка при создании автомобиля:", error);
      throw error;
    }
  }

  static async updateCar(id: string, carData: UpdateCarData): Promise<Car> {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Автомобиль не найден");
        }
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      return data.car;
    } catch (error) {
      console.error(`Ошибка при обновлении автомобиля ${id}:`, error);
      throw error;
    }
  }

  static async deleteCar(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Автомобиль не найден");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Ошибка при удалении автомобиля ${id}:`, error);
      throw error;
    }
  }
}
