interface Params {
  params: { id: string };
}

export default async function UserDetailPage({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!res.ok) throw new Error("Failed to fetch user");
  const user: { id: number; name: string; email: string; phone: string } =
    await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
