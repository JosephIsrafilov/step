import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const posts: { id: number; title: string }[] = await res.json();

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-3">Posts</h2>
      <ul className="grid gap-2">
        {posts.slice(0, 50).map((p) => (
          <li key={p.id}>
            <Link
              href={`/social/post/${p.id}`}
              className="block px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 hover:bg-white hover:shadow-sm hover:border-gray-300 transition"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
