"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "#e5e7eb",
        padding: 40,
        fontSize: 16,
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>
          Продуктовый API — Демо UI
        </h1>

        <section style={{ display: "grid", gap: 12 }}>
          <p style={{ opacity: 0.8 }}>Демо админ-панели. Навигация:</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/login" style={{ color: "#93c5fd" }}>
              Вход
            </Link>
            <Link href="/products" style={{ color: "#93c5fd" }}>
              Список продуктов
            </Link>
            <Link href="/products/new" style={{ color: "#93c5fd" }}>
              Добавить продукт
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
