import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./layout.module.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const IntroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage1: file(relativePath: { eq: "incurable-woods-0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 680) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={style.introImageWrapper}>
      <Img fluid={data.placeholderImage1.childImageSharp.fluid} />
    </div>
  )
}

export default IntroImage
