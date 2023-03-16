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
    },
    update: async (payload: any) => {
      if (payload.status) {
        if (!confirm(`You are making this order as ${payload.status}, proceed?`)) {
          return;
        }
      }

      return await app.$patch(`/orders/${payload.id}`, payload).then(async (res: any) => {
        if (res.data.value) {
          await useOrder().all()
        }
      });
    }
  }
}
