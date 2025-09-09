import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";

type Product = {
  id: number;
  name: string;
  category: "fruits" | "vegetables";
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Banana", category: "fruits", price: 1.2 },
  { id: 2, name: "Apple", category: "fruits", price: 1.5 },
  { id: 3, name: "Carrot", category: "vegetables", price: 0.8 },
  { id: 4, name: "Tomato", category: "vegetables", price: 1.0 },
  { id: 5, name: "Watermelon", category: "fruits", price: 2.5 },
];

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userAgent = request.headers.get("user-agent");
  console.log("User-Agent:", userAgent);

  const authCookie = request.cookies.get("auth");
  if (!authCookie || authCookie.value !== "token123") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "X-Data-Source": "mock-db",
      },
    });
  }

  const url = new URL(request.url);
  const searchParams = url.searchParams;

  let result = [...products];

  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const name = searchParams.get("name");
  const sortBy = searchParams.get("sortBy");
  const order = (searchParams.get("order") || "asc").toLowerCase();

  if (category) {
    result = result.filter((p) => p.category === category);
  }
  if (minPrice) {
    const min = Number(minPrice);
    if (!Number.isNaN(min)) {
      result = result.filter((p) => p.price >= min);
    }
  }
  if (maxPrice) {
    const max = Number(maxPrice);
    if (!Number.isNaN(max)) {
      result = result.filter((p) => p.price <= max);
    }
  }
  if (name) {
    const needle = name.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(needle));
  }

  if (sortBy === "name" || sortBy === "price") {
    result.sort((a, b) => {
      const dir = order === "desc" ? -1 : 1;
      if (sortBy === "name") {
        return a.name.localeCompare(b.name) * dir;
      }
      return (a.price - b.price) * dir;
    });
  }

  if (result.length === 0) {
    // Use notFound() to trigger not-found.tsx
    notFound();
  }

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "X-Data-Source": "mock-db",
    },
  });
}

export async function POST(request: NextRequest) {
  // Require auth cookie
  const authCookie = request.cookies.get("auth");
  if (!authCookie || authCookie.value !== "token123") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, category, price } = body ?? {};
    if (
      !name ||
      (category !== "fruits" && category !== "vegetables") ||
      typeof price !== "number"
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const nextId = Math.max(...products.map((p) => p.id)) + 1;
    const created = { id: nextId, name, category, price } as Product;
    products.push(created);
    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
