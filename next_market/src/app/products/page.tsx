"use client";

import { useCallback, useEffect, useState } from "react";
import FiltersPanel from "../components/FiltersPanel";
import ProductGrid from "../components/ProductGrid";
import { Filters, Product } from "@/lib/types";
import { apiGetProducts } from "@/lib/api";

export default function ProductsPage() {
  const [filters, setFilters] = useState<Filters>({ order: "asc" });
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const json = await apiGetProducts(filters);
      setData(json);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Неизвестная ошибка";
      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <main style={{ maxWidth: 1200, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Продукты
      </h1>
      <FiltersPanel
        value={filters}
        onChange={setFilters}
        onSubmit={loadProducts}
        loading={loading}
      />
      <section style={{ marginTop: 20 }}>
        {loading && <div>Загрузка...</div>}
        {error && <div style={{ color: "#fca5a5" }}>{error}</div>}
        <ProductGrid products={data} />
      </section>
    </main>
  );
}
