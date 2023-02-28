export const useOrder = () => {
  const _orders = useOrders();

  return {
    all: async () => {
      await useApi().get("/orders").then((res: any) => {
        if (res.data.value) {
          _orders.value = res.data.value.data;
        }
      });
    },
    create: async (payload: any) => {
      return await useApi().post("/orders", payload);
    }
  }
}
