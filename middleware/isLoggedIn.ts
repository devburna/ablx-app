export default defineNuxtRouteMiddleware((to, from) => {
    const token = useToken();
    const user = useUser();

    if (!token.value) {
        return useAuth().logout()
    } else {
        if (!user.value) {
            useAccount().me()
        }
    };
})
