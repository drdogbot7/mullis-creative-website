/**
 * Initialize Client Side Only JS
 */
import { addBackToTop } from "vanilla-back-to-top";

const initClient = () => {
  if (typeof window === "undefined") {
    return null
  } else {
    addBackToTop({
      backgroundColor: "#54565B",
    });
  }
}

export default initClient
