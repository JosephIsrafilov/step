"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        background: "#180d0d",
        color: "#fee2e2",
      }}
    >
      <div
        style={{
          padding: "20px 22px",
          borderRadius: 12,
          background: "rgba(239, 68, 68, 0.08)",
          border: "1px solid rgba(239, 68, 68, 0.35)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          fontSize: 16,
        }}
      >
        Произошла ошибка при загрузке продуктов: {error.message}
      </div>
    </div>
  );
}
