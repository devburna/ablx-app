export const useAssets = () => {
  const app = useNuxtApp();

  return {
    assets: async (payload?: string) => {
      return await app.$get("/assets", payload);
    },
    asset: async (payload?: string) => {
      return await app.$get(`/assets/${payload}`);
    }
  }
}
