import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  const users: { id: number; name: string }[] = await res.json();

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-3">Users</h2>
      <ul className="grid gap-2">
        {users.map((u) => (
          <li key={u.id}>
            <Link
              href={`/social/user/${u.id}`}
              className="block px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 hover:bg-white hover:shadow-sm hover:border-gray-300 transition"
            >
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
