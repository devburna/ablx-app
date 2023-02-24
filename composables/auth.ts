export const useAuth = () => {
  const token = useToken();
  const user = useUser();

  return {
    register: async (payload: any) => {
      await useApi().post("/register", payload).then((res: any) => {
        token.value = res.data.value.data.token;
        localStorage.setItem('token', token.value)

        user.value = res.data.value.data.user;
        navigateTo('/home')
      });
    },
    login: async (payload: any) => {
      await useApi().post("/login", payload).then((res: any) => {
        token.value = res.data.value.data.token;
        localStorage.setItem('token', token.value)

        user.value = res.data.value.data.user;

        navigateTo('/home')
      });
    },
    me: async () => {
      await useApi().get("/me").then((res: any) => {
        user.value = res.data.value.data;
      });
    },
    emailVerificationRequest: async (payload: any) => {
      await useApi().get("/verify-email", payload);
    },
    verifyEmailVerificationCode: async (payload: any) => {
      await useApi().post("/verify-email", payload).then((res: any) => {

        user.value = res.data.value.data;
      });
    },
    logout: async () => {
      user.value = null;
      localStorage.clear()
      return navigateTo('/login');
    },
  }
}
