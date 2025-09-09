"use client";

import AuthPanel from "../components/AuthPanel";
import { useState } from "react";

export default function LoginPage() {
  const [authed, setAuthed] = useState(false);
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Вход</h1>
      <AuthPanel onAuthChange={setAuthed} />
      <div style={{ marginTop: 16, opacity: 0.8, fontSize: 14 }}>
        Статус: {authed ? "авторизован" : "не авторизован"}
      </div>
    </main>
  );
}
