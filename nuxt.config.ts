// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
            title: 'ABLX',
            meta: [
                { name: 'description', content: 'Making trading easy and stress-less. Trade your digital currency and redeem your cards with us for the fastest payment, in minutes.' },
                {
                    name: 'theme-color',
                    content: '#00468b'
                }
            ],
            link: [
                {
                    rel: 'digitalAssetLinks',
                    href: '/assetlinks.json'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
                    integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
                    integrity: 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4',
                    crossorigin: 'anonymous',
                    body: true,
                },
            ]
        },
        rootId: 'devburna',
        pageTransition: {
            name: 'fade',
            mode: 'out-in'
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in'
        }
    },

    router: {
        options: {
            linkActiveClass: 'active-class-link',
            linkExactActiveClass: 'exact-active-class-link',
        }
    },

    css: ['@/assets/css/spinkit.min.css', '@/assets/css/dropify.css', '@/assets/css/main.css'],

    // buildModules: [
    //     '@nuxtjs/pwa',
    // ],
    // pwa: {
    //     icon: false // disables the icon module
    // }

    runtimeConfig: {
        apiKey: process.env.APP_KEY,
        public: {
            baseURL: process.env.APP_URL
        },
    },

    sourcemap: {
        server: false,
        client: false
    }
})
