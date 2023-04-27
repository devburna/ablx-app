export const useTransactions = () => {
  const app = useNuxtApp();

  return {
    list: async (payload?: any) => {
      return await app.$get("/transactions", payload);
    },
    update: async (payload: any) => {
      if (payload.status) {
        if (!confirm(`You are making this transaction as ${payload.status}, proceed?`)) {
          return;
        }
      }

      const id = payload.id;
      delete (payload.id);

      return await app.$patch(`/transactions/${id}`, payload).then(async (res: any) => {
        if (res.data.value) {
          await useTransactions().list()
        }
      });
    }
  }
}
