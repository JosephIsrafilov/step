import PostsWithError from "./PostsWithError";

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PostsSlot({ searchParams }: PageProps) {
  const params = await searchParams;
  return <PostsWithError searchParams={params} />;
}
