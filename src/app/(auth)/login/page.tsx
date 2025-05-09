import { googleStorageClient } from '@/lib/google-storage.client';

export default async function LoginPage() {
  const buckets = await googleStorageClient.getBuckets();

  return <div>Login {JSON.stringify(buckets || {})}</div>;
}
