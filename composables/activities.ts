export const useActivities = () => {
  const activities = useActivity();

  if (!activities.value.length) {
    useApi().get("/activities").then((res: any) => {
      if (res.data.value) {
        activities.value = res.data.value.data;
      }
    });
  }
}
