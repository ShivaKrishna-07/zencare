import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66ab72b90036f5253cf5")
  .setKey(
    "243eaaa8a2007885622c4507bfeabc1e8631e74e78ddc228ee0c71ce9e061552f0ddcf0cbedfe659f74d17aac1b8800948ab2ac4582e368afe4f864308750e1543aa74e757cd3d531b69e1c581e8fe42765e8e3aa8e28a95abe112420a38cd635e0540c442da37ebdad77be087454f7edb258e2814b48c8975478405450fad5f"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
