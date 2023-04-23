export const useTransfer = () => {
  const app = useNuxtApp();

  return {
    banks: async (payload?: any) => {
      return await app.$get("/transfer", payload)
    },
    validate: async (payload: any) => {
      return await app.$get("/transfer/validate", payload);
    },
    create: async (payload: any) => {
      return await app.$post("/transfer", payload);
    }
  }
}
