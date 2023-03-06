export const useAuth = () => {
  const userToken = useToken();
  const user = useUser();
  const app = useNuxtApp();

  const grantAccess = (data: any) => {
    const { token, user } = data;

    userToken.value = token;
    localStorage.setItem('token', token)
    user.value = user;
    navigateTo('/home')
  }

  return {
    register: async (payload: any) => {
      await app.$post("/register", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    login: async (payload: any) => {
      await app.$post("/login", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    recover: async (payload: any) => {
      await app.$post("/recover", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    emailVerificationRequest: async () => {
      await app.$get("/verify-email");
    },
    verifyEmailVerificationCode: async (payload: any) => {
      await app.$post("/verify-email", payload).then((res: any) => {
        if (res.data.value) {
          user.value = res.data.value.data;
          navigateTo('/home')
        }
      });
    },
    logout: async () => {
      user.value = null;
      localStorage.clear()
      return navigateTo('/login');
    },
  }
}
