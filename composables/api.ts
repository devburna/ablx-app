export const useApi = () => {
  const config = useRuntimeConfig();
  const isLoading = useIsLoading();
  const token = useToken();

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
      if (response._data.status) useToast('success', response._data.message);

      return response._data
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
      useToast('error', response._data.message)
      isLoading.value = false;
    }
  }

  return {
    get: async (url: string, data?: any) => {
      return await useFetch(config.public.baseURL + url, {
        ...interceptors,
        method: 'get',
        query: data,
      })
    },
    post: async (url: string, data?: any) => {
      return await useFetch(config.public.baseURL + url, {
        ...interceptors,
        method: 'post',
        body: data
      })
    },
    patch: async (url: string, data?: any) => {
      return await useFetch(config.public.baseURL + url, {
        ...interceptors,
        method: 'patch',
        body: data
      })
    },
    delete: async (url: string) => {
      return await useFetch(config.public.baseURL + url, {
        ...interceptors,
        method: 'delete'
      })
    }
  }
}
