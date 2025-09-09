"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-xl w-full max-w-xl shadow-xl ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div className="text-sm font-medium text-gray-900">Details</div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-sm text-gray-700 h-8 px-3"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
