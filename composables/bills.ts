export const useBills = () => {
  const app = useNuxtApp();
  const _billTypes = useBillTypes();

  return {
    all: async () => {
      await app.$get("/bills").then((res: any) => {
        if (res.data.value) {
          _billTypes.value = res.data.value.data;
        }
      });
    },
    validate: async (payload: any) => {
      return await app.$get("/bills/validate", payload);
    },
    create: async (payload: any) => {
      return await app.$post("/bills", payload);
    }
  }
}
