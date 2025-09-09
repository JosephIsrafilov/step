"use client";

import { useState } from "react";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("fruits");
  const [price, setPrice] = useState("1.0");
  const [msg, setMsg] = useState<string | null>(null);

  async function submit() {
    setMsg(null);
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, price: parseFloat(price) }),
    });
    if (res.ok) setMsg("Продукт добавлен");
    else if (res.status === 401) setMsg("Нет доступа. Войдите.");
    else setMsg("Ошибка добавления");
  }

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Добавить продукт
      </h1>
      <div
        style={{
          padding: 20,
          borderRadius: 14,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div style={{ display: "grid", gap: 12 }}>
          <label>
            <div style={{ opacity: 0.8, fontSize: 14 }}>Название</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "inherit",
              }}
            />
          </label>
          <label>
            <div style={{ opacity: 0.8, fontSize: 14 }}>Категория</div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "inherit",
              }}
            >
              <option value="fruits">fruits</option>
              <option value="vegetables">vegetables</option>
            </select>
          </label>
          <label>
            <div style={{ opacity: 0.8, fontSize: 14 }}>Цена</div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "inherit",
              }}
            />
          </label>
          <div>
            <button
              onClick={submit}
              style={{
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "#16a34a",
                color: "white",
              }}
            >
              Добавить
            </button>
          </div>
          {msg && <div style={{ marginTop: 6 }}>{msg}</div>}
        </div>
      </div>
    </main>
  );
}
