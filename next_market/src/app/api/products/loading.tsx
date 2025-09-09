export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        background: "#0b1220",
        color: "#e5e7eb",
      }}
    >
      <div
        style={{
          padding: "24px 28px",
          borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          fontSize: 18,
        }}
      >
        <span role="img" aria-label="loading" style={{ marginRight: 10 }}>
          ⏳
        </span>
        Загрузка продуктов...
      </div>
    </div>
  );
}
