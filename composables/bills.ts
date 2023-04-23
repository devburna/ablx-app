export const useBills = () => {
  const app = useNuxtApp();

  return {
    list: async (payload?: any) => {
      return await app.$get("/bills", payload);
    },
    validate: async (payload: any) => {
      return await app.$get("/bills/validate", payload);
    },
    create: async (payload: any) => {
      return await app.$post("/bills", payload);
    }
  }
}
