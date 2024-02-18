import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const redirectToPage = (page) => {
  let url;

  switch (page) {
    case "instagram":
      url = process.env.REACT_APP_INSTAGRAM_LINK;
      break;
    case "linkedin":
      url = process.env.REACT_APP_LINKEDIN_LINK;
      break;

    case "facebook":
      url = process.env.REACT_APP_FACEBOOK_LINK;
      break;

    default:
      return;
  }

  window.location.href = url;
};

export function toastInit(message, config, type) {
  return toast(message, {
    type: type,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    pauseOnFocusLoss: false,
    ...config,
  });
}

export const refreshPage = () => {
  window.location.reload(false);
};
