"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "saturate(180%) blur(8px)",
        background: "rgba(11,18,32,0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#e5e7eb",
        }}
      >
        <Link href="/" style={{ fontWeight: 700, fontSize: 18 }}>
          Shop Admin
        </Link>
        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <Link href="/products">Продукты</Link>
          <Link href="/products/new">Добавить</Link>
          <Link href="/login">Войти</Link>
        </nav>
      </div>
    </header>
  );
}
