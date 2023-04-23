export const useOrders = () => {
  const app = useNuxtApp();

  return {
    list: async (payload?: any) => {
      return await app.$get("/orders", payload);
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

      const id = payload.id;
      delete (payload.id);
      
      return await app.$patch(`/orders/${id}`, payload).then(async (res: any) => {
        if (res.data.value) {
          await useOrders().list()
        }
      });
    }
  }
}
