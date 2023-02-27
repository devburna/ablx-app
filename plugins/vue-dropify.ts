import VueDropify from 'vue-dropify';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('vue-dropify', VueDropify)
})
