import React from "react"
import * as basicLightbox from 'basiclightbox'

class Lightbox extends React.Component {
  render() {
    const makeLightbox = (yt) => {
      if (typeof window === "undefined") {
        return null
      } else {
        return basicLightbox.create(`
          <div class="w-full max-w-screen-lg mx-auto">
          <div class="w-full embed-responsive aspect-ratio-16/9">
            <iframe 
              src="https://www.youtube.com/embed/${yt}?autoplay=1&mute=1" 
              width="1280" 
              height="720" 
              frameborder="0"
              class="embed-responsive-item"
            ></iframe>
          </div></div>
          `
        )
      }
    }
    const showLightbox = () => {
      if (typeof window === "undefined") {
        return
      } else {
        instance.show()
      }
    }
    const instance = makeLightbox(this.props.yt)
    return(
      <div
        onClick={ showLightbox } 
        className="cursor-pointer"
      >
        {this.props.children}
      </div>
    )
  }
}

export default Lightbox