export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCarData {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

export interface UpdateCarData extends Partial<CreateCarData> {}
