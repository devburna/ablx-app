export const useAuth = () => {
  const _token = useToken();
  const _user = useUser();
  const app = useNuxtApp();

  const grantAccess = (data: any) => {
    const { token, user } = data;

    localStorage.setItem('token', token)

    _token.value = token;
    _user.value = user;

    if (!user.email_verified_at) {
      navigateTo('/verify-email')
    }

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
      await app.$get("/verify-email").then((res: any) => {
        if (res.data.value) {
          const { message } = res.data.value

          useToast('success', message)
        }
      });
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
      return navigateTo('/login');
    },
  }
}
