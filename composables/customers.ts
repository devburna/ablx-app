export const useCustomers = () => {
  const app = useNuxtApp();

  return {
    list: async (payload?: any) => {
      return await app.$get("/users", payload)
    },
    create: async (payload: any) => {
      return await app.$post("/users", payload);
    }
  }
}
