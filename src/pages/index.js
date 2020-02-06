import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CoverArt from "../components/CoverArt"
import SnappySlider from "../components/SnappySlider"
import FeaturedSlide from "../components/SnappySlider/FeaturedSlide"
import style from "./index-styles.module.css"
import Image from "../components/image"
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
            link="/1-the-gokyo-ri/"
            title="1. The Gokyo Ri"
            subline="Lanoire"
          />
          <FeaturedSlide
            link="/2-the-black-forest/"
            title="2. The Black Forest"
            subline="Aubre"
          />
          <FeaturedSlide
            link="/3-shahzade/"
            title="3. Shahzade"
            subline="Elsavere"
          />
          <FeaturedSlide></FeaturedSlide>
        </SnappySlider>
      </div>
      <p>
        Incurable Talents is an original graphic novel written & illustrated by
        <a href="https://instagram.com/wokejacqueline">@wokejacqueline</a>
      </p>
      <p>It is free to read online...enjoy.</p>

      <div>Part Two: Instinct</div>
    </Layout>
  </div>
)

export default IndexPage
