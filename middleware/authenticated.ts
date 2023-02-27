export default defineNuxtRouteMiddleware((to, from) => {
    const token = useToken();

    if (token.value) {
        useAccount().me()
        return navigateTo('/home')
    }
})
