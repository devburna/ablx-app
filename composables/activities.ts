export const useActivities = () => {
  const activities = useActivity();
  const app = useNuxtApp();

  app.$get("/activities").then((res: any) => {
    if (res.data.value) {
      const { data } = res.data.value;

      data.orders.forEach((order: any) => {
        order = {
          id: order.id,
          channel: order.kind,
          narration: ["Order"].includes(order.kind)
            ? order.rate.asset.name
            : order.narration,
          status: order.status,
          ...order,
        }

        data.orders.push(order);
      });

      activities.value = data
    }
  });
}
