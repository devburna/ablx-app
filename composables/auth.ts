export const useAuth = () => {
  const userToken = useToken();
  const user = useUser();

  const grantAccess = (data: any) => {
    const { token, user } = data;

    userToken.value = token;
    localStorage.setItem('token', token)
    user.value = user;
    navigateTo('/home')
  }

  return {
    register: async (payload: any) => {
      await useApi().post("/register", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    login: async (payload: any) => {
      await useApi().post("/login", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    recover: async (payload: any) => {
      await useApi().post("/recover", payload).then((res: any) => {
        if (res.data.value) {
          grantAccess(res.data.value.data);
        }
      });
    },
    me: async () => {
      await useApi().get("/me").then((res: any) => {
        if (res.data.value) {
          user.value = res.data.value.data;

          if (!user.value.email_verified_at) {
            navigateTo('verify-email');
          }
        }
      });
    },
    emailVerificationRequest: async () => {
      await useApi().get("/verify-email");
    },
    verifyEmailVerificationCode: async (payload: any) => {
      await useApi().post("/verify-email", payload).then((res: any) => {
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
