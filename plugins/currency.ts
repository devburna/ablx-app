export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            currency: (value: any, currency: string) => {
                return Number(value).toLocaleString(`en-${currency.slice(0, 2)}`, {
                    style: 'currency',
                    currency: currency
                })
            }
        }
    }
})
