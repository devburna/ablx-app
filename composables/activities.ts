export const useActivities = () => {
  const activities = useActivity();

  useApi().get("/activities").then((res: any) => {
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
          amount: Number(activity.amount).toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          }),
          status: activity.status,
          created_at: activity.created_at
        }

        _activities.push(activity);
      });

      activities.value = _activities;
    }
  });
}
