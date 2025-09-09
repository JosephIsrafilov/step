import Modal from "../../../_components/Modal";

interface Params {
  params: { id: string };
}

export default async function UserModalPage({ params }: Params) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!res.ok) throw new Error("Failed to fetch user");
  const user: { id: number; name: string; email: string; phone: string } =
    await res.json();

  return (
    <Modal>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
        <div className="text-gray-700 text-sm">
          <div>
            <span className="font-medium">Email:</span> {user.email}
          </div>
          <div>
            <span className="font-medium">Phone:</span> {user.phone}
          </div>
        </div>
      </div>
    </Modal>
  );
}
