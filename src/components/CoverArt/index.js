import React from "react"
import style from "./styles.module.scss"
export default ({ children }) => (
  <div className={style.container}>
    <div className={style.titleContainer}>
      <img
        src="httsps://incurable.s3.amazonaws.com/incurable-cover-layer-2.png"
        classname={style.layer2}
      />
      <div className={style.title}>
        <div>
          <i>In The</i>
        </div>
        <span className={style.big}>
          <strong>Dark</strong>
          <img
            className={style.layer}
            src="https://incurable.s3.amazonaws.com/incurable-cover-layer1.png"
          />
        </span>
        {children}
      </div>
    </div>
  </div>
)
