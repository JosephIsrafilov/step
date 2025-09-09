"use client";

import { Product } from "@/lib/types";

export default function ProductGrid({
  products,
}: {
  products: Product[] | null;
}) {
  if (!products || products.length === 0) {
    return <div style={{ opacity: 0.8 }}>Нет данных</div>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 16,
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            padding: 14,
            borderRadius: 12,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 20 }}>{p.name}</div>
          <div style={{ opacity: 0.85, fontSize: 14 }}>{p.category}</div>
          <div style={{ marginTop: 10, fontSize: 18 }}>
            {p.price.toFixed(2)}$
          </div>
        </div>
      ))}
    </div>
  );
}
