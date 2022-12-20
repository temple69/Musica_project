import React from 'react'
import styles from './chart.module.css'
import Heart from '../../assets/audio-icons/Heart.png'


const Chartlists = ({title,imgUrl,artist}) => {
return (
    <div className={styles.chart} >
      <div>
      <img src={imgUrl}alt={artist}/>
      <article className={styles.artist_detail}>
      <h3>{title}</h3>
      <h5>{artist}</h5>
        <p>1.29</p>
        </article>
      </div>
      <button><img src={Heart} alt="heart" /></button>
    </div>
  )
}

export default Chartlists