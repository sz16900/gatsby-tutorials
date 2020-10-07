import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../../images/image-1.jpg"
import Image from "gatsby-image"
// Dont ever forget to checkut the fragments in the docs gatsby-image

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <articles className="single-image">
        <h3>basic images</h3>
        <img src={img} width="100%" />
      </articles>
      <articles className="single-image">
        <h3>fixed images/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </articles>
      <articles className="single-image">
        <h3>fluid images/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </articles>
    </section>
  )
}

export default Images
