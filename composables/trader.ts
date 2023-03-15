export const useTrader = () => {
  const app = useNuxtApp();
  const _trade = useTrade();

  return {
    assets: async (payload?: string) => {
      await app.$get("/assets", payload).then((res: any) => {
        if (res.data.value) {
          _trade.value = res.data.value.data;
        }
      });
    },
    asset: async (payload?: string) => {
      return await app.$get(`/assets/${payload}`);
    }
  }
}
