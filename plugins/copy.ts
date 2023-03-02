export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            copy: (text: any) => {
                navigator.clipboard.writeText(text).then(() => {
                    useToast('info', `Copied: ${text}`)
                });
            }
        }
    }
})
