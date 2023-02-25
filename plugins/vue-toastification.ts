import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.use(Toast, {
        transition: "Vue-Toastification__slideBlurred",
        maxToasts: 1,
        newestOnTop: true,
        position: "top-right",
        timeout: 2000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
    });
})
