import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/toast.css";

const useCustomToast = (type: string, message?: string) => {
  const config = {
    position: toast.POSITION.TOP_CENTER,
    className: "custom-toast-width",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
  };

  switch (type) {
    case "success":
      return toast.success(message, config);
    case "error":
      return toast.error(message, config);
    case "warning":
      return toast.warning(message, config);
    default:
      return toast(message, config);
  }
};

export default useCustomToast;
