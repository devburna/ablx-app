export const useTransfer = () => {
  const _transfer = useBanks();

  return {
    banks: async (payload: any) => {
      await useApi().get("/transfer", payload).then((res: any) => {
        if (res.data.value) {
          _transfer.value = res.data.value.data;
        }
      });
    },
    validate: async (payload: any) => {
      return await useApi().get("/transfer/validate", payload);
    },
    create: async (payload: any) => {
      return await useApi().post("/transfer", payload);
    }
  }
}
