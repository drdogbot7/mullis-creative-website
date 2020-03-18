import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import headshot from "../images/jeremy-mullis-headshot.jpg"
import peoplesTax from "../images/peoples-tax-screenshot.png"
// import shenandoahGrowers from "../images/shenandoah-growers-screenshot.png"
import thatsTasty from "../images/thats-tasty-screenshot.jpg"
import evanWilliamsCatering from "../images/evan-williams-catering-screenshot.png"
import worldViewSolutions from "../images/worldview-solutions-screenshot.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Mullis Creative" />
    <main id="content">
      <section id="welcome" className="container">
        <div className="md:flex -mx-4 py-32 items-center">
          <div className="md:w-1/2 lg:w-1/3 px-4">
            <img src={ headshot } alt="headshot" className="w-full h-auto rounded-full" width="100" height="100" />
          </div>
          <div className="md:w-1/2 lg:w-2/3 px-4">
            <p className="font-alt text-4xl font-display">Oh, Hey.</p>
            <p className="text-lg">I'm Jeremy Mullis. I've been building websites since forever and designing stuff even longer. I specialize in graphic design, front-end development and Wordpress consulting. I am really cool and nice, and I promise I won't rip you off. Learn more about what I do, and check out some of my work below.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-alt text-4xl font-display">Custom Wordpress Sites</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/2 lg:w-1/3 p-4">
            <div className="js-yt-lightbox cursor-pointer" data-yt="fDQMiDTFzU4">
              <img alt="test" className="w-full h-auto" src={thatsTasty} />
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <div className="js-yt-lightbox cursor-pointer" data-yt="2NctNbEjyOI">
              <img alt="test" className="w-full h-auto" src={worldViewSolutions} />
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <div className="js-yt-lightbox cursor-pointer" data-yt="fmGgGiSP3co">
              <img alt="test" className="w-full h-auto" src={evanWilliamsCatering} />
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <div className="js-yt-lightbox cursor-pointer" data-yt="2NctNbEjyOI">
              <img alt="test" className="w-full h-auto" src={peoplesTax} />
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default IndexPage
