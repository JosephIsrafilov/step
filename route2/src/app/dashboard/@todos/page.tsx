import TodosWithError from './TodosWithError';

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TodosSlot({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  return <TodosWithError searchParams={params} />;
}
