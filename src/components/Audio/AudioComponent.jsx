import React from 'react'
import './audio.css'
import BsShuffle from 'react-icons/bs'
import TbRepeatOnce from 'react-icons/tb'
import next from '../../assets/audio-icons/next.png'
import previous from '../../assets/audio-icons/previous.png'
import shuffle from '../../assets/audio-icons/shuffle.png'
import play from '../../assets/audio-icons/Vector.png'
import volumeup from '../../assets/audio-icons/volume-high.png'
import repeat from '../../assets/audio-icons/repeate-one.png'


const AudioComponent = () => {
  return (
     <section className='audio_container'>
      <div>
        <img src="" alt="" srcset="" />
        <article>
          <h2>PAPER</h2>
        <p>JERIQ</p>
       </article>
        </div>
        <div className='controls-container'>
       <article className='controls' >
        <button className='transparent'><img src={shuffle} alt="shuffle" /></button>
        <button className='transparent'><img src={previous} alt="next" /></button>
        <button className='yellow-bg'> <img src={play} alt="next" /></button>
        <button className='transparent'><img src={next} alt="next" /></button>
        <button className='transparent'><img src={repeat} alt="next" /></button>
        </article>
       <progress max={100}></progress>
       </div>
       <article className='volume_control'>
        <img src={volumeup} alt="volumeup" />
        <input type="range" min={0} max={100}  value={50}/>
       </article>

    </section> 
    
  )
}

export default AudioComponent