export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const isLoading = useIsLoading();
    const token = useToken();
    const user = useUser();

    // interceptors
    const interceptors = {
        onRequest({ request, options }) {
            // Set the request headers
            isLoading.value = true;
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token.value}`
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
            isLoading.value = true;
        },
        onResponse({ request, response, options }) {
            // Process the response data
            isLoading.value = false;

            if (response._data.status && ['POST', 'PATCH', 'DELETE'].includes(options.method)) useToast('success', response._data.message);
            return response._data
        },
        onResponseError({ request, response, options }) {
            // Handle the response errors
            isLoading.value = false;

            useToast('error', response._data.message)

            if ([500].includes(response.status)) {
                useAuth().logout()
            }

            if (([403].includes(response.status) && !user.value.email_verified_at)) {
                navigateTo('verify-email');
            }
        }
    }

    return {
        provide: {
            get: async (url: string, data?: any) => {
                return await useFetch(config.public.baseURL + url, {
                    ...interceptors,
                    method: 'GET',
                    query: data,
                })
            },
            post: async (url: string, data?: any) => {
                return await useFetch(config.public.baseURL + url, {
                    ...interceptors,
                    method: 'POST',
                    body: data
                })
            },
            patch: async (url: string, data?: any) => {
                return await useFetch(config.public.baseURL + url, {
                    ...interceptors,
                    method: 'PATCH',
                    body: data
                })
            },
            delete: async (url: string, data?: any) => {
                return await useFetch(config.public.baseURL + url, {
                    ...interceptors,
                    method: 'DELETE',
                    body: data
                })
            }
        }
    }
})
