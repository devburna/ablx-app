export const useTrader = () => {
  const _trade = useTrade();

  return {
    assets: async () => {
      await useApi().get("/assets").then((res: any) => {
        if (res.data.value) {
          _trade.value = res.data.value.data;
        }
      });
    }
  }
}
