import React from "react"
import style from "./styles.module.css"
export default ({ children }) => (
  <div className={style.container}>
    <div className={style.titleContainer}>
      <img
        src="https://incurable.s3.amazonaws.com/incurable-cover-layer-2.png"
        classname={style.layer2}
      />
      <div className={style.title}>
        <div>
          <i>In The</i>
        </div>
        <span className={style.big}>
          <b>Dark</b>
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
