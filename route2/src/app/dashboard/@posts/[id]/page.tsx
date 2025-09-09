import PostWithError from './PostWithError';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  return <PostWithError postId={id} />;
}
