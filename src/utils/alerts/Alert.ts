
import localization from "../../../localizationConfig";
import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";

const ALERT_TIMER = 2000;
const ALERT_WIDTH = 250;

const showAlert = (
  text: string,
  title: string,
  icon: SweetAlertIcon,
  options?: Partial<SweetAlertOptions>
) => {
  const alertOptions: SweetAlertOptions = {
    position: "center",
    icon,
    title,
    text,
    showConfirmButton: false,
    timer: ALERT_TIMER,
    width: ALERT_WIDTH,
    customClass: {
      title: "text-center", 
    },
  };

  Swal.fire({
    ...alertOptions,
    ...options,
  });
};

export const showSuccessAlert = (
  text: string,
  title?: string,
  options?: Partial<SweetAlertOptions>
) => showAlert(text, title ?? localization.success, "success", options);

export const showFailureAlert = (
  text: string,
  title?: string,
  options?: Partial<SweetAlertOptions>
) => showAlert(text, title ?? localization.failure, "error", options);
