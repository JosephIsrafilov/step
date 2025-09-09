import UsersWithError from './UsersWithError';

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function UsersSlot({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  return <UsersWithError searchParams={params} />;
}
