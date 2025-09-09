"use client";

export default function ErrorUserModal({ error }: { error: Error }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 text-white flex items-center justify-center">
      Error: {error.message}
    </div>
  );
}
