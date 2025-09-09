import Modal from "../../../_components/Modal";

interface Params {
  params: { id: string };
}

export default async function PostModalPage({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!res.ok) throw new Error("Failed to fetch post");
  const post: { id: number; title: string; body: string } = await res.json();

  return (
    <Modal>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
        <p className="text-gray-700 text-sm leading-6">{post.body}</p>
      </div>
    </Modal>
  );
}
