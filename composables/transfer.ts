export const useTransfer = () => {
  const app = useNuxtApp();
  const _transfer = useBanks();

  return {
    banks: async (payload: any) => {
      await app.$get("/transfer", payload).then((res: any) => {
        if (res.data.value) {
          _transfer.value = res.data.value.data;
        }
      });
    },
    validate: async (payload: any) => {
      return await app.$get("/transfer/validate", payload);
    },
    create: async (payload: any) => {
      return await app.$post("/transfer", payload);
    }
  }
}
