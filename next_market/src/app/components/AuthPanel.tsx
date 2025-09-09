"use client";

import { useState } from "react";
import { apiLogin, apiLogout } from "@/lib/api";

export default function AuthPanel({
  onAuthChange,
}: {
  onAuthChange: (authed: boolean) => void;
}) {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("1234");
  const [loading, setLoading] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      await apiLogin(username, password);
      setIsAuthed(true);
      onAuthChange(true);
    } catch (e) {
      alert("Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await apiLogout();
    setIsAuthed(false);
    onAuthChange(false);
  }

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
        Авторизация
      </h2>
      <div style={{ display: "grid", gap: 10 }}>
        <label>
          <div style={{ opacity: 0.8, fontSize: 14 }}>Логин</div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <div style={{ opacity: 0.8, fontSize: 14 }}>Пароль</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#16a34a",
              color: "white",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Войти
          </button>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "#dc2626",
              color: "white",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Выйти
          </button>
        </div>
        <div style={{ fontSize: 14, opacity: 0.8 }}>
          Статус: {isAuthed ? "авторизован" : "не авторизован"}
        </div>
      </div>
    </div>
  );
}
