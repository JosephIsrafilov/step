interface Params {
  params: { id: string };
}

export default async function PostDetailPage({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const post: { id: number; title: string; body: string } = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
