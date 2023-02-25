import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

export default defineNuxtPlugin((nuxtApp) => {


    return {
        provide: {
            timeAgo: (date: any) => {
                // Create formatter (English).
                const timeAgo = new TimeAgo('en-NG')

                return timeAgo.format(new Date(date))
            }
        }
    }


})
