import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/lightbox"

const IndexPage = props => (
  <Layout>
    <SEO title="Mullis Creative" />
    <main id="content">
      <section id="welcome" className="container">
        <div className="md:flex -mx-4 py-32 items-center">
          <div className="md:w-1/2 lg:w-1/3 px-4">
            <Img
              fluid={props.data.headshot.childImageSharp.fluid}
              alt="headshot"
              className="w-full h-auto rounded-full"
              width="100"
              height="100"
            />
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
            <Lightbox yt="fDQMiDTFzU4">
              <Img 
                alt="test" 
                className="w-full h-auto" 
                fluid={props.data.thatsTasty.childImageSharp.fluid}
              />
            </Lightbox>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <Lightbox yt="2NctNbEjyOI">
              <Img 
                className="w-full h-auto" 
                fluid={props.data.worldviewSolutions.childImageSharp.fluid}
              />
            </Lightbox>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <Lightbox yt="fmGgGiSP3co">
              <Img 
                className="w-full h-auto" 
                fluid={props.data.evanWilliamsCatering.childImageSharp.fluid}
              />
            </Lightbox>
          </div>
          <div className="w-1/2 lg:w-1/3 p-4">
            <Lightbox yt="2NctNbEjyOI">
              <Img 
                className="w-full h-auto" 
                fluid={props.data.peoplesTax.childImageSharp.fluid}
              />
            </Lightbox>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "jeremy-mullis-headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    peoplesTax: file(relativePath: { eq: "peoples-tax-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    thatsTasty: file(relativePath: { eq: "thats-tasty-screenshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    evanWilliamsCatering: file(relativePath: { eq: "evan-williams-catering-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worldviewSolutions: file(relativePath: { eq: "worldview-solutions-screenshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
