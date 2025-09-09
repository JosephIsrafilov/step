import { Suspense } from "react";

export default function DashboardLayout({
  posts,
  users,
  todos,
}: {
  children: React.ReactNode;
  posts: React.ReactNode;
  users: React.ReactNode;
  todos: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Posts Slot */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Posts</h2>
            <Suspense
              fallback={<div className="text-gray-500">Loading posts...</div>}
            >
              {posts}
            </Suspense>
          </div>

          {/* Users Slot */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Users</h2>
            <Suspense
              fallback={<div className="text-gray-500">Loading users...</div>}
            >
              {users}
            </Suspense>
          </div>

          {/* Todos Slot */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Todos</h2>
            <Suspense
              fallback={<div className="text-gray-500">Loading todos...</div>}
            >
              {todos}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
