"use client";

export default function ErrorPostModal({ error }: { error: Error }) {
  return <div>Failed to load post: {error.message}</div>;
}
