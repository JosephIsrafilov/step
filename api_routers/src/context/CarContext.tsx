"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { Car, CreateCarData, UpdateCarData } from "@/types/car";
import { CarService } from "@/services/carService";

interface CarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}

type CarAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_CARS"; payload: Car[] }
  | { type: "ADD_CAR"; payload: Car }
  | { type: "UPDATE_CAR"; payload: Car }
  | { type: "DELETE_CAR"; payload: string };

const initialState: CarState = {
  cars: [],
  loading: false,
  error: null,
};

function carReducer(state: CarState, action: CarAction): CarState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_CARS":
      return { ...state, cars: action.payload };
    case "ADD_CAR":
      return { ...state, cars: [...state.cars, action.payload] };
    case "UPDATE_CAR":
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload.id ? action.payload : car
        ),
      };
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
}

interface CarContextType {
  state: CarState;
  addCar: (carData: CreateCarData) => Promise<void>;
  updateCar: (id: string, carData: UpdateCarData) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;
  getCar: (id: string) => Car | undefined;
  refreshCars: () => Promise<void>;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(carReducer, initialState);

  useEffect(() => {
    refreshCars();
  }, []);

  const refreshCars = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      const cars = await CarService.getAllCars();
      dispatch({ type: "SET_CARS", payload: cars });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Ошибка загрузки",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const addCar = async (carData: CreateCarData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      const newCar = await CarService.createCar(carData);
      dispatch({ type: "ADD_CAR", payload: newCar });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Ошибка создания",
      });
      throw error;
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const updateCar = async (id: string, carData: UpdateCarData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      const updatedCar = await CarService.updateCar(id, carData);
      dispatch({ type: "UPDATE_CAR", payload: updatedCar });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Ошибка обновления",
      });
      throw error;
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const deleteCar = async (id: string) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      await CarService.deleteCar(id);
      dispatch({ type: "DELETE_CAR", payload: id });
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: error instanceof Error ? error.message : "Ошибка удаления",
      });
      throw error;
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const getCar = (id: string) => {
    return state.cars.find((car) => car.id === id);
  };

  const value: CarContextType = {
    state,
    addCar,
    updateCar,
    deleteCar,
    getCar,
    refreshCars,
  };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
}

export function useCar() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error("useCar must be used within a CarProvider");
  }
  return context;
}
