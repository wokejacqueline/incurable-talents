import * as React from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default function FeaturedSlide(props) {
  return (
    <div className={style.featuredSlide}>
      <div className={`${props.disabled ? style.disabled : ""}`}></div>
      <Link to={props.link}>
        <div className={style.container}>
          <h2 className={style.title}>{props.title}</h2>
          <h3 className={style.subline}>
            <span>{props.pov}</span>
            <span>{props.size}</span>
          </h3>
          <div className={style.description}>{props.description}</div>
          <div className={style.button}>{props.button}</div>
        </div>
      </Link>
    </div>
  )
}
