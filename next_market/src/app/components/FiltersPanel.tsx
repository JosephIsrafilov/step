"use client";

import { Filters } from "@/lib/types";

export default function FiltersPanel({
  value,
  onChange,
  onSubmit,
  loading,
}: {
  value: Filters;
  onChange: (f: Filters) => void;
  onSubmit: () => void;
  loading?: boolean;
}) {
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 14,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
        Фильтры
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Категория</div>
          <select
            value={value.category ?? ""}
            onChange={(e) => onChange({ ...value, category: e.target.value })}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          >
            <option value="">—</option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
          </select>
        </label>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Имя</div>
          <input
            value={value.name ?? ""}
            onChange={(e) => onChange({ ...value, name: e.target.value })}
            placeholder="например, ba"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          />
        </label>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Мин. цена</div>
          <input
            value={value.minPrice ?? ""}
            onChange={(e) => onChange({ ...value, minPrice: e.target.value })}
            placeholder="1.0"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          />
        </label>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Макс. цена</div>
          <input
            value={value.maxPrice ?? ""}
            onChange={(e) => onChange({ ...value, maxPrice: e.target.value })}
            placeholder="2.0"
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          />
        </label>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Сортировка</div>
          <select
            value={value.sortBy ?? ""}
            onChange={(e) => onChange({ ...value, sortBy: e.target.value })}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          >
            <option value="">—</option>
            <option value="name">name</option>
            <option value="price">price</option>
          </select>
        </label>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Порядок</div>
          <select
            value={value.order ?? "asc"}
            onChange={(e) => onChange({ ...value, order: e.target.value })}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "inherit",
              fontSize: 16,
            }}
          >
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop: 14 }}>
        <button
          onClick={onSubmit}
          disabled={loading}
          style={{
            padding: "12px 14px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Обновить список
        </button>
      </div>
    </div>
  );
}
