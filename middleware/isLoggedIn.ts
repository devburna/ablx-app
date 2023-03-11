export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useToken();
    const user = useUser();

    if (!token.value) {
        return useAuth().logout()
    } else {
        if (!user.value) {
            await useAccount().me()
        }
    };
})
