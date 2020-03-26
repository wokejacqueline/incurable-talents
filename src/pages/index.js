import React from "react"
import Layout from "../components/layout"
import CoverArt from "../components/CoverArt"
import SnappySlider from "../components/SnappySlider"
import FeaturedSlide from "../components/SnappySlider/FeaturedSlide"
import style from "./index-styles.module.scss"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className={style.containerPage}>
    <Layout>
      <SEO title="Home" />
      <div className={style.coverArtContainer}>
        <CoverArt />
      </div>
      <div className={style.snappySliderWrapper}>
        <SnappySlider>
          <FeaturedSlide
            button="Read Chapter"
            description="Tired of a life of duty and responsibility, Lanoire goes hunting in the Gokyo Ri."
            link="/1-the-gokyo-ri/"
            pov="Lanoire"
            size="11.25 mb / 18 min read"
            title="1. The Gokyo Ri"
          />
          <FeaturedSlide
            disabled
            button="Coming Soon"
            description=""
            link="/2-animalkind/"
            pov="Aubre"
            size="195 kb / 21 min read"
            title="2. Animalkind"
          />
          <FeaturedSlide
            disabled
            button="Coming Soon"
            description="The commander of the Honour Guard travels to Natans to see the beasts for himself."
            link="/3-strange-fruit/"
            pov="Elsavere"
            size="200 kb / 19 min read"
            title="3. Strange Fruit"
          />
        </SnappySlider>
      </div>
    </Layout>
  </div>
)

export default IndexPage
