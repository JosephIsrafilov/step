import type { ReactNode } from "react";

export default function SocialLayout({
  children,
  users,
  posts,
  modal,
}: {
  children: ReactNode;
  users: ReactNode;
  posts: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Social</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6">
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            {users}
          </section>
          <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            {posts}
          </section>
        </div>
        {children}
        {modal}
      </div>
    </div>
  );
}
