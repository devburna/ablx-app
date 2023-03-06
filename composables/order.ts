export const useOrder = () => {
  const app = useNuxtApp();
  const _orders = useOrders();

  return {
    all: async () => {
      await app.$get("/orders").then((res: any) => {
        if (res.data.value) {
          _orders.value = res.data.value.data;
        }
      });
    },
    create: async (payload: any) => {
      return await app.$post("/orders", payload);
    }
  }
}
