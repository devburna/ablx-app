export const useAccount = () => {
  const app = useNuxtApp();
  const _user = useUser();

  return {
    me: async () => {
      await app.$get("/me").then((res: any) => {
        if (res.data.value) {
          _user.value = res.data.value.data;

          if (!_user.value.email_verified_at) {
            navigateTo('verify-email');
          }
        }
      });
    },
    profile: async (payload: any) => {
      await app.$patch("/me/profile", payload).then((res: any) => {
        if (res.data.value) {
          _user.value = res.data.value.data;
        }
      });
    },
    password: async (payload: any) => {
      await app.$patch("/me/password", payload).then((res: any) => {
        if (res.data.value) {
          _user.value = res.data.value.data;
        }
      });
    }
  }
}
