export const useTrader = () => {
  const app = useNuxtApp();
  const _trade = useTrade();

  return {
    assets: async () => {
      await app.get("/assets").then((res: any) => {
        if (res.data.value) {
          _trade.value = res.data.value.data;
        }
      });
    }
  }
}
