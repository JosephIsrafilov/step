import { Filters, Product } from "./types";

export async function apiLogin(
  username: string,
  password: string
): Promise<void> {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error("Неверные данные");
}

export async function apiLogout(): Promise<void> {
  await fetch("/api/logout", { method: "POST" });
}

export function buildQuery(filters: Filters): string {
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.minPrice) params.set("minPrice", filters.minPrice);
  if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
  if (filters.name) params.set("name", filters.name);
  if (filters.sortBy) params.set("sortBy", filters.sortBy);
  if (filters.order) params.set("order", filters.order);
  const s = params.toString();
  return s ? `?${s}` : "";
}

export async function apiGetProducts(filters: Filters): Promise<Product[]> {
  const res = await fetch(`/api/products${buildQuery(filters)}`);
  if (!res.ok) {
    if (res.status === 401) throw new Error("Нет доступа. Войдите.");
    throw new Error("Ошибка загрузки продуктов");
  }
  return (await res.json()) as Product[];
}
