export const useTransactions = () => {
  const app = useNuxtApp();

  return {
    list: async (payload?: any) => {
      return await app.$get("/transactions", payload);
    },
  }
}
