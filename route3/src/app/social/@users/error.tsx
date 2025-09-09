"use client";

export default function ErrorUsers({ error }: { error: Error }) {
  return <div>Failed to load users: {error.message}</div>;
}
