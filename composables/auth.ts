export const useAuth = () => {
  const _token = useToken();
  const _user = useUser();
  const app = useNuxtApp();

  const grantAccess = (data: any) => {
    const { token, user } = data;

    localStorage.setItem('token', token)

    _token.value = token;
    _user.value = user;
    
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
      await app.$post("/", payload).then((res: any) => {
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
          _user.value = res.data.value.data;
          navigateTo('/home')
        }
      });
    },
    logout: async () => {
      _token.value = null;
      localStorage.clear()
      return navigateTo('/');
    },
  }
}
