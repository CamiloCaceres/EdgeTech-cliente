import PocketBase from "pocketbase";

export const usePocketBase = () => {
  const config = useRuntimeConfig();
  const pb = new PocketBase(config.public.POCKET_BASE_URL as string);
  pb.autoCancellation(false);

  const user = pb.authStore;

  const login = async (email: string, password: string) => {
    await pb.collection("users").authWithPassword(email, password);
  };
  return { pb, user, login };
};
