/**
 * Initialize Client Side Only JS
 */
import { addBackToTop } from "vanilla-back-to-top";
import BigPicture from 'bigpicture';

const initClient = () => {
  if (typeof window === "undefined") {
    return null
  } else {
    addBackToTop({
      backgroundColor: "#54565B",
    });
    if ( document.querySelector('.js-yt-lightbox') ) {
      const ytLightboxes = document.querySelectorAll('.js-yt-lightbox');
      ytLightboxes.forEach(el => {
        el.addEventListener('click', e => {
          BigPicture({
            el: e.currentTarget,
            ytSrc: e.currentTarget.dataset.yt,
          });
        });
      });
    }
  }
}

export default initClient
