export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        background: "#0f172a",
        color: "#cbd5e1",
      }}
    >
      <div
        style={{
          padding: "20px 22px",
          borderRadius: 12,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          fontSize: 16,
        }}
      >
        Продукты по заданным параметрам не найдены.
      </div>
    </div>
  );
}
