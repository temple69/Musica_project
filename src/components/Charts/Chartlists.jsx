import React from 'react'
import styles from './chart.module.css'


const Chartlists = ({title,imgUrl,artist}) => {
return (
    <div className={styles.chart} >
      
      <div>
      <img src={imgUrl}alt={artist}/>
      <article>
      <h3>{title}</h3>
      <h5>{artist}</h5>
        <p>1.29</p>
        </article>
      </div>
      <button>+</button>
    </div>
  )
}

export default Chartlists