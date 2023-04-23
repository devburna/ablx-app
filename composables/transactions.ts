export const useTransactions = () => {
  const app = useNuxtApp();

  return {
    list: async () => {
      return await app.$get("/transactions");
    },
  }
}
