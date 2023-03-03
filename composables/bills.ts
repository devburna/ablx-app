export const useBills = () => {
  const _billTypes = useBillTypes();

  return {
    all: async () => {
      await useApi().get("/bills").then((res: any) => {
        if (res.data.value) {
          _billTypes.value = res.data.value.data;
        }
      });
    },
    validate: async (payload: any) => {
      return await useApi().get("/bills/validate", payload);
    },
    create: async (payload: any) => {
      return await useApi().post("/bills", payload);
    }
  }
}
