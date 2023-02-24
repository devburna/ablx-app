import { useToast as useAlert } from "vue-toastification";

export const useToast = (type: string, message: string) => {
  const toast = useAlert();
  toast[type](message);
}
