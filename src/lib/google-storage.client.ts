import { Storage } from '@google-cloud/storage';

const { GCP_PROJECT_ID, GCP_CLIENT_EMAIL, GCP_PRIVATE_KEY } = process.env;

export const googleStorageClient = new Storage({
  projectId: GCP_PROJECT_ID,
  credentials: {
    client_email: GCP_CLIENT_EMAIL,
    private_key: GCP_PRIVATE_KEY,
  },
});
