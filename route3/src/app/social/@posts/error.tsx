"use client";

export default function ErrorPosts({ error }: { error: Error }) {
  return <div>Failed to load posts: {error.message}</div>;
}
