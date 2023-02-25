export const useAuth = () => {
  const token = useToken();
  const user = useUser();

  return {
    register: async (payload: any) => {
      await useApi().post("/register", payload).then((res: any) => {
        if (res.data.value) {
          token.value = res.data.value.data.token;
          localStorage.setItem('token', token.value)

          user.value = res.data.value.data.user;
          navigateTo('/home')
        }
      });
    },
    login: async (payload: any) => {
      await useApi().post("/login", payload).then((res: any) => {
        if (res.data.value) {

          token.value = res.data.value.data.token;
          localStorage.setItem('token', token.value)

          user.value = res.data.value.data.user;

          navigateTo('/home')
        }
      });
    },
    recover: async (payload: any) => {
      await useApi().post("/recover", payload).then((res: any) => {
        if (res.data.value) {

          token.value = res.data.value.data.token;
          localStorage.setItem('token', token.value)

          user.value = res.data.value.data.user;

          navigateTo('/home')
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
