export const useActivities = () => {
  const activities = useActivity();
  const app = useNuxtApp();

  app.$get("/activities").then((res: any) => {
    if (res.data.value) {
      const _activities: any = [];

      res.data.value.data.forEach((activity: any) => {
        activity = {
          ...activity,
          id: activity.id,
          channel: activity.kind,
          narration: ["Order"].includes(activity.kind)
            ? activity.rate.asset.name
            : activity.narration,
          status: activity.status,
        }

        _activities.push(activity);
      });

      activities.value = _activities;
    }
  });
}
