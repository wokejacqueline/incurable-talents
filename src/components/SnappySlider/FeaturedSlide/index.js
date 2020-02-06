import * as React from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default function FeaturedSlide(props) {
  return (
    <div className={style.featuredSlide}>
      <Link to={props.link}>
        <div className={style.flex}>
          <div className={style.text}>
            <h2 className={style.title}>{props.title}</h2>
            <h3 className={style.subline}>{props.subline}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
