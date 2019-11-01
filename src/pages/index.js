import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CoverArt from "../components/CoverArt"
import style from "./index-styles.module.css"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.coverArtContainer}>
      <CoverArt />
    </div>
    <p>
      Incurable Talents is an original graphic novel written & illustrated by
      Jacqueline Matuszak.
    </p>
    <p>It is completely free to read online...enjoy.</p>
    <p>Part One: In The Dark</p>
    <div>
      <Link to="/1-the-black-forest/">1. The Black Forest</Link>
    </div>
    <div>
      <Link to="/2-shahzade/">2. Shahzade</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">3. (November 2019)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">4. (December 2019)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">5. (December 2019)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">6. (January 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">7. (January 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">8. (January 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">9. (February 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">10. (February 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">11. (February 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">12. (March 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">13. (March 2020)</Link>
    </div>
    <div>
      <Link to="/the-black-forest/">14. (April 2020)</Link>
    </div>
    <p>
      <Link to="/the-black-forest/">15. (April 2020)</Link>
    </p>
    <div>Part Two: Instinct</div>
    <p>Summer 2020</p>
  </Layout>
)

export default IndexPage
