export const useCustomer = () => {
  const app = useNuxtApp();
  const _customers = useCustomers();

  return {
    all: async () => {
      await app.$get("/users").then((res: any) => {
        if (res.data.value) {
          _customers.value = res.data.value.data;
        }
      });
    },
    create: async (payload: any) => {
      return await app.$post("/users", payload);
    }
  }
}
